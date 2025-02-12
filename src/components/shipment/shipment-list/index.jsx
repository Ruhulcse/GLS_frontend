/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import Tooltip from "@/components/ui/Tooltip";
import React, { useEffect, useMemo, useState } from "react";
import {
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable,
  useFilters,
} from "react-table";

import Loading from "@/components/Loading";
import { BidModal } from "@/components/bid/bid-modal/BidModal";
import useToast from "@/hooks/useToast";
import { getShipment } from "@/store/api/shipment/shipmentSlice";
import { getAllShipments } from "@/store/api/shipments/shipmentsSlice";
import fetchWrapper from "@/util/fetchWrapper";
import {
  dateTime,
  moneyFormatter,
  swalConfirm,
  swalError,
  swalSuccess,
} from "@/util/helpers";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import GlobalFilter from "../../shared/TableFilter/GlobalFilter";
import ColumnFilter from "@/components/shared/TableFilter/ColumnFilter";
import { getAllShipperShipments } from "@/store/api/shipperShipments/shipperShipmentsSlice";

const ShipmentListGrid = ({ title = "Shipment List" }) => {
  const { user } = useSelector((state) => state.user);
  //console.log(user);

  const [shipmentId, setShipmentId] = useState(null);
  const COLUMNS = [
    {
      Header: "Type",
      accessor: "cargoType",
      Filter: ColumnFilter,
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>;
      },
    },
    {
      Header: "Number of Loads",
      accessor: "numberOfLoads",
      Filter: ColumnFilter,
      disableFilters: true,
      Cell: (row) => {
        return <span>#{row?.cell?.value}</span>;
      },
    },
    {
      Header: "Origin",
      accessor: "origin",
      Filter: ColumnFilter,
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>;
      },
    },
    {
      Header: "Destination",
      accessor: "destination",
      Filter: ColumnFilter,
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>;
      },
    },
    {
      Header: "Weight (in kg)",
      accessor: "weightKG",
      Filter: ColumnFilter,
      disableFilters: true,
      Cell: (row) => {
        return <span>{row?.cell?.value}</span>;
      },
    },
    {
      Header: "Offering Price",
      accessor: "offeringPrice",
      Filter: ColumnFilter,
      disableFilters: true,
      Cell: (row) => {
        return <span>{moneyFormatter(row?.cell?.value, "USD")}</span>;
      },
    },
    {
      Header: "PickUp Date",
      accessor: "pickUpDate",
      Filter: ColumnFilter,
      Cell: (row) => {
        return <span>{dateTime(row?.cell?.value)}</span>;
      },
    },
    {
      Header: "Delivery Date",
      accessor: "deliveryDate",
      Filter: ColumnFilter,
      Cell: (row) => {
        return <span>{dateTime(row?.cell?.value)}</span>;
      },
    },

    {
      Header: "status",
      accessor: "status",
      Filter: ColumnFilter,
      disableFilters: true,
      Cell: (row) => {
        return (
          // console.log(row)

          <span className="block w-full">
            <span
              className={` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${
                row?.cell?.value.toLowerCase() === "posted"
                  ? "text-success-500 bg-success-500"
                  : ""
              } 
				${row?.cell?.value === "due" ? "text-warning-500 bg-warning-500" : ""}
				${row?.cell?.value === "cancled" ? "text-danger-500 bg-danger-500" : ""}
        ${row?.cell?.value === "delivered" ? "text-green-700 bg-green-900" : ""}
        ${row?.cell?.value === "in transit" ? "text-yellow-500 bg-yellow-500" : ""}
				
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
      Filter: ColumnFilter,
      disableFilters: true,
      Cell: ({ value, row }) => {
        return (
          <div className="flex space-x-3 rtl:space-x-reverse">
            <Tooltip
              content="View"
              placement="top"
              arrow
              animation="shift-away"
            >
              <Link to={`/shipment/${row.original?._id}`}>
                <button className="action-btn" type="button">
                  <Icon icon="heroicons:eye" />
                </button>
              </Link>
            </Tooltip>
            {user.userType === "shipper" && (
              <Tooltip
                content="Edit"
                placement="top"
                arrow
                animation="shift-away"
              >
                <Link to={`/shipment/edit/${row.original?._id}`}>
                  <button className="action-btn" type="button">
                    <Icon icon="heroicons:pencil-square" />
                  </button>
                </Link>
              </Tooltip>
            )}
            {user.userType === "shipper" && (
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
                  onClick={() => deleteShipment(row.original?._id)}
                >
                  <Icon icon="heroicons:trash" />
                </button>
              </Tooltip>
            )}

            {/* bid button */}
            {user.userType === "carrier" && (
              <Tooltip
                content="Place Bid"
                placement="top"
                arrow
                animation="shift-away"
              >
                <button
                  className="action-btn"
                  type="button"
                  onClick={() => handlePlaceBid(row.original?._id)}
                >
                  <Icon icon="heroicons:tag" />
                </button>
              </Tooltip>
            )}
            {user.userType === "broker" && (
              <Tooltip
                content="Assign Load"
                placement="top"
                arrow
                animation="shift-away"
              >
                <button
                  className="action-btn"
                  type="button"
                  onClick={() => handlePlaceBid(row.original?._id)}
                >
                  <Icon icon="heroicons:tag" />
                </button>
              </Tooltip>
            )}
          </div>
        );
      },
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const columns = useMemo(() => COLUMNS, [user]);
  const [filterData, setFilterData] = useState([]);
  const { errorToast } = useToast();
  const dispatch = useDispatch();
  const { shipments, loading } = useSelector((state) => state.shipments);
  const { shipperShipments } = useSelector((state) => state.shipperShipments);

  useEffect(() => {
    if (user.userType === "shipper") {
      dispatch(getAllShipperShipments({ id: user._id }));
    } else {
      dispatch(getAllShipments());
    }
  }, [dispatch, user.userType, user._id]);

  useEffect(() => {
    if (user.userType === "shipper") {
      setFilterData(shipperShipments);
    } else {
      setFilterData(shipments);
    }
  }, [user.userType, shipperShipments, shipments]);

  const deleteShipment = async (id) => {
    try {
      swalConfirm(
        "Are you sure you want to delete this shipment?",
        "Are you sure  ?",
        "Yes, Delete"
      ).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const response = await fetchWrapper.delete(`shipments/${id}`);
            if (response.status === 200) {
              dispatch(getAllShipments());
              dispatch(getAllShipperShipments({ id: user._id }));
              //setFilterData(shipments)
              swalSuccess("Shipment deleted successfully");
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

  const handlePlaceBid = async (id) => {
    try {
      setIsOpen(true);
      setShipmentId(id);
      dispatch(getShipment({ id }));
    } catch (error) {
      errorToast(error?.message);
    }
  };

  const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = React.useRef();
      const resolvedRef = ref || defaultRef;

      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
      }, [resolvedRef, indeterminate]);

      return (
        <>
          <input
            type="checkbox"
            ref={resolvedRef}
            {...rest}
            className="table-checkbox"
          />
        </>
      );
    }
  );

  const tableInstance = useTable(
    {
      columns,
      data: filterData,
      //initialState:{globalFilter:''}
    },
    useFilters,
    // useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,

    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    //setGlobalFilter,
    prepareRow,
  } = tableInstance;

  const { pageIndex, pageSize } = state;

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Card>
        <div className="md:flex justify-between items-center mb-6">
          <h4 className="card-title">{title}</h4>
          <div>
            {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} /> */}
          </div>
        </div>
        <div className="overflow-x-auto -mx-6">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden ">
              <table
                className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700"
                {...getTableProps}
              >
                <thead className="bg-slate-200 dark:bg-slate-700">
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                          scope="col"
                          className=" table-th "
                        >
                          <div>
                            {" "}
                            {column.render("Header")}
                            <span>
                              {column.isSorted
                                ? column.isSortedDesc
                                  ? " 🔽"
                                  : " 🔼"
                                : ""}
                            </span>
                          </div>
                          <div>
                            {column.canFilter ? column.render("Filter") : null}
                          </div>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody
                  className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700"
                  {...getTableBodyProps}
                >
                  {page.map((row) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td {...cell.getCellProps()} className="table-td">
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center">
          <div className=" flex items-center space-x-3 rtl:space-x-reverse">
            <select
              className="form-control py-2 w-max"
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
            >
              {[10, 25, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
              Page{" "}
              <span>
                {pageIndex + 1} of {pageOptions.length}
              </span>
            </span>
          </div>
          <ul className="flex items-center  space-x-3  rtl:space-x-reverse">
            <li className="text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180">
              <button
                className={` ${
                  !canPreviousPage ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                <Icon icon="heroicons:chevron-double-left-solid" />
              </button>
            </li>
            <li className="text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180">
              <button
                className={` ${
                  !canPreviousPage ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                Prev
              </button>
            </li>
            {pageOptions.map((page, pageIdx) => (
              <li key={pageIdx}>
                <button
                  href="#"
                  aria-current="page"
                  className={` ${
                    pageIdx === pageIndex
                      ? "bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium "
                      : "bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "
                  }    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`}
                  onClick={() => gotoPage(pageIdx)}
                >
                  {page + 1}
                </button>
              </li>
            ))}
            <li className="text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180">
              <button
                className={` ${
                  !canNextPage ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => nextPage()}
                disabled={!canNextPage}
              >
                Next
              </button>
            </li>
            <li className="text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180">
              <button
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
                className={` ${
                  !canNextPage ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <Icon icon="heroicons:chevron-double-right-solid" />
              </button>
            </li>
          </ul>
        </div>
        {/*end*/}
      </Card>
      <BidModal isOpen={isOpen} setIsOpen={setIsOpen} shipmentId={shipmentId} />
    </>
  );
};

export default ShipmentListGrid;
