import React, { useState } from "react";
import "./App.css";


const BottomRow = () => {

  const [quarter, setQuarter] = useState(1);

  return (
    <section>
      <div className="bottomRow">
        <div className="down">
          <h3 className="down__title">Down</h3>
          <div className="down__value">3</div>
        </div>
        <div className="toGo">
          <h3 className="toGo__title">To Go</h3>
          <div className="toGo__value">7</div>
        </div>
        <div className="ballOn">
          <h3 className="ballOn__title">Ball on</h3>
          <div className="ballOn__value">21</div>
        </div>
        <div className="quarter">
          <h3 className="quarter__title">Quarter</h3>
          <div className="quarter__value">{quarter}</div>
        </div>  
      </div>

      <section className="quarter__buttons__container">
        <div className="quarter__text">
          <h4>Set Quarter:</h4>
        </div>
        <div className="quarter__buttons">
            <button className="quarter__buttons" onClick={ () => setQuarter( 1 ) } >1st</button>
            <button className="quarter__buttons" onClick={ () => setQuarter( 2 ) } >2nd</button>
            <button className="quarter__buttons" onClick={ () => setQuarter( 3 ) } >3rd</button>
            <button className="quarter__buttons" onClick={ () => setQuarter( 4 ) } >4th</button>
        </div>
      </section>
    </section>
    
  );
};

export default BottomRow;
