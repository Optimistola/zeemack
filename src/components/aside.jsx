import {IoClose} from 'react-icons/io5'
import { useState } from 'react';
const Aside=({sideBar, action})=>{
    const [activeIndex, setActiveIndex] = useState(null);
    const [buttonLabels] = useState(['Children', 'Male', 'Female', 'Unisex', 'All']);
    const [selectedButtonLabel, setSelectedButtonLabel] = useState(null);
  
    const handleFilter = (index) => {
      setActiveIndex(index);
      setSelectedButtonLabel(buttonLabels[index]);
    };
      
    return(
    <aside className={sideBar}>
        <div className="cross" onClick={action}><IoClose size={30}/></div>
            <ul className="side-bar-list">
            {buttonLabels.map((label, index) => (
          <li
            key={index}
            onClick={() => handleFilter(index)}
            id={label}
           >
           </li>            
        ))}
            </ul>
    </aside>

    )
}
export default Aside;