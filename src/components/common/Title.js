import PropTypes from 'prop-types';

const Title = (props) => {
	return (
		<h2 className='my-4'>
			{props.children} {props.id}
		</h2>
	);
};

Title.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Title;
