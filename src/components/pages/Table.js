import { getTableById } from '../../redux/tablesRedux';
import { useSelector } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import { useState } from 'react';

const Table = () => {
	const { tableId } = useParams();
	const tableData = useSelector((state) => getTableById(state, tableId));
	const [billVal, setBillVal] = useState(0);
	const [status, setStatus] = useState(tableData.status);
	const [peopleMinVal, setPeopleMinVal] = useState(tableData.peopleAmount);
	const [peopleMaxVal, setPeopleMaxVal] = useState(tableData.maxPeopleAmount);

	const handleChangeMin = (e) => {
		const max = peopleMaxVal;
		setPeopleMinVal(e.target.value);
		if (e.target.value > max) {
			setPeopleMinVal(max);
		}
	};
	const handleChangeMax = (e) => {
		setPeopleMaxVal(e.target.value);
		if (e.target.value > peopleMinVal) {
			setPeopleMinVal(parseInt(peopleMaxVal) + 1);
		}
	};
	const handleChangeBill = (e) => {
		setBillVal(e.target.value);
	};
	const handleChange = (e) => {
		setStatus(e.target.value);

		if (e.target.value === 'Free' || e.target.value === 'Cleaning') {
			setPeopleMinVal(0);
		}
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
					min='0'
					max='10'
					step='1'
					value={peopleMinVal}
					onChange={handleChangeMin}
					className='mx-4 rounded'
				/>
				<span className='fs-4'>/</span>
				<input
					type='number'
					min='0'
					max='10'
					step='1'
					value={peopleMaxVal}
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
