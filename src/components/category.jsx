import { AiOutlineSearch, AiOutlineFilter } from 'react-icons/ai';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
const Category = ({ action }) => {
  const filterRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [buttonLabels] = useState(['Clothes', 'Bags', 'Shoes', 'Watches', 'All']);
  const [selectedButtonLabel, setSelectedButtonLabel] = useState(null);

  const handleFilter = (index) => {
    setActiveIndex(index);
    setSelectedButtonLabel(buttonLabels[index]);
  };

  return (
    <div className="filter-container">
      <div className="filter-search">
        <div className="filter">
          <button className="filter-btn" onClick={action}>
            <span><AiOutlineFilter /></span><span className="filt">filter</span>
          </button>
        </div>
        <div className="input-div">
          <input type="text" placeholder="Search filtered..." /><button className="search-btn"><span><AiOutlineSearch /></span></button>
        </div>
      </div>
      <div className="cat-button" ref={filterRef}>
        {buttonLabels.map((label, index) => (
          <button
            key={index}
            onClick={() => handleFilter(index)}
            id={label}
            className={`cat-btn ${activeIndex === index ? 'change' : ''}`}
          ><Link className={`link ${activeIndex === index ? 'change' : ''}`} to={`/pages/categories/${label}`}>{label}</Link>
            
          </button>
        ))}
      </div>
      {selectedButtonLabel && (
        <div className="selected-button-label">
        </div>
      )}
    </div>
  );
};

export default Category;
