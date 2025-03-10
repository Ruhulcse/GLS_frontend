/* eslint-disable react/prop-types */
import Button from "@/components/ui/Button";
import FormGroup from "@/components/ui/FormGroup";
import Textarea from "@/components/ui/Textarea";
import Textinput from "@/components/ui/Textinput";
import useToast from "@/hooks/useToast";
import { getAllAssignBidsByBroker } from "@/store/api/assignBids/assignBidsSlice";
import fetchWrapper from "@/util/fetchWrapper";
import { convertMoneyStringToNumber } from "@/util/helpers";
import { yupResolver } from "@hookform/resolvers/yup";
import moment from "moment";
import { use, useEffect } from "react";
import { useState } from "react";
import Flatpickr from "react-flatpickr";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const BidForm = ({ onClose, shipmentId,isEdit,setIsEdit }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  console.log("isEdit", isEdit);  
  

  const { user } = useSelector((state) => state.user);

  const {assignBid} = useSelector((state) => state.singleBid);
  //const data = useSelector((state) => state.singleBid);
  console.log(assignBid);
  
  

  const [loading, setLoading] = useState(false);
  const FormValidationSchema = yup
    .object({
      bidAmount: yup.string().required("Bid Amount is Required"),
      proposedTimeline: yup.string().required("Proposed Timeline is Required"),
	  email: yup.string().email("Invalid email").when("isBroker", { is: true, then: yup.string().required("Email is Required"),otherwise: yup.string().notRequired()}),
    })
    .required();

  const { successToast, errorToast } = useToast();

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm({
    resolver: yupResolver(FormValidationSchema,{context:{isBroker:user.userType === 'broker'}}),
    mode: "onChange",
  });

  useEffect(() => {
    if (isEdit && assignBid) {
      reset({
        bidAmount: assignBid?.bidAmount || "",
        proposedTimeline: assignBid?.proposedTimeline || "",
        email: assignBid?.carrierId?.email || "",
        remarks: assignBid?.remarks || "",
      });
    }
  }, [isEdit, assignBid, reset]);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const basePayload = {
        ...data,
        shipmentId,
        bidAmount: convertMoneyStringToNumber(data.bidAmount),
      };
      const payload = user.userType === 'broker' ? {...basePayload, brokerId: user._id} : basePayload;
      let response;
      if(user.userType === 'broker'&&isEdit){
        response = await fetchWrapper.put(`/shipment/bids/${assignBid._id}`, payload);
      } else {
        const endpoint = user.userType === 'broker' ? `/shipments/broker/bid` : `/shipments/bid`;
        response = await fetchWrapper.post(endpoint, payload);
      }

      if(response.status === 201){
        successToast("Bid placed successfully!");
        if(user.userType === 'broker'){
          navigate("/assign-loads");
        } else {
          navigate("/bids");
        }
        onClose();  
      }
      if(response.status === 200){
        successToast("Bid updated successfully!");
        navigate("/assign-loads"); 
        dispatch(getAllAssignBidsByBroker()); 

        onClose();  
      }
     
    } catch (error) {
      console.log("error",error);
      
      errorToast(error?.response.data.message);
      onClose();
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 my-3">
        <div className="grid-cols-1 grid">
          <FormGroup
            label={
              <div>
                Bid Amount <span className="text-red-500">*</span>
              </div>
            }
            id="default-picker"
            error={errors.bidAmount}
          >
            <Controller
              name="bidAmount"
              control={control}
              render={({ field }) => (
                <Textinput
                  id="nu"
                  defaultValue={assignBid?.bidAmount || ""}
                  options={{ numeral: true }}
                  placeholder="Bid Amount"
                  
                  value={field.value}
                  onChange={(data) => {
                    field.onChange(data);
                  }}
                  className="my-2"
                />
              )}
            />
          </FormGroup>

          <FormGroup
            label={
              <div>
                Proposed Timeline <span className="text-red-500">*</span>
              </div>
            }
            id="default-picker"
            defaultValue={assignBid?.proposedTimeline }
            error={errors.proposedTimeline}
          >
            <Controller
              name="proposedTimeline"
              control={control}
              render={({ field }) => (
                <Flatpickr
                  className="form-control my-2 py-0"
                  id="hf-picker"
                  
                  placeholder="Proposed Timeline"
                  value={field.value || assignBid?.proposedTimeline }
                  onChange={(date) => {
                    field.onChange(moment(date[0]).format("YYYY-MM-DD"));
                  }}
                  options={{
                    altInput: true,
                    altFormat: "F j, Y",
                    dateFormat: "Y-m-d",
                  }}
                />
              )}
            />
          </FormGroup>
          {user.userType === "broker" && (
            <FormGroup
              label={
                <div>
                  Carrier Email <span className="text-red-500">*</span>
                </div>
              }
              id="default-picker"
              error={errors.email}
            >
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Textinput
                    id="nu"
                    defaultValue={assignBid?.carrierId?.email||"" }
                    options={{ numeral: true }}
                    placeholder="Carrier Email"
                    value={field.value}
                    onChange={(data) => {
                      field.onChange(data);
                    }}
                    className="my-2"
                  />
                )}
              />
            </FormGroup>
          )}
          <Textarea
            label="Remarks"
            name="remarks"
            id="pn4"
            placeholder="Enter remarks"
            row="5"
            
            register={register}
            className="my-2"
          />

          <div className="ltr:text-right rtl:text-left mt-3">
            <Button
              className="btn btn-primary text-center"
              type="submit"
              text={isEdit ? "Update Bid" : "Place Bid"}
              isLoading={loading}
              disabled={loading}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default BidForm;
