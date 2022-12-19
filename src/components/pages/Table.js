import { getTableById } from '../../redux/tablesRedux';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import TableForm from '../features/TableForm';
import Loading from '../common/Loading';

const Table = () => {
	const { tableId } = useParams();
	const [hasData, setHasData] = useState(false);
	const tableData = useSelector((state) => getTableById(state, tableId));
	// const navigate = useNavigate();

	useEffect(() => {
		if (tableData) {
			return () => {
				setHasData(true);
			};
		}
	}, [tableData]);

	if (!tableData) {
		return <Loading />;
	}

	if (hasData && tableData.id === tableId) {
		return <TableForm tableData={tableData} />;
	}

	// if (!tableData && tableId) {
	// 	return <Navigate to='/' />;
	// }

	// if (hasData) {
	// 	if (tableData.id === tableId) {
	// 		return <TableForm tableData={tableData} />;
	// 	}
	// }
	// if (!tableData) {

	// }
};

export default Table;
