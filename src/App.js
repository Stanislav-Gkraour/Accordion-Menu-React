import React from "react";
import Accordion from './Components/Accordion/Accordion';
import './App.css';
import {v4 as uuidv4} from 'uuid'

function App() {
  const accordionData = [
    {
      title: "Section 1",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
                laborum cupiditate possimus labore, hic temporibus velit dicta earum
                suscipit commodi eum enim atque at? Et perspiciatis dolore iure
                voluptatem.`,
      id: uuidv4()
    },
    {
      title: "Section 2",
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
                reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
                quaerat iure quos dolorum accusantium ducimus in illum vero commodi
                pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
                quidem maiores doloremque est numquam praesentium eos voluptatem amet!
                Repudiandae, mollitia id reprehenderit a ab odit!`,
      id: uuidv4()
    },
    {
      title: `Section 3`,
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
                quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
                dolor ut sequi minus iste? Quas?`,
      id: uuidv4()
    },
  ];
  console.log(accordionData[0], accordionData[1],accordionData[2]);
  const { title, content, id } = accordionData;
  return (
    <>
      <h1>React Accordion Demo</h1>
      {accordionData.map(({ title, content,id  }) => (
        <Accordion title={title} content={content} key={id} />
      ))}
    </>
  );
}

export default App;
