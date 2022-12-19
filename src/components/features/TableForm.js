import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../common/Button';
import Title from '../common/Title';
import { updateTable, updateTablesRequest } from '../../redux/tablesRedux';

const TableForm = ({ tableData }) => {
	const [status, setStatus] = useState('');
	const [peopleAmount, setPeopleMinVal] = useState(tableData.peopleAmount);
	const [maxPeopleAmount, setPeopleMaxVal] = useState(
		tableData.maxPeopleAmount
	);
	const [bill, setBillVal] = useState(0);

	const dispatch = useDispatch();

	const id = tableData.id;

	const handleChangeBill = (e) => {
		setBillVal(e.target.value);
	};

	const handleChange = (e) => {
		setStatus(e.target.value);
	};
	const handleChangeMin = (e) => {
		const max = maxPeopleAmount;
		parseInt(e.target.value);
		setPeopleMinVal(e.target.value);
		if (e.target.value > max) {
			setPeopleMinVal(max);
		}
	};

	const handleChangeMax = (e) => {
		parseInt(e.target.value);
		setPeopleMaxVal(e.target.value);
		if (e.target.value > peopleAmount) {
			setPeopleMinVal(parseInt(maxPeopleAmount) + 1);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// dispatch(
		// 	updateTable(tableData.id, {
		// 		id,
		// 		status,
		// 		peopleAmount,
		// 		maxPeopleAmount,
		// 		bill,
		// 	})
		// );
		dispatch(
			updateTablesRequest(tableData.id, {
				id,
				status,
				peopleAmount,
				maxPeopleAmount,
				bill,
			})
		);
	};

	useEffect(() => {
		if (tableData) {
			return () => {
				setStatus(tableData.status);
			};
		}
	}, [tableData]);

	return (
		<form onSubmit={handleSubmit}>
			<Title id={tableData.id}>Table</Title>
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
					value={peopleAmount}
					onChange={handleChangeMin}
					className='mx-4 rounded'
				/>
				<span className='fs-4'>/</span>
				<input
					type='number'
					min='0'
					max='10'
					step='1'
					value={maxPeopleAmount}
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
						value={bill}
						className='rounded'
						onChange={handleChangeBill}
					/>
				</div>
			) : (
				<></>
			)}
			<Button>Update</Button>
		</form>
	);
};

export default TableForm;
