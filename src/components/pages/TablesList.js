import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { getAllTables } from '../../redux/tablesRedux';

const TablesList = () => {
	const tables = useSelector((state) => getAllTables(state));
	// const dispatch = useDispatch();
	console.log(tables);

	return (
		<>
			<h2>Test</h2>
			<ul>
				{tables.map((table) => (
					<li key={table.id}>
						<h3>Table {table.id}</h3>
						<h5>Status: {table.status}</h5>
						<button>Show more</button>
					</li>
				))}
			</ul>
		</>
	);
};

export default TablesList;
