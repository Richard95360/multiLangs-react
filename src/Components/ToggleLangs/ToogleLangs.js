import React,{useContext} from 'react';
import FrenchFlag from '../../assets/france.svg';
import SpanishFlag from '../../assets/spain.svg';
import EnglishFlag from '../../assets/united-kingdom.svg';
import { Context } from '../../context/LangContext';

import './ToggleLangs.css';

const ToogleLangs = () => {

    const {toggleLang} = useContext(Context)
 
    return (
        <div className="container-langs">
            <img onClick={()=> toggleLang('FR')} src={FrenchFlag} alt="france" />
            <img onClick={()=> toggleLang('ES')} src={SpanishFlag} alt="spain" />
            <img onClick={()=> toggleLang('EN')} src={EnglishFlag} alt="england" />
            
        </div>
    );
};

export default ToogleLangs;