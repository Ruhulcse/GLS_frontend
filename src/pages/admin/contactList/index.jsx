import DataGrid from '@/components/shared/TableFilter/table/DataGrid'
import { getAllMessage } from '@/store/api/contact/contactSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { format } from "date-fns";

function ContactList() {
    const dispatch = useDispatch()
    const {contactMessage} = useSelector(state=>state.contact)
    useEffect(()=>{
        dispatch(getAllMessage())
    },[dispatch])
    const sortData = contactMessage?.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    const title = 'Contact Message List'
    const COLUMN = [
        {
            Header:'FirstName',
            accessor: "firstName",
            Cell: row => {
				return <span>{row?.cell?.value}</span>;
			},
        },
        {
            Header:'Last Name',
            accessor: "lastName",
            Cell: row => {
				return <span>{row?.cell?.value}</span>;
			},
        },
        {
            Header:'E-mail',
            accessor: "email",
            Cell: row => {
				return <span>{row?.cell?.value}</span>;
			},
        },
        {
            Header:'Subject',
            accessor: "subject",
            Cell: row => {
				return <span>{row?.cell?.value}</span>;
			},
        },
        {
            Header:'Message',
            accessor: "message",
            Cell: row => {
				return <span>{row?.cell?.value}</span>;
			},
        },
        {
            Header:"Time",
            accessor:"createdAt",
            Cell: ({ cell: { value } }) => {
                return <span>{format(new Date(value), "HH:mm:ss dd/MM/yyyy")}</span>;
            },
        },
        {
            Header:'Status',
            accessor: "status",
            Cell: row => {
				return <span>{row?.cell?.value}</span>;
			},
        },

    ]
    
  return (
    <>
        <DataGrid data={sortData} column={COLUMN} title={title}/>
    </>
  )
}

export default ContactList