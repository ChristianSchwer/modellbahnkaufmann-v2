import { React, useEffect, useState } from 'react';
// import Instagramm from '../cards/Instagramm';
import './Home.css';
import Train from '../images/train.jpg';

function Home() {
    // const [openTime, setOpenTime] = useState({})

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    // useEffect(() => {
    //     fetch('Oeffnungszeiten.json')
    //     .then((r) => r.json())
    //     .then((data) => {
    //         //set Öffnungszeiten
    //         setOpenTime(data);
    //     })
    // }, [Object.keys(openTime).length]);

    // if (Object.keys(openTime).length === 0) {
    //     return (
    //         <h1>Loading...</h1>
    //     )
    // } else {
        return (
            <div>
                <div className="Landingpage">
                    <h1>Herzlich Willkommen!</h1>
                    <h2>Wir sind das Fachgeschäft für Modellbau und Modelleisenbahn in Vorarlberg.</h2>
                    <p className='LandingpageText'>Bei Fragen oder auch Problemen rund um euer geliebtes Hobby stehen wir euch gerne zur Verfügung.</p>
                    <p className='LandingpageText'>Nicht nur die Neuheiten können Sie bei uns entdecken, </p>
                    <p className='LandingpageText'>sondern auch bei älteren Modellen, schauen wir gerne in unserer Hauseigenen Werkstatt was fehlt.</p><br></br>
                    {/* <h3 style={{'lineHeight': '0.8', 'paddingLeft': '0%'}}>Öffnungszeiten:</h3>
                    <p style={{'lineHeight': '0.3', 'paddingLeft': '0%'}}>{openTime['Oeffnungszeiten']['Zeile1']}</p>
                    <p style={{'lineHeight': '0.3', 'paddingLeft': '0%'}}>{openTime['Oeffnungszeiten']['Zeile2']}</p>
                    <p style={{'lineHeight': '0.3', 'paddingLeft': '0%'}}>{openTime['Oeffnungszeiten']['Zeile3']}</p> */}
                </div>
                <div className="Post">
                    <div className='PostDateWrapper'>
                        <p className='PostDate'>02.06.2023</p>
                    </div>
                    <div className='PostWrapper'>
                        <div className='PostTextWrapper'>
                            <h1>Infotage von Märklin!</h1>
                            <h2>Bei uns sind Digitale Infotage von Märklin.</h2>
                            <p className='PostText'>Mit Profis, die euch gerne den ganzen Tag all eure Fragen beantworten und euch die Neuheiten vorstellen.</p>
                            <p className='PostText'>Wann: 19.06.2023</p>
                            <p className='PostText'>Wir freuen uns auf euren Besuch!</p>
                            <p className='PostText'>Fam. Bereuter</p>
                        </div>
                        <div className='PostImageWrapper'>
                            <img src={Train} className='PostImage' alt='train'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    // }
}

export default Home
