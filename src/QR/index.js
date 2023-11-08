import React from "react";
import code from '../code.png';
import './Qr.css'

function Qr(){
    return(
    <body>
        <div>
            <img src={code}/>
            <p className="title">Improve your front-end
                skills by building projects
            </p>
            <p className="subtitle">Scan the QR code to visit Frontend
                Mentor and take your coding skills to
                the next level
            </p>
        </div>
    </body>
)}

export { Qr };