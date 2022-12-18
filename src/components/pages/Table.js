import { getTableById } from '../../redux/tablesRedux';
import { useSelector } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PeopleAmount from '../features/AmountWidget';
import Button from '../common/Button';
import BillAmount from '../features/BillAmount';

const Table = () => {
	const { tableId } = useParams();
	const tableData = useSelector((state) => getTableById(state, tableId));
	// const [billVal, setBillVal] = useState(0);
	const [status, setStatus] = useState(null);

	useEffect(() => {
		if (tableData !== undefined) {
			return () => {
				setStatus(tableData.status);
			};
		}
	}, [tableData]);

	// const handleChangeBill = (e) => {
	// 	setBillVal(e.target.value);
	// };
	const handleChange = (e) => {
		setStatus(e.target.value);

		if (e.target.value === 'Free' || e.target.value === 'Cleaning') {
			// setPeopleMinVal(0);
		}
	};

	// if (!tableData.id) return <Navigate to='/' />;
	if (tableData === undefined) {
		return <h2>Loading...</h2>;
	}
	return (
		<form>
			<h2 className='my-4'>Table {tableData.id}</h2>
			<div className='d-flex flex-row'>
				<h4>Status: </h4>
				<select
					className='mx-4 rounded'
					defaultValue={tableData.status}
					onChange={handleChange}
				>
					<option value='Free'>Free</option>
					<option value='Reserved'>Reserved</option>
					<option value='Busy'>Busy</option>
					<option value='Cleaning'>Cleaning</option>
				</select>
			</div>
			<PeopleAmount tableData={tableData} />
			{/* {status === 'Busy' && tableData !== undefined ? (
				<BillAmount status={tableData.status} />
			) : (
				<></>
			)} */}
			<BillAmount status={status} />
			<Button>Update</Button>
		</form>
	);
};

export default Table;
