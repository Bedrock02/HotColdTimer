const LandingStyles = {
  iconContainer: {
    display: 'flex',
    width: '50%',
    justifyContent: 'space-evenly',
    fontSize: '2em',
  },
  fire: {
    WebkitAnimation: 'pulsate-fwd 0.5s ease-in-out infinite both',
	  animation: 'pulsate-fwd 0.5s ease-in-out infinite both',
  },
  snowflake: {
    WebkitAnimation: 'shake-horizontal 1s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite both',
	  animation: 'shake-horizontal 1s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite both',
  }
}
export default LandingStyles;
