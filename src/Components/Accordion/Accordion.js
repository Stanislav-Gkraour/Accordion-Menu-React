import React, {useRef, useState, useEffect} from "react";
import './Accordion.css'
import Chevron from '../../Assets/Icons/down-chevron.png'
import ChevronUp from '../../Assets/Icons/up-chevron.png'


export default function Accordion({title, content}) {
          

    
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
            <h2>{title}</h2>

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
              {content}
            </p>
          
          </div>
        </div>
      </>
    );
}
