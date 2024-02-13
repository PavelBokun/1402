import  { useState, useEffect } from 'react';

function PulsatingImage() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setScale((prevScale) => (prevScale === 1 ? 1.5 : 1));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="div" >
<img 
    src="https://ru-fun.ru/uploads/images/073b4d389f8fb408053e396e4fc5a847.jpg"
      alt="Pulsating Image"
      style={{ transform: `scale(${scale})` }}
      width={300}
      
    />
    </div>
    
  );
}

export default PulsatingImage;
