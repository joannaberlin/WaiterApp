import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
	return (
		<Nav className='navbar navbar-dark bg-primary rounded'>
			<Nav.Link className='text-white' as={NavLink} to='/'>
				Waiter.app
			</Nav.Link>
			<Nav.Link className='text-white' as={NavLink} to='/'>
				Home
			</Nav.Link>
		</Nav>
	);
};

export default NavBar;
