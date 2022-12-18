import { useState } from 'react';

const BillAmount = ({ status }) => {
	const [billVal, setBillVal] = useState(0);

	const handleChange = (e) => {
		setBillVal(e.target.value);
	};

	return status === 'Busy' ? (
		<div className='d-flex flex-row'>
			<h4>Bill: </h4>
			<span className='fs-4 mx-4'>$</span>
			<input
				type='text'
				value={billVal}
				className='rounded'
				onChange={handleChange}
			/>
		</div>
	) : (
		<></>
	);
};

export default BillAmount;
