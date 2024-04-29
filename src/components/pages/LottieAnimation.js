import { Player } from '@lottiefiles/react-lottie-player';
import './LottieAnimation.css';

const LottieAnimation = () => {
	return (
		<div className=''>
			<Player
				autoplay
				loop
				src='https://assets4.lottiefiles.com/packages/lf20_29xm3xgf.json'
				style={{ height: '350px', maxWidth: '350px' }}
				className='bg-dark w-sm-75'
			>
				{/* <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} /> */}
			</Player>
		</div>
	);
};

export default LottieAnimation;
