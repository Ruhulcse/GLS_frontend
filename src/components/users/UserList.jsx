/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Card from '@/components/ui/Card';
import Icon from '@/components/ui/Icon';
import React, { useEffect, useMemo } from 'react';
import {
	useGlobalFilter,
	usePagination,
	useRowSelect,
	useSortBy,
	useTable,
} from 'react-table';

import useToast from '@/hooks/useToast';
import { getAllUsers } from '@/store/api/users/usersSlice';
import fetchWrapper from '@/util/fetchWrapper';
import { dateTime } from '@/util/helpers';
import { Menu } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../Loading';
import GlobalFilter from '../shared/TableFilter/GlobalFilter';
import Dropdown from '../ui/Dropdown';

const UserList = ({ title = 'User List' }) => {
	const { errorToast, successToast } = useToast();
	const actions = [
		{
			name: 'Active',
			icon: 'heroicons-outline:check-badge',
		},
		{
			name: 'Deactivated',
			icon: 'heroicons:x-mark',
		},
		{
			name: 'Suspended',
			icon: 'heroicons-outline:exclamation-circle',
		},
		{
			name: 'Rejected',
			icon: 'heroicons-outline:trash',
		},
		{
			name: 'Blocked',
			icon: 'heroicons-outline:no-symbol',
		},
	];

	const COLUMNS = [
		{
			Header: 'First Name',
			accessor: 'firstName',
			Cell: row => {
				return <span>{row?.cell?.value}</span>;
			},
		},
		{
			Header: 'Last Name',
			accessor: 'lastName',
			Cell: row => {
				return <span>{row?.cell?.value}</span>;
			},
		},
		{
			Header: 'Email',
			accessor: 'email',
			Cell: row => {
				return (
					<span className='lowercase underline-offset-1'>
						<a className='text-sky-400' href={`mailto:${row?.cell?.value}`}>
							{row?.cell?.value}
						</a>
					</span>
				);
			},
		},
		{
			Header: 'Created At',
			accessor: 'createdAt',
			Cell: row => {
				return <span>{dateTime(row?.cell?.value)}</span>;
			},
		},

		{
			Header: 'status',
			accessor: 'userStatus',
			Cell: row => {
				return (
					<span className='block w-full'>
						<span
							className={` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${
								row?.cell?.value?.toLowerCase() === 'active'
									? 'text-success-500 bg-success-500'
									: ''
							} 
            ${
							row?.cell?.value?.toLowerCase() === 'pending'
								? 'text-warning-500 bg-warning-500'
								: ''
						}
            ${
							row?.cell?.value?.toLowerCase() === 'cancled'
								? 'text-danger-500 bg-danger-500'
								: ''
						}

						${
							row?.cell?.value?.toLowerCase() === 'deactivated'
								? 'text-white-500 bg-gray-600'
								: ''
						}

						${
							row?.cell?.value?.toLowerCase() === 'suspended'
								? 'text-red-500 bg-red-600'
								: ''
						}

						${
							row?.cell?.value?.toLowerCase() === 'rejected'
								? 'text-red-500 bg-red-500'
								: ''
						}

						${
							row?.cell?.value?.toLowerCase() === 'blocked'
								? 'text-red-500 bg-red-700'
								: ''
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
			Header: 'action',
			accessor: 'action',
			Cell: row => {
				const filteredActions = actions.filter(
					item =>
						item.name.toLowerCase() !==
						row?.cell?.row?.original?.userStatus?.toLowerCase()
				);
				return (
					<div>
						<Dropdown
							classMenuItems='right-0 w-[140px] top-[110%] '
							label={
								<span className='text-xl text-center block w-full'>
									<Icon icon='heroicons-outline:dots-vertical' />
								</span>
							}
						>
							<div className='divide-y divide-slate-100 dark:divide-slate-800'>
								{filteredActions?.map((item, i) => (
									<Menu.Item
										key={i}
										onClick={() =>
											updateUserStatus(
												row?.cell?.row?.original?._id,
												item?.name
											)
										}
									>
										<div
											className={`hover:bg-slate-900 hover:text-white dark:hover:bg-slate-600 dark:hover:bg-opacity-50 w-full border-b border-b-gray-500 border-opacity-10 px-4 py-2 text-sm  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center rtl:space-x-reverse `}
										>
											<span className='text-base'>
												<Icon icon={item.icon} />
											</span>
											<span>{item.name}</span>
										</div>
									</Menu.Item>
								))}
							</div>
						</Dropdown>
					</div>
				);
			},
		},
	];

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
						type='checkbox'
						ref={resolvedRef}
						{...rest}
						className='table-checkbox'
					/>
				</>
			);
		}
	);

	const columns = useMemo(() => COLUMNS, []);
	const dispatch = useDispatch();
	const { users, loading } = useSelector(state => state.users);
	// const { user_id } = useSelector(state => state.auth);

	useEffect(() => {
		dispatch(getAllUsers());
	}, [dispatch]);

	const tableInstance = useTable(
		{
			columns,
			data: users,
		},

		useGlobalFilter,
		useSortBy,
		usePagination,
		useRowSelect,

		hooks => {
			hooks.visibleColumns.push(columns => [
				{
					id: 'selection',
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

	const updateUserStatus = async (id, status) => {
		console.log('updateUserStatus == id, status:', id, status);
		try {
			const response = await fetchWrapper.put(`user/${id}`, {
				userStatus: status,
			});
			console.log('updateUserStatus == response:', response);
			if (response.status === 200) {
				dispatch(getAllUsers());
			}
		} catch (error) {
			errorToast(error);
		}
	};
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
		setGlobalFilter,
		prepareRow,
	} = tableInstance;

	const { globalFilter, pageIndex, pageSize } = state;

	if (loading) {
		return <Loading />;
	}

	return (
		<>
			<Card>
				<div className='md:flex justify-between items-center mb-6'>
					<h4 className='card-title'>{title}</h4>
					<div>
						<GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
					</div>
				</div>
				<div className='overflow-x-auto -mx-6'>
					<div className='inline-block min-w-full align-middle'>
						<div className='overflow-hidden '>
							<table
								className='min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700'
								{...getTableProps}
							>
								<thead className='bg-slate-200 dark:bg-slate-700'>
									{headerGroups.map(headerGroup => (
										<tr {...headerGroup.getHeaderGroupProps()}>
											{headerGroup.headers.map(column => (
												<th
													{...column.getHeaderProps(
														column.getSortByToggleProps()
													)}
													scope='col'
													className=' table-th '
												>
													{column.render('Header')}
													<span>
														{column.isSorted
															? column.isSortedDesc
																? ' 🔽'
																: ' 🔼'
															: ''}
													</span>
												</th>
											))}
										</tr>
									))}
								</thead>
								<tbody
									className='bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700'
									{...getTableBodyProps}
								>
									{page.map(row => {
										prepareRow(row);
										return (
											<tr {...row.getRowProps()}>
												{row.cells.map(cell => {
													return (
														<td {...cell.getCellProps()} className='table-td'>
															{cell.render('Cell')}
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
				<div className='md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center'>
					<div className=' flex items-center space-x-3 rtl:space-x-reverse'>
						<select
							className='form-control py-2 w-max'
							value={pageSize}
							onChange={e => setPageSize(Number(e.target.value))}
						>
							{[10, 25, 50].map(pageSize => (
								<option key={pageSize} value={pageSize}>
									Show {pageSize}
								</option>
							))}
						</select>
						<span className='text-sm font-medium text-slate-600 dark:text-slate-300'>
							Page{' '}
							<span>
								{pageIndex + 1} of {pageOptions.length}
							</span>
						</span>
					</div>
					<ul className='flex items-center  space-x-3  rtl:space-x-reverse'>
						<li className='text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180'>
							<button
								className={` ${
									!canPreviousPage ? 'opacity-50 cursor-not-allowed' : ''
								}`}
								onClick={() => gotoPage(0)}
								disabled={!canPreviousPage}
							>
								<Icon icon='heroicons:chevron-double-left-solid' />
							</button>
						</li>
						<li className='text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180'>
							<button
								className={` ${
									!canPreviousPage ? 'opacity-50 cursor-not-allowed' : ''
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
									href='#'
									aria-current='page'
									className={` ${
										pageIdx === pageIndex
											? 'bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium '
											: 'bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  '
									}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`}
									onClick={() => gotoPage(pageIdx)}
								>
									{page + 1}
								</button>
							</li>
						))}
						<li className='text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180'>
							<button
								className={` ${
									!canNextPage ? 'opacity-50 cursor-not-allowed' : ''
								}`}
								onClick={() => nextPage()}
								disabled={!canNextPage}
							>
								Next
							</button>
						</li>
						<li className='text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180'>
							<button
								onClick={() => gotoPage(pageCount - 1)}
								disabled={!canNextPage}
								className={` ${
									!canNextPage ? 'opacity-50 cursor-not-allowed' : ''
								}`}
							>
								<Icon icon='heroicons:chevron-double-right-solid' />
							</button>
						</li>
					</ul>
				</div>
				{/*end*/}
			</Card>
		</>
	);
};

export default UserList;
