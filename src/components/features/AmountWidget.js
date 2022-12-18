import { useState } from 'react';

const PeopleAmount = ({ tableData }) => {
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

	return (
		<>
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
		</>
	);
};

export default PeopleAmount;
