import Image from 'next/image';
import React, { useState } from 'react';

import img from '../../assets/props/img2.jpg';

const Home = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="home-container">
      <div className="logo">
        <div className={click ? 'hover-show-active' : 'hover-show'} onClick={handleClick}>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>

        {/* <Image src={img} alt='man shadow' layout='fill'/> */}
      </div>
    </div>
  );
};

export default Home;
