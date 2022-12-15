import { Routes, Route } from 'react-router-dom';
import Table from './components/pages/Table';
import TablesList from './components/pages/TablesList';
import Header from './components/views/Header';
import Footer from './components/views/Footer';
import PageNotFound from './components/pages/PageNotFound';
import { Container } from 'react-bootstrap';

function App() {
	return (
		<Container>
			<Header />
			<Routes>
				<Route path='/' element={<TablesList />} />
				<Route path='/table/:id' element={<Table />} />
				<Route path='*' element={<PageNotFound />} />
			</Routes>
			<Footer />
		</Container>
	);
}

export default App;
