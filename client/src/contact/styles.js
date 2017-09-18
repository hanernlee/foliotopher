import Radium from 'radium';

const imageURL = process.env.PUBLIC_URL + '/contact.jpg';

var floatUpDown = Radium.keyframes({
  'from': {
    opacity: '0',
    transform: 'translateY(-20px)'
  },
  'to': {
    opacity: '1',
    transform: 'translateY(20px)'
  }
});

export const styles = {
	landingContainer: {
	  position: 'relative',
	  transition: 'transform 0.6s ease',
	  overflow: 'hidden',
	  backgroundColor: '#191919',
    transform: 'translateZ(0)',

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
    transition: '1.2s cubic-bezier(0.785, 0.135, 0.15, 0.86) all',
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
	},
	backgroundImage: {
	  backgroundImage: 'linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8) ), url(' + imageURL + ')',
	  backgroundRepeat: 'no-repeat',
	  backgroundSize: 'cover',
	  backgroundPosition: 'center center',
	  width: '100%',
    height: '100vh',
	},
	infoContainer: {
		textAlign: 'center',
		display: 'flex',
		alignItems: 'center',
    flexDirection: 'column',

    '@media (max-width: 830px)': {
      margin: '0 56px'
    },
    '@media (max-width: 720px)': {
      margin: '0 32px'
    }
	},
  infoDescription: {
    fontSize: '14px',
    textAlign: 'left',
    color: 'rgb(184, 184, 184)'
  },
	infoTitle: {
    fontSize: '80px',
    marginBottom: '20px',
    textAlign: 'center',
    transition: '1.2s ease all',
    fontWeight: '600',
    color: '#FFFFFF',
    opacity: '0',

    '@media (max-width: 540px)': {
      fontSize: '40px',
    },
	},
  infoPara: {
    paddingTop: '10px',
    opacity: '0',
    color: '#6a6a6a',
  },
  hackRotateContainer: {
    width: '200px',
    height: '200px',
    position: 'absolute',
    visibility: 'hidden'
  },
  rotateWrapper:{
    opacity: '0',
  },
	rotateContainer: {
		position: 'relative',
    top: '30px',
    left: '-9px',
		width: '200px',
		height: '200px',
    margin: '20px auto',

		':hover': {
			animationPlayState: 'paused',
		},

    '@media (max-width: 380px)': {
      top: '20px'
    },
	},
	icon: {
		width: '20px',
		height: '20px',
		position: 'absolute',
	},
  pauseRotate: {
    animationPlayState: 'paused'
  },
  socialLinks: {
    color: '#FFFFFF'
  },
  hiddenHackContainer: {
    display: 'none',
    pointerEvents: 'none'
  },
  placeholder: {
    color: '#FFFFFF',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    textAlign: 'center'
  },
  loader: {
    fontFamily: "'Great Vibes', cursive",
    fontSize: '60px',
    animation: 'x 1.2s ease infinite alternate',
    animationName: floatUpDown,
  },
  bold: {
    color: 'rgb(184, 184, 184)',
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  email: {
    pointer: 'cursor'
  }
}
