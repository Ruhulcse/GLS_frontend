/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Card from '@/components/ui/Card';
import Icon from '@/components/ui/Icon';
import React, { useMemo } from 'react';
import {
	useGlobalFilter,
	usePagination,
	useRowSelect,
	useSortBy,
	useTable,
} from 'react-table';

import { humanDate, moneyFormatter } from '@/util/helpers';
import { useSelector } from 'react-redux';
import GlobalFilter from '../../shared/TableFilter/GlobalFilter';

const COLUMNS = [
	{
		Header: 'Bid Amount',
		accessor: 'bidAmount',
		Cell: row => {
			return <span>{moneyFormatter(row?.cell?.value, 'USD')}</span>;
		},
	},
	{
		Header: 'Proposed Timeline',
		accessor: 'proposedTimeline',
		Cell: row => {
			return <span>{humanDate(row?.cell?.value)}</span>;
		},
	},
	{
		Header: 'Status',
		accessor: 'status',
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

const ShipmentBidsGrid = ({ title = 'Shipment Bids' }) => {
	const { bids } = useSelector(state => state.shipment.shipment);
	const columns = useMemo(() => COLUMNS, [bids]);

	const tableInstance = useTable(
		{
			columns,
			data: bids,
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

export default ShipmentBidsGrid;
