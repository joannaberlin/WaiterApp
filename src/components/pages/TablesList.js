import { useSelector } from 'react-redux';
import { getAllTables } from '../../redux/tablesRedux';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import Loading from '../common/Loading';

const TablesList = () => {
	const tables = useSelector((state) => getAllTables(state));

	if (tables.length === 0) {
		return <Loading />;
	}

	return (
		<div className='rounded'>
			<h2 className='fs-1 my-2 text-center text-dark'>Check your table:</h2>
			<ul className='list-group list-group-flush'>
				{tables.map((table) => (
					<li
						className='list-group-item d-flex flex-column flex-sm-row align-items-center justify-content-sm-between px-5'
						key={table.id}
					>
						<div className='d-flex px-3 py-3 flex-column flex-sm-row align-items-center justify-content-sm-between bg-secondary rounded'>
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
		</div>
	);
};

export default TablesList;
