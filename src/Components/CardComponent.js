import React from 'react';
const card = (Props) =>{
    return(
            <div className="grid-item">
                <h5 className="objectName">{Props.name}</h5>
                <img src={Props.objImg} alt="objectImg" className="ObjImg"></img>
                <p className="objDescription">
                <strong>Avaluo:</strong>  {Props.avaluoTxt}<br></br>
                <strong>Descripción:</strong> <br></br>  {Props.descTxt}<br></br>
                </p>
                    <button className="proposeButton">Proponer</button>
            </div>
    )
};
export default card;