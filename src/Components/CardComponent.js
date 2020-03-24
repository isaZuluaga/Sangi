import React from 'react';
import objectImg from '../img/halcon.png';
const card = (Props) =>{
    return(
            <div className="grid-item">
                <h5 className="objectName">{Props.name}</h5>
                <img src={objectImg} alt="objectImg" className="ObjImg"></img>
                <p className="objDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque alias iusto et dicta, recusandae, quam asperiores id
                    nesciunt dolorum quos totam reprehenderit natus ipsam ad eum officiis tempora soluta perspiciatis.</p>
                    <button className="proposeButton">Proponer</button>
            </div>
    )
};
export default card;