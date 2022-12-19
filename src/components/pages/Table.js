import { getTableById, getAllTables } from '../../redux/tablesRedux';
import { useSelector } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import TableForm from '../features/TableForm';
import Loading from '../common/Loading';

const Table = () => {
	const { tableId } = useParams();
	const tableData = useSelector((state) => getTableById(state, tableId));
	const tables = useSelector((state) => getAllTables(state));

	if (!tableData) {
		for (let table of tables) {
			if (table.id !== tableId) {
				return <Navigate to='/' />;
			}
		}
		return <Loading />;
	}

	if (tableData && tableData.id === tableId) {
		return <TableForm tableData={tableData} />;
	}
};

export default Table;
