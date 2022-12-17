import { getTableById } from '../../redux/tablesRedux';
import { useSelector } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import { useState } from 'react';

const Table = () => {
	const { tableId } = useParams();
	const [min, setMin] = useState(1);
	const [max, setMax] = useState(2);
	const [billVal, setBillVal] = useState(0);
	const minVal = 1;
	const maxVal = 10;
	const tableData = useSelector((state) => getTableById(state, tableId));
	console.log(tableData);
	const [status, setStatus] = useState(tableData.status);

	const handleChangeMin = (e) => {
		const value = Math.max(minVal, Math.min(maxVal, Number(e.target.value)));

		setMin(value);
	};

	const handleChangeMax = (e) => {
		const value = Math.max(minVal, Math.min(maxVal, Number(e.target.value)));

		setMax(value);
	};

	const handleChangeBill = (e) => {
		setBillVal(e.target.value);
	};

	const handleChange = (e) => {
		setStatus(e.target.value);
	};

	if (!tableData) return <Navigate to='/' />;
	return (
		<form>
			<h2>Table {tableData.id}</h2>
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
			<div className='d-flex flex-row my-4'>
				<h4>People: </h4>
				<input
					type='number'
					step='1'
					value={min}
					onChange={handleChangeMin}
					className='mx-4 rounded'
				/>
				<span className='fs-4'>/</span>
				<input
					type='number'
					step='1'
					value={max}
					onChange={handleChangeMax}
					size='sm'
					className='mx-4 w-2 rounded'
				/>
			</div>
			{status === 'Busy' ? (
				<div className='d-flex flex-row'>
					<h4>Bill: </h4>
					<span className='fs-4 mx-4'>$</span>
					<input
						type='text'
						value={billVal}
						className='rounded'
						onChange={handleChangeBill}
					/>
				</div>
			) : (
				<></>
			)}

			<button type='button' className='btn btn-primary my-4'>
				Update
			</button>
		</form>
	);
};

export default Table;
