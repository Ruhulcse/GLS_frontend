import { BidModal } from "@/components/bid/bid-modal/BidModal";
import DataGrid from "@/components/shared/TableFilter/table/DataGrid";
import Tooltip from "@/components/ui/Tooltip";
import { getAssignBid } from "@/store/api/assignBid/assignBidSlice";
import { getAllAssignBidsByBroker } from "@/store/api/assignBids/assignBidsSlice";
import { getShipment } from "@/store/api/shipment/shipmentSlice";
import { dateTime, moneyFormatter } from "@/util/helpers";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function AssignLoadList() {
  const { assignBids, loading } = useSelector((state) => state.assignBids);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [shipmentId, setShipmentId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    dispatch(getAllAssignBidsByBroker());
  }, [dispatch]);
  const handlePlaceBid = async ({id,bidId}) => {
    console.log(bidId);
    
    try {
      setIsOpen(true);
      setShipmentId(id);
      dispatch(getShipment({ id }));
      dispatch(getAssignBid({ id:bidId }));
      setIsEdit(true);
    } catch (error) {
      errorToast(error?.message);
    }
  };
  const COLUMNS = [
    {
      Header: "Shipment Id",
      accessor: "shipmentId",
      Cell: (row) => {
        return (
          <span className="text-blue-500 underline">
            <Link to={`/shipment/${row?.cell?.value}`} target="_blank">
              {row?.cell?.value}
            </Link>
          </span>
        );
      },
    },
    {
      Header: "Carrier",
      accessor: "carrierId.email",
      Cell: (row) => {
        return <span className="lowercase">{row?.cell?.value}</span>;
      },
    },
    {
      Header: "Origin",
      accessor: "origin",
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>;
      },
    },
    {
      Header: "Destination",
      accessor: "destination",
      Cell: (row) => {
        return (
          <span className="lowercase underline-offset-1">
            {row?.cell?.value}
          </span>
        );
      },
    },
    {
      Header: "Bid Amount",
      accessor: "bidAmount",
      Cell: (row) => {
        return (
          <span className="lowercase underline-offset-1">
            {moneyFormatter(row?.cell?.value)}
          </span>
        );
      },
    },
    {
      Header: "Proposed Timeline",
      accessor: "proposedTimeline",
      Cell: (row) => {
        return <span>{dateTime(row?.cell?.value)}</span>;
      },
    },
    {
      Header: "status",
      accessor: "status",
      Cell: (row) => {
        return (
          <span className="block w-full">
            <span
              className={` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${
                row?.cell?.value?.toLowerCase() === "delivered"
                  ? "text-success-500 bg-success-500"
                  : ""
              } 
                ${
                  row?.cell?.value?.toLowerCase() === "pending"
                    ? "text-warning-500 bg-warning-500"
                    : ""
                }
                ${
                  row?.cell?.value?.toLowerCase() === "cancled"
                    ? "text-danger-500 bg-danger-500"
                    : ""
                }
    
                            ${
                              row?.cell?.value?.toLowerCase() === "deactivated"
                                ? "text-white-500 bg-gray-600"
                                : ""
                            }
    
                            ${
                              row?.cell?.value?.toLowerCase() === "suspended"
                                ? "text-red-500 bg-red-600"
                                : ""
                            }
    
                            ${
                              row?.cell?.value?.toLowerCase() === "rejected"
                                ? "text-red-500 bg-red-500"
                                : ""
                            }
    
                            ${
                              row?.cell?.value?.toLowerCase() === "blocked"
                                ? "text-red-500 bg-red-700"
                                : ""
                            }
    
                
                 `}
            >
              {row?.cell?.value}
            </span>
          </span>
        );
      },
    },
    {
      Header: "action",
      accessor: "action",
      Cell: ({ value, row }) => {
        return (
          <div className="flex space-x-3 rtl:space-x-reverse">
            {
              <Tooltip
                content="Edit"
                placement="top"
                arrow
                animation="shift-away"
              >
                <button
                  className="action-btn"
                  type="button"
                  onClick={() => handlePlaceBid({id:row.original?.shipmentId,bidId:row.original?.bidId})}
                >
                  <Icon icon="heroicons:pencil-square" />
                </button>
              </Tooltip>
            }
          </div>
        );
      },
    },
  ];
  return (
    <>
      <DataGrid data={assignBids} title={"Assign Load List"} column={COLUMNS} />
      <BidModal isOpen={isOpen} setIsOpen={setIsOpen} shipmentId={shipmentId} isEdit={isEdit} />
    </>
  );
}

export default AssignLoadList;
