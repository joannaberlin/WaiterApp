const Title = (props) => {
	return (
		<h2 className='my-4'>
			{props.children} {props.id}
		</h2>
	);
};

export default Title;
