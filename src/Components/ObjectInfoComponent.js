import React from 'react';
import SangiLogo from '../img/sangiLogo.png';
import '../ObjectInfo.css';
import history from '../history';

const mainContent = (Props) =>{
    return(
        <div className="objectInfoContainer">
        <img src={SangiLogo} alt="sangiLogo"></img>

        <div className="objectInfoBox">
            <span className="objectNameInfo">{Props.name}</span><br/>
            <img className= "objInfoImage" src={Props.objUrl} alt="objectImg" id="infoObjectImg"></img>
            <p className="objectDescriptionText">

                <span className="objectDesription">Descripción:</span><br/>
                {Props.objDescription}
            </p>
            <input type="porposeInput" id="porposeInputText" name="find"></input>

            <button className="objectInfoButton">Solicitar Intercambio</button>
            <button className="objectInfoButton" onClick={() => history.push('/profile')}>Mas del usuario</button>
        </div>

    </div>
    )
};
export default mainContent;
