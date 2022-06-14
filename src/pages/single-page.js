import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getCountriByName } from "../http/service";
import styles from '../styles/single-page.module.css'



export default function SinglePage(props){
    const location = useLocation();
    const navigate = useNavigate();
    const [countryInf, setCountryInformation] = useState()
    
    const handleBackClick = () => [
        navigate('/')
    ]

    useEffect(() => {
        const fetch = async() => {
            
            const response = await getCountriByName(location.state.name)
            setCountryInformation(response[0])
           
            
        }
        fetch()
         
    }, [])

    return(
        <div className={styles.main + ` ${props.theme == 'Dark' ? 'Dark-Body': 'White-Body'}`}>
        {countryInf? <div className='container-xl'>
            <button onClick={handleBackClick} className={styles.button + ` ${props.theme == "Dark" ? 'Dark-Element' : 'White-Element'}`}>
                <i className={`fa-solid fa-arrow-left ${styles.arrow}`}></i>
                <p>Back</p>
            </button>
            <div className={styles.country}>
                <div className={styles.country_img}>
                    <img src={countryInf.flags.png} className={styles.img}/>
                </div>
         
                <div className={styles.country_inf + ` ${props.theme == "Dark" ? 'Dark-Text' : 'White-Text'}`}>
                     <h1 className={styles.country__name}>{countryInf.name.common? countryInf.name.common : countryInf.name}</h1>
                     <div className={styles.additional__data}>
                        <div className={styles.information_left}>
                            <div className={styles.additional__data_item}>
                                <p className={styles.additional__data__title}>Capital</p>
                                <p className={styles.additional__data__subtitle}>{countryInf.capital}</p>
                            </div>
                            <div className={styles.additional__data_item}>
                                <p className={styles.additional__data__title}>Borders</p>
                                <p className={styles.additional__data__subtitle}>{countryInf.borders.map(border => border +' ')}</p>
                            </div>
                            <div className={styles.additional__data_item}>
                                <p className={styles.additional__data__title}>Continents</p>
                                <p className={styles.additional__data__subtitle}>{countryInf.continents}</p>
                            </div>
                        </div>
                        <div className={styles.information_right}>
                            <div className={styles.additional__data_item}>
                                    <p className={styles.additional__data__title}>StartOfWeek</p>
                                    <p className={styles.additional__data__subtitle}>{countryInf.startOfWeek}</p>
                                </div>
                                <div className={styles.additional__data_item}>
                                    <p className={styles.additional__data__title}>Languages</p>
                                    <p className={styles.additional__data__subtitle}>{Object.keys(countryInf.languages).map(item => item + ' ')}</p>
                                </div>
                                <div className={styles.additional__data_item}>
                                    <p className={styles.additional__data__title}>Status</p>
                                    <p className={styles.additional__data__subtitle}>{countryInf.status}</p>
                                </div>
                             </div>
                     </div>
                </div>
            </div> 
        </div> : ""}
        </div>
    )

}