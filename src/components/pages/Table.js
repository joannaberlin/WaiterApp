import { getTableById } from '../../redux/tablesRedux';
import { useSelector } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';

const Table = () => {
	const { tableId } = useParams();
	console.log(tableId);
	// const tables = useSelector((state) => getAllTables(state));
	const tableData = useSelector((state) => getTableById(state, tableId));
	console.log(tableData);

	// if (!tableData) return <Navigate to='/' />;
	return (
		<div>
			<h2>{tableData.id}</h2>
		</div>
	);
};

export default Table;
