import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import Title from '../common/Title';
import { updateTablesRequest } from '../../redux/tablesRedux';
import PropTypes from 'prop-types';

const TableForm = ({ tableData }) => {
	const [status, setStatus] = useState('');
	const [peopleAmount, setPeopleAmount] = useState(tableData.peopleAmount);
	const [maxPeopleAmount, setMaxPeopleAmount] = useState(
		tableData.maxPeopleAmount
	);
	const [bill, setBillVal] = useState(tableData.bill);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const id = tableData.id;

	const handleChangeBill = (e) => {
		const value = e.target.value;

		if (value === '') {
			setBillVal(0);
		} else {
			setBillVal(parseInt(e.target.value));
		}
	};
	const handleChange = (e) => {
		setStatus(e.target.value);
		setBillVal(0);
	};
	const handleChangeMin = (e) => {
		const max = maxPeopleAmount;
		const value = e.target.value;

		if (value === '') {
			setPeopleAmount(0);
		} else {
			setPeopleAmount(parseInt(value));
			if (parseInt(value) > max) {
				setPeopleAmount(parseInt(max));
			}
		}
	};
	const handleChangeMax = (e) => {
		const value = e.target.value;

		if (value === '') {
			setMaxPeopleAmount(peopleAmount);
		} else {
			setMaxPeopleAmount(parseInt(value));

			if (
				maxPeopleAmount > peopleAmount ||
				maxPeopleAmount < peopleAmount ||
				maxPeopleAmount === peopleAmount
			) {
				setPeopleAmount(parseInt(e.target.value));
			}
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(
			updateTablesRequest(tableData.id, {
				id,
				status,
				peopleAmount,
				maxPeopleAmount,
				bill,
			})
		);
		navigate('/');
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
						type='number'
						min='0'
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

// TableForm.propTypes = {

// }

export default TableForm;
