import Radium from 'radium';
import { fadeIn } from 'react-animations';

const imageURL = process.env.PUBLIC_URL + '/contact.jpg';

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
		color: '#FFFFFF'
	},
	backgroundImage: {
	  backgroundImage: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(' + imageURL + ')',
	  backgroundRepeat: 'no-repeat',
	  backgroundSize: 'cover',
	  backgroundPosition: 'center center',
	  height: '100%',
	  opacity: '0',
	  animation: 'x 2.4s linear forwards',
	  animationName: Radium.keyframes(fadeIn, 'fadeIn')
	},
}