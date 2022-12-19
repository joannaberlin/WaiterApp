import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { getAllTables } from '../../redux/tablesRedux';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import Loading from '../common/Loading';

const TablesList = () => {
	const tables = useSelector((state) => getAllTables(state));
	// const dispatch = useDispatch();
	if (tables.length === 0) {
		return <Loading />;
	}
	return (
		<>
			<h2 className='fs-1 mx-3 my-4'>All tables</h2>
			<ul className='list-group list-group-flush'>
				{tables.map((table) => (
					<li
						className='list-group-item d-flex flex-row justify-content-between'
						key={table.id}
					>
						<div className='d-flex flex-row'>
							<h5 className='fs-3'>Table {table.id}</h5>
							<h5 className='mx-4 mt-2'>
								<span>
									<strong>Status:</strong>
								</span>
								<span className='mark'>{table.status}</span>
							</h5>
						</div>
						<Link key={table.id} to={'/table/' + table.id}>
							<Button>Show more</Button>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default TablesList;
