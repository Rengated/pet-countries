import '../../styles/search.css'

export const Search = (props) => {
    
    return(
        <div className="search">
             <i className={`search__icon fa-solid fa-magnifying-glass `}></i>
             <input onChange={props.changeSearch} className="search__input" placeholder="Search for a country ..."></input>
        </div>
    )
}