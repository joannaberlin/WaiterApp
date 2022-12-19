import { getTableById } from '../../redux/tablesRedux';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import TableForm from '../features/TableForm';

const Table = () => {
	const { tableId } = useParams();
	const tableData = useSelector((state) => getTableById(state, tableId));

	useEffect(() => {}, []);

	if (!tableData) {
		return <h2>Loading...</h2>;
	}

	return <TableForm tableData={tableData} />;
};

export default Table;
