import DataGrid from "@/components/shared/TableFilter/table/DataGrid";
import { getAllMessage } from "@/store/api/contact/contactSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dateTime, swalConfirm, swalError, swalSuccess } from "@/util/helpers";
import fetchWrapper from "@/util/fetchWrapper";
import Tooltip from "@/components/ui/Tooltip";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { sliceText } from "@/util/textSlice";
import Loading from "@/components/Loading";
function ContactList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { contactMessage,loading } = useSelector((state) => state.contact);
  useEffect(() => {
    dispatch(getAllMessage());
  }, [dispatch]);

  const handleNavigate = async (data) => {
    if (data?.status === "unread") {
      try {
        await fetchWrapper.put(`contact/${data._id}`, { status: "read" });
        navigate(`/message/${data._id}`);
      } catch (error) {}
    }
    navigate(`/message/${data._id}`);
  };

  const sortData = contactMessage
    ?.slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const title = "Contact Message List";
  const COLUMN = [
    {
      Header: "FirstName",
      accessor: "firstName",
      Cell: ({ row }) => {
        return (
          <span
            className={`${
              row?.original?.status === "unread" ? "font-bold" : ""
            }`}
          >
            {row.original.firstName}
          </span>
        );
      },
    },
    {
      Header: "Last Name",
      accessor: "lastName",
      Cell: ({row}) => {
        return <span  className={`${
            row?.original?.status === "unread" ? "font-bold" : ""
          }`}>{row?.original?.lastName}</span>;
      },
    },
    {
      Header: "E-mail",
      accessor: "email",
      Cell: ({row}) => {
        return <span  className={`${
            row?.original?.status === "unread" ? "font-bold" : ""
          }`}>{row?.original?.email}</span>;
      },
    },
    {
      Header: "Subject",
      accessor: "subject",
      Cell: ({row}) => {
        return <span  className={`${
            row?.original?.status === "unread" ? "font-bold" : ""
          }`}>{sliceText(row?.original?.subject,15)}</span>;
      },
    },
    {
      Header: "Message",
      accessor: "message",
      Cell: ({row}) => {
        return <span  className={`${
            row?.original?.status === "unread" ? "font-bold" : ""
          }`}>{sliceText(row?.original?.message,20)}</span>;
      },
    },
    {
      Header: "Time",
      accessor: "createdAt",
      Cell: ({row}) => {
        return <span  className={`${
            row?.original?.status === "unread" ? "font-bold" : ""
          }`}>{dateTime(row?.original?.createdAt)}</span>;
      },
    },
    {
      Header: "Action",
      accessor: "action",
      Cell: ({ row }) => {
        return (
          <div className="flex space-x-3 rtl:space-x-reverse">
            <Tooltip
              content="View"
              placement="top"
              arrow
              animation="shift-away"
            >
              <Link onClick={() => handleNavigate(row.original)}>
                <button className="action-btn" type="button">
                  <Icon icon="heroicons:eye" />
                </button>
              </Link>
            </Tooltip>
            <Tooltip
              content="Delete"
              placement="top"
              arrow
              animation="shift-away"
              theme="danger"
            >
              <button
                className="action-btn"
                type="button"
                onClick={() => deleteMessage(row.original?._id)}
              >
                <Icon icon="heroicons:trash" />
              </button>
            </Tooltip>
          </div>
        );
      },
    },
  ];

  const deleteMessage = async (id) => {
    try {
      swalConfirm(
        "Are you sure you want to delete this contact message?",
        "Are you sure  ?",
        "Yes, Delete"
      ).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const response = await fetchWrapper.delete(`contact/${id}`);
            console.log(response);

            if (response.status === 200) {
              dispatch(getAllMessage());
              swalSuccess("Contact message deleted successfully");
            }
          } catch (error) {
            swalError(error);
          }
        }
      });
    } catch (error) {
      swalError(error);
    }
  };

  if(loading) {
    return  <Loading/>
  }
  return (
    <>
      <DataGrid data={sortData} column={COLUMN} title={title} />
    </>
  );
}

export default ContactList;
