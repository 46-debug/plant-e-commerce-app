import React, { useState, useEffect } from 'react';
import img1 from "./image/plant1.png";
import img2 from "./image/plant2.png";
import layer from "./image/layer.png";
import plantsC from "./image/plants circle.png";

const Main = () => {

  return (
    <div className='main_div'>
      <img id='layer' src={layer} width="400px"/>
      <img id='layer2' src={plantsC} alt="design" />
      <div className='main_div1'>

        <div className='div_c'>
          <h1>Clean Air in your Home</h1>
          <p>Discover a curated collection of Plants and Planters, transforming your <br />space into a haven of nature's beauty.Embrace clean air,
            serene aesthetics, <br /> and the joy of cultivating your green sanctuary with EcoBloom.
          </p>
          <button id='buy_btn'>BUY NOW</button>
        </div>
        <div className='div_i'>
          <img src={img1} alt="Plant" />
        </div>
      </div>

      <div className='main_div2'>
        <div className='div_c'>
          <h1 id='h1'>If you have a garden and a library, you have <br/>every thing you need.</h1>
          <p id='p1'>Nature whispers serenity to your solu through lush greenery,
            while <br/> the pages of good book unfold the vsat landscapes of your mind. In the <br/> simple harmony, find a haven where the
            leaves rustle stories, and the mind <br/>blooms with the quiet wisdom of each moment.
          </p>
        </div>
        <div className='div_i'>
          <img src={img2} />
        </div>
      </div>

    </div>
  );
}

export default Main;
