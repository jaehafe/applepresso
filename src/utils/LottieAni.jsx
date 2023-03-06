import React, { useRef, useEffect } from 'react';
import lottie from 'lottie-web';
// import loginAni from '../assets/login-ani-01.json';

const LottieAni = ({ aniName }) => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      // autoplay: true,
      animationData: aniName,
    });
  }, []);

  return <div ref={container}></div>;
};

export default LottieAni;
