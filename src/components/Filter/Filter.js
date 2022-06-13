import { useState } from "react"
import '../../styles/filter.css'


export const Filter = () => {
    const [currentValue, setValue] = useState('Filtered by Region')

    const changeValue = (e) => {
        setValue(e.currentTarget.textContent)
    }


    return(
        <select
        placeholder="213"
        onChange={changeValue}
   
        className="filter"
 
        
      >
        <option
        disabled
        selected
          >
            Filtered by Region
         </option>
        <option>
          Aftica
        </option>
        <option>
          America
        </option>
        <option>
          Asia
        </option>
        <option>
          Europe
        </option>
        <option>
          Ocenia
        </option>
    
      </select>
    )
  
}
