// Animation is from Animista
const LandingStyles = {
  container: {
    height: '80vh',
    width: '80vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    fontSize: '2em',
  },
  fire: {
    WebkitAnimation: 'pulsate-fwd 0.5s ease-in-out infinite both',
	  animation: 'pulsate-fwd 0.5s ease-in-out infinite both',
  },
  snowflake: {
    WebkitAnimation: 'shake-bottom 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite both',
	  animation: 'shake-bottom 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite both',
  }
}
export default LandingStyles;
