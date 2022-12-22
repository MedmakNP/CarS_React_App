import { useState } from "react";
import "./Catalog";
import TataNexon from "../Images/Tata-Nexon.jpg"
import Porsche from "../Images/Porsche.png"
import range_rover_sport from "../Images/range-rover-sport.jpg"
import Mercedes_Benz from "../Images/Mercedes-Benz.jpg"
import THAR from "../Images/THAR.png"

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="container-tabs">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          <p className={toggleState === 1 ? "title-tabs active-tabs-title" : "title-tabs"}>Porsche</p>
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          <p className={toggleState === 2 ? "title-tabs active-tabs-title" : "title-tabs"}>Tata Nexon</p>
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          <p className={toggleState === 3 ? "title-tabs active-tabs-title" : "title-tabs"}>Mercedes-Benz</p>
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          <p className={toggleState === 4 ? "title-tabs active-tabs-title" : "title-tabs"}>Range Rover Sport</p>
        </button>
        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          <p className={toggleState === 5 ? "title-tabs active-tabs-title" : "title-tabs"}>Thar</p>
        </button>
      </div>

      <div className="content-tabs">
        <div className={toggleState === 1 ? "content  active-content" : "content"}>
          <img src={Porsche} className='img-content' alt='Porsche' />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}>
            <img src={TataNexon} className='img-content' alt='TataNexon' />
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}>
            <img src={Mercedes_Benz} className='img-content' alt='Mercedes_Benz' />
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}>
            <img src={range_rover_sport} className='img-content' alt='range_rover_sport' />        
        </div>
        <div
          className={toggleState === 5 ? "content  active-content" : "content"}>
            <img src={THAR} className='img-content' alt='THAR' />
        </div>
      </div>
    </div>
  );
}

export default Tabs;