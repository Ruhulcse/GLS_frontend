/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import React, { useEffect, useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable,
} from "react-table";

import Loading from "@/components/Loading";
import GlobalFilter from "@/components/shared/TableFilter/GlobalFilter";
import Dropdown from "@/components/ui/Dropdown";
import useToast from "@/hooks/useToast";
import { getMyBids } from "@/store/api/myBids/myBidsSlice";
import { dateTime, moneyFormatter } from "@/util/helpers";
import { Menu } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import fetchWrapper from "@/util/fetchWrapper";
import DataGrid from "@/components/shared/TableFilter/table/DataGrid";

const MyBidsGrid = ({ title = "My Bids" }) => {
  const { errorToast, successToast } = useToast();
  // const actions = [
  // 	{
  // 		name: 'Active',
  // 		icon: 'heroicons-outline:check-badge',
  // 	},
  // 	{
  // 		name: 'Deactivated',
  // 		icon: 'heroicons:x-mark',
  // 	},
  // 	{
  // 		name: 'Suspended',
  // 		icon: 'heroicons-outline:exclamation-circle',
  // 	},
  // 	{
  // 		name: 'Rejected',
  // 		icon: 'heroicons-outline:trash',
  // 	},
  // 	{
  // 		name: 'Blocked',
  // 		icon: 'heroicons-outline:no-symbol',
  // 	},
  // ];

  const updatedDelivered = async (id, newStatus, bidId) => {
    try {
      const response = await fetchWrapper.put(`/shipments/status/${id}`, {
        newStatus,
        bidId,
      });

      dispatch(getMyBids());
    } catch (error) {
      errorToast(error.message);
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
      Cell: ({ row }) =>
        row?.original.status === "pending" ? (
          <button disabled={true} className="cursor-not-allowed inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 text-warning-500 bg-warning-500">
            Pending
          </button>
        ) : (
			row.original.status=== "delivered"?<button className={`${row.original.status=== "delivered"&& 'cursor-not-allowed'}`}>Done</button> :
          <button className="inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-2 text-success-50 bg-success-500"
             onClick={(row.original.status === 'accepted' || row.original.status === 'assigned') ? () => updatedDelivered(row.original.shipmentId, 'in transit', row.original.bidId) : () => updatedDelivered(row.original.shipmentId, 'delivered', row.original.bidId)}
          >
           {row.original.status === 'accepted'|| row.original.status === 'assigned' ? 'In Transit' : 'Delivered'}
          </button>
        ),
    },
  ];

 

  const columns = useMemo(() => COLUMNS, []);
  const dispatch = useDispatch();
  const { myBids, loading } = useSelector((state) => state.myBids);
  

  useEffect(() => {
    dispatch(getMyBids());
  }, [dispatch]);



  if (loading) {
    return <Loading />;
  }

 
  return (
    <>
    <DataGrid title={title} data={myBids} column={COLUMNS}/>
    </>
  )
};

export default MyBidsGrid;
