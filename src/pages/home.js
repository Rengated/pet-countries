import { Header } from "../components/Header/Header"
import { Search } from "../components/Search/Search"
import { Filter } from "../components/Filter/Filter"
import { Card } from "../components/Card/Card"
import styles from '../styles/home.module.css'
import { useEffect, useState } from "react"
import { getCountries } from "../http/service"


export default function Home(){
    const [countries, setCountries] = useState([])

    useEffect(() => {
        const fetch = async() => {
            let myCountries = await getCountries();
            myCountries = myCountries.splice(0, 8)
            setCountries(myCountries)
            console.log(countries)
        }
        fetch()
       
       
         
             
         
    })

    return (
        <div className={styles.main}>
            <div className= "container-xl">
                <div className={styles.search_filter}>
                    <Search/>
                    <Filter/>
                </div>
                <div className={styles.cards_block}>
                    {countries?.map(item => <Card 
                                                name={item.altSpellings[1]}
                                                capital={item.capital[0]}
                                                src={item.flags.png}
                                                region={item.region}
                                                population={item.population}>
                                             </Card>
                                    )}
                </div>
            </div>
        </div>
    )
}