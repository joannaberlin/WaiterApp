import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
	return (
		<Nav className='navbar navbar-dark bg-dark bg-gradient rounded'>
			<Nav.Link className='text-white' as={NavLink} to='/'>
				Round The Table
			</Nav.Link>
			<div className='d-flex'>
				<Nav.Link className='text-white' as={NavLink} to='/'>
					Home
				</Nav.Link>
				<Nav.Link className='text-white' as={NavLink} to='/about'>
					About
				</Nav.Link>
			</div>
		</Nav>
	);
};

export default NavBar;
