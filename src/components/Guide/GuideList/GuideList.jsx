/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Loading from '@/components/Loading';
import GlobalFilter from '@/components/shared/TableFilter/GlobalFilter';
import Card from '@/components/ui/Card';
import Icon from '@/components/ui/Icon';
import Tooltip from '@/components/ui/Tooltip';
import { getAllGuideBlogs } from '@/store/api/guideblogs/guideblogsSlice';
import fetchWrapper from '@/util/fetchWrapper';
import { dateTime, swalConfirm } from '@/util/helpers';
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	useGlobalFilter,
	usePagination,
	useRowSelect,
	useSortBy,
	useTable,
} from 'react-table';


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

const GuideList = ({ title = 'Guide List' }) => {
	const COLUMNS = [
		{
			Header: 'Guide Title',
			accessor: 'title',
			Cell: row => {
				return <span>{row?.cell?.value}</span>;
			},
		},
		{
			Header: 'Category',
			accessor: 'category',
			Cell: row => {
				return <span>{row?.cell?.value}</span>;
			},
		},
		{
			Header: 'Status',
			accessor: 'status',
			Cell: row => {
				return <span>{row?.cell?.value}</span>;
			},
		},
		{
			Header: 'Published At',
			accessor: 'createdAt',
			Cell: row => {
				return <span>{dateTime(row?.cell?.value)}</span>;
			},
		},
	
		{
			Header: 'Action',
			accessor: 'action',
			Cell:({ row }) => {
				return (
					<div className='flex space-x-3 rtl:space-x-reverse'>
						<Tooltip content='View' placement='top' arrow animation='shift-away'>
						<Link to={`/guideblog-details/${row.original?._id}`}>
							<button className='action-btn' type='button'>
								<Icon icon='heroicons:eye' />
							</button>
							</Link>
						</Tooltip>
						<Tooltip content='Edit' placement='top' arrow animation='shift-away'>
						<Link to={`/guideblog/edit-guideblog/${row.original?._id}`}>
							<button className='action-btn' type='button'>
								<Icon icon='heroicons:pencil-square' />
							</button>
							</Link>
						</Tooltip>
						<Tooltip
							content='Delete'
							placement='top'
							arrow
							animation='shift-away'
							theme='danger'
						>
							<button className='action-btn' type='button' onClick={() => deleteGuideBlog(row.original?._id)}>
								<Icon icon='heroicons:trash' />
							</button>
						</Tooltip>
					</div>
				);
			},
		},
	];
	const columns = useMemo(() => COLUMNS, []);
	const dispatch = useDispatch();
	const { guideblogs, loading } = useSelector(state => state.guideblogs);
	useEffect(() => {
		dispatch(getAllGuideBlogs());
	}, [dispatch]);

	const deleteGuideBlog = async id => {
		try {
			swalConfirm(
				'Are you sure you want to delete this blog?',
				'Are you sure  ?',
				'Yes, Delete'
			).then(async result => {
				if (result.isConfirmed) {
					try {
						const response = await fetchWrapper.delete(`guide/${id}`);
						if (response.status === 200) {
							dispatch(getAllGuideBlogs());
							swalSuccess('Blog deleted successfully');
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
	const tableInstance = useTable(
		{
			columns,
		    data:guideblogs
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

export default GuideList;
