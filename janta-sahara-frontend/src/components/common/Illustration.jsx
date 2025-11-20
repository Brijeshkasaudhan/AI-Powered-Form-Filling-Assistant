import { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';

function Illustration({ src, style, className }) {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    if (typeof src === 'string') {
      fetch(src)
        .then(res => res.json())
        .then(data => setAnimationData(data));
    } else {
      setAnimationData(src);
    }
  }, [src]);

  return (
    <div className={className} style={style}>
      {animationData && (
        <Lottie
          loop
          animationData={animationData}
          play
          style={{ width: 250, height: 250 }}
        />
      )}
    </div>
  );
}

export default Illustration;
