import { Routes, Route } from 'react-router-dom';
import Table from './components/pages/Table';
import TablesList from './components/pages/TablesList';
import About from './components/pages/About';
import Header from './components/views/Header';
import Footer from './components/views/Footer';
import PageNotFound from './components/pages/PageNotFound';
import { Container } from 'react-bootstrap';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTables } from './redux/tablesRedux';

function App() {
	const dispatch = useDispatch();

	useEffect(() => dispatch(fetchTables()), [dispatch]);

	return (
		<Container>
			<Header />
			<Routes>
				<Route path='/' element={<TablesList />} />
				<Route path='/table/:tableId' element={<Table />} />
				<Route path='*' element={<PageNotFound />} />
				<Route path='/about' element={<About />} />
			</Routes>
			<Footer />
		</Container>
	);
}

export default App;
