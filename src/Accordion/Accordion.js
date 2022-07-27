import React, {useRef, useState, useEffect} from "react";
import './Accordion.css'
import Chevron from '../Assets/Icons/down-chevron.png'
import ChevronUp from '../Assets/Icons/up-chevron.png'

export default function Accordion() {

    const [isActive, setIsActive] = useState(false);
    const [heightEl, setHeightEl] = useState();

    const toggleIsActive = () => {
        setIsActive(!isActive);
    }
    
    const refHeight = useRef();

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`);
    }, [])
    

    return (
      <>
        <div className="accordion">
          <div className="accordion-visible" onClick={toggleIsActive}>
            <h2>My accordion title</h2>

            <img
              className="chevron-down"
              style={isActive ? { display: "flex" } : { display: "none" }}
              src={Chevron}
              alt="chevron down"
            />

            <img
              className="chevron-up"
              src={ChevronUp}
              style={isActive ? { display: "none" } : { display: "flex" }}
              alt="chevron up"
            />
          </div>

          <div ref={refHeight} className={isActive ? 'toggle-isActive animated' : "toggle-isActive"} style={{height : isActive ? `${heightEl}` : '0px'}}>
            <p aria-hidden={isActive ? "true" : "false"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              alias illum, quam soluta dolorum harum iste neque nulla nemo
              earum, sit fugiat eius, iure laborum expedita. Nemo, tenetur porro
              ab praesentium possimus soluta nulla dolorum placeat atque saepe
              consequatur fugiat animi natus non libero sed quibusdam, fuga
              quaerat assumenda exercitationem?
            </p>
          </div>
        </div>
      </>
    );
}
