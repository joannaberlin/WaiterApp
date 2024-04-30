const Button = (props) => {
	return (
		<button className='btn btn-dark my-2 mx-2' onClick={props.handleClick}>
			{props.children}
		</button>
	);
};

export default Button;
