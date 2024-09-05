import { Slider } from '@nextui-org/react'
import React, { useState } from 'react'

function PriceFilter({onPriceChange}) {

    const [priceRange, setPriceRange] = useState([0,1000])
    const handlePriceChange =(value)=>{
        console.log("slidervalue",value);
        
setPriceRange(value)
onPriceChange(value)
    }
    const priceText = `${priceRange[0]} - ${priceRange[1]}`;
console.log(priceText)
    return (
        <div className="my-4">
          <h3 className="text-center text-2xl font-serif">Filter by Price: ${priceRange[0]} - ${priceRange[1]}</h3>

          
          <Slider
            step={10}
            
            min={0}
            max={10000} 
            value={priceRange}
            onChange={handlePriceChange}
            color="warning"
            aria-labelledby="price-filter-label" 
          />
        </div>
      );
      
}

export default PriceFilter