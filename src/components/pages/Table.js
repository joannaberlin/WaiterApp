import { getTableById, getAllTables } from '../../redux/tablesRedux';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import TableForm from '../features/TableForm';
import Loading from '../common/Loading';

const Table = () => {
	const { tableId } = useParams();
	const [hasData, setHasData] = useState(false);
	const tableData = useSelector((state) => getTableById(state, tableId));
	const tables = useSelector((state) => getAllTables(state));

	useEffect(() => {
		if (tableData) {
			return () => {
				setHasData(true);
			};
		}
	}, [tableData]);

	if (!tableData) {
		for (let table of tables) {
			if (table.id !== tableId) {
				return <Navigate to='/' />;
			}
		}
		return <Loading />;
	}

	if (hasData && tableData.id === tableId) {
		return <TableForm tableData={tableData} />;
	}
};

export default Table;
