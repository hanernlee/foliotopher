import Radium from 'radium';
import { fadeIn } from 'react-animations';

const imageURL = process.env.PUBLIC_URL + '/contact.jpg';

var spin = Radium.keyframes({
	'100%': {
	  transform: 'rotate(1turn)'
	}
});

export const styles = {
	landingContainer: {
	  height: '100vh',
	  position: 'relative',
	  transition: 'transform 1s ease',
	  overflow: 'hidden',
	  backgroundColor: '#191919',

	  '@media (max-width: 830px)': {
	    padding: '0 56px'
	  },
	  '@media (max-width: 720px)': {
	    padding: '0 32px'
	  }
	},
	slidein: {
	  transform: 'translateX(-300px)',
	  position: 'relative',
	  transition: 'transform 1.2s ease',
	  opacity: '0.2',

	  '@media (min-width: 720px)': {
	    minHeight: 'calc(100vh - 80px)',
	    transform: 'translateX(-400px)',
	  }
	},
	contactSection: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		color: '#FFFFFF',
		display: 'flex',
		flexWrap: 'nowrap',
		alignItems: 'center',
		justifyContent: 'center',
		width: '1024px',

		'@media (max-width: 1110px)': {
			width: '100%'
		},
		'@media (max-width: 580px)': {
			flexWrap: 'wrap',
		},
	},
	imageContainer: {
		width: '780px',
		flex: '1 1 70%',
		boxShadow: 'rgba(0, 0, 0, 0.3) 10px 10px 20px',
		marginRight: '20px',
		transition: '1.2 ease all',

		'@media (max-width: 1110px)': {
			width: '100%',
			marginLeft: '56px'
		},
		'@media (max-width: 720px)': {
			margin: '40px 32px'
		},
		'@media (max-width: 580px)': {
			flex: '1 1 100%',
			order: '2'
		},
	},
	backgroundImage: {
	  backgroundImage: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9) ), url(' + imageURL + ')',
	  backgroundRepeat: 'no-repeat',
	  backgroundSize: 'cover',
	  backgroundPosition: 'center center',
	  paddingTop: '56.25%',
	  width: '100%',
	  opacity: '0',
	  animation: 'x 2.4s linear forwards',
	  animationName: Radium.keyframes(fadeIn, 'fadeIn')
	},
	infoContainer: {
		width: '300px',
		textAlign: 'center',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		flex: '1 1 30%',
		marginLeft: '20px',
		transition: '1.2 ease all',

		'@media (max-width: 1110px)': {
			width: '100%',
			marginRight: '56px'
		},
		'@media (max-width: 720px)': {
			margin: '0 32px'
		},
		'@media (max-width: 580px)': {
			flex: '1 1 100%',
			order: '1'
		},
	},
	infoTitle: {
		marginBottom: '100px',

		'@media (max-width: 580px)': {
			marginBottom: '50px',
		},
	},
	rotateContainer: {
		position: 'relative',
		width: '200px',
		height: '200px',
		animation: 'linear 15s infinite',
		animationName: spin,
		margin: '0 auto',

		':hover': {
			animationPlayState: 'paused',
		},
	},
	icon: {
		width: '20px',
		height: '20px',
		position: 'absolute',
		animation: 'linear 15s infinite reverse',
		animationName: spin,
	},
  pauseRotate: {
    animationPlayState: 'paused'
  }
}
