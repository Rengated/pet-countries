import { Header } from "../components/Header/Header"
import { Search } from "../components/Search/Search"
import { Filter } from "../components/Filter/Filter"
import {Loader} from '../components/Loader/Loader'
import { Card } from "../components/Card/Card"
import styles from '../styles/home.module.css'
import { useEffect, useState } from "react"
import { getCountries, getFilteredCountriesByRegionBlock } from "../http/service"
 


export default function Home(props){
    const [loading, setLoading] = useState(true)
    const [countries, setCountries] = useState();
    const [filter, setFilter] = useState('');
    const [searchFilter, setSearchFilter] = useState('');
    const [filteredCountries, setFilteredCountries] = useState([]);


    const changeFilter = (value) => {
        setFilter(value);
    }

    
    const changeSearch = (e) => {
        setSearchFilter(e.target.value);
       
    }
 

    useEffect(() => {
        const fetch = async() => {
            setLoading(true)
            let myCountries = await getFilteredCountriesByRegionBlock(filter);
            setCountries(myCountries);
            setFilteredCountries(myCountries);
            setLoading(false)
            
        }
        if (filter){
            if (filter == 'all regions'){
                const fetchAll= async() => {
                    setLoading(true)
                    let myCountries = await getCountries();
                    setCountries(myCountries);
                    setFilteredCountries(myCountries);
                    setLoading(false)
                    
                }
                fetchAll()
            }
            else{
                fetch();
            }
        }
        
         

    }, [filter])



    useEffect(() => {
        const fetch = async() => {
            setLoading(true)
            let myCountries = await getCountries();
            setCountries(myCountries);
            setFilteredCountries(myCountries);
            setLoading(false)
  
        }
        fetch();
       
      
    }, [])

    useEffect(() => {
         setFilteredCountries(countries?.filter(item =>  item?.name?.common?.toLowerCase().includes(searchFilter?.toLowerCase())));
         if (!searchFilter){
            setFilteredCountries(countries);
         }
    }, [searchFilter]);

    return (
        <div className={styles.main + ` ${props.theme == 'White' ? 'White-Body' : 'Dark-Body'}`}>
            <div className= "container-xl">
                <div className={styles.search_filter}>
                    <Search changeSearch={changeSearch}/>
                    <Filter changeFilter={changeFilter}/>
              </div>
               {!loading ?  <div className={styles.cards_block}>
                    {filteredCountries?.map((item, index) => <Card 
                                                key={index}
                                                name={item.name.common? item.name.common : item.name}
                                                capital={item.capital?  item.capital  : ''}
                                                src={item.flags.png}
                                                region={item.region}
                                                population={item.population}>
                                             </Card>
                     )}
                </div> : <Loader/>}
            </div>
        </div>
    )
}