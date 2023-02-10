import React, { useEffect, useState } from 'react'
import clone from '../clonexImages/clonex1.png'
import { RandomValue } from '../RandomValue';

function Picture() {
  const [imageNumber,setImageNumber] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentValue = RandomValue();
      setImageNumber(currentValue);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='Picture'>
        <img src={require(`../clonexImages/clonex${imageNumber}.png`)} style={{height:"100%"}}></img>
    </div>
  )
}

export default Picture