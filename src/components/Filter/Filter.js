import { useState } from "react"
import '../../styles/filter.css'


export const Filter = (props) => {
    const changeValue = (e) => {
        props.changeFilter(e.target.selectedOptions[0].text)
     
        

    }


    return(
      <>
         
        <select
        placeholder="213"
        onChange={changeValue}
   
        className="filter"
 
        
      >
         <option
        hidden
       
          >
            Filtered by RegionBlock
         </option>
        <option>
          all regions
        </option>
      
        <option>
          EU 
        </option>
        <option>
        EFTA 
        </option>
        <option>
        CARICOM 
        </option>
        <option>
        PA 
        </option>
        <option>
        AU 
        </option>
        <option>
        USAN 
        </option>
        <option>
        EEU  
        </option>
        <option>
        AL   
        </option>
        <option>
        ASEAN  
        </option>
        <option>
        SAARC   
        </option>
        <option>
        NAFTA   
        </option>
        <option>
        CEFTA   
        </option>
      </select>
      </>
    )
  
}
