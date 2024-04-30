import { useSelector } from 'react-redux';
import { getAllTables } from '../../redux/tablesRedux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateTablesApi } from '../../redux/tablesRedux';
import Button from '../common/Button';
import Loading from '../common/Loading';

const TablesList = () => {
	const tables = useSelector((state) => getAllTables(state));
	const dispatch = useDispatch();

	const handleAdd = () => {
		console.log('dupa');
		const id = Math.floor(Math.random() * 100).toString();
		dispatch(
			updateTablesApi({
				id: id,
				status: 'Free',
				peopleAmount: 0,
				maxPeopleAmount: 10,
				bill: 0,
			})
		);
		console.log(tables);
	};

	if (tables.length === 0) {
		return <Loading />;
	}

	return (
		<div className='rounded text-center'>
			<h2 className='fs-1 my-2 text-center text-dark'>Check your table:</h2>
			<ul className='list-group list-group-flush'>
				{tables.map((table) => (
					<li
						className='list-group-item d-flex flex-column flex-sm-row align-items-center justify-content-sm-between px-5 bg-transparent'
						key={table.id}
					>
						<div className='d-flex px-3 py-3 flex-column flex-sm-row align-items-center justify-content-sm-between bg-light bg-gradient card border-warning rounded'>
							<h5 className='fs-3'>Table {table.id}</h5>
							<h5 className='mx-4 mt-2'>
								<span>
									<strong>Status:</strong>
								</span>
								<span className='mark'>{table.status}</span>
							</h5>
						</div>
						<div>
							<Link key={table.id} to={'/table/' + table.id}>
								<Button>Show more</Button>
							</Link>
						</div>
					</li>
				))}
			</ul>
			<Button handleClick={handleAdd}>Add table</Button>
		</div>
	);
};

export default TablesList;
