import '../../styles/search.css'

export const Search = () => {
    
    return(
        <div className="search">
             <i className={`search__icon fa-solid fa-magnifying-glass `}></i>
             <input className="search__input" placeholder="Search for a country ..."></input>
        </div>
    )
}