import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './Value.css'
import data from '../../src/utils/accordion'

const Value = () => {
  return (
 <section className="v-wrapper" 
 id="about"
 >
  <div className="innerWidth paddings flexCenter v-container">
    <div className="flexColCenter v-right">
      <span className='primaryText'>Value We Give</span>
      <span className='secondaryText'>We Are always happy to help by providing the best resource for you when is it comes to forex        
        we believe information is always the key
      </span>
      <Accordion
      className='Accordion'
      allowMultipleExpanded = {false}
      preExpanded={[0]}
      >
    {data.map((item, i) =>{
  return(
<AccordionItem className='accordionItem'key={i} uuid={i}>
<AccordionItemHeading>
  <AccordionItemButton className='flexStart accordionButton'>
    <div className="flexCenter icon">{item.icon}</div>
    <span className="primary">
      {item.heading}
    </span>
    <div className="flexCenter icon">
      <MdOutlineArrowDropDown size={20}/>
    </div>
  </AccordionItemButton>
</AccordionItemHeading>
<AccordionItemPanel className='detail'>
  <p className="secondaryText">
    {item.detail}
  </p>
</AccordionItemPanel>
</AccordionItem>
  );
  })}
      </Accordion>
    </div>
  </div>
 </section>
  );
};
export default Value
