import React from 'react';
import objectImg from '../img/halcon.png';
import SangiLogo from '../img/sangiLogo.png';

const mainContent = (Props) =>{
    return(
        <div class="objectInfoContainer">
        <img src={SangiLogo} alt="sangiLogo"></img>

        <div class="objectInfoBox">
            <span class="objectNam">Objeto1</span><br/>
            <img src={objectImg} alt="objectImg" id="infoObjectImg"></img>
            <p class="objectDescriptionText">

                <span class="objectDesription">Description:</span><br/>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Id earum consequuntur odio at a obcaecati incidunt culpa nihil dolor nisi harum, mollitia ducimus magni,
                voluptatem, voluptatum quidem velit quae numquam!
            </p>
            <input type="porposeInput" id="porposeInputText" name="find"></input>

            <button class="objectInfoButton">Solicitar Intercambio</button>
            <button class="objectInfoButton">Mas del usuario</button>
        </div>

    </div>
    )
};
export default mainContent;
