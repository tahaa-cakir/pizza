import React from "react";

function Isim({value, onChange}) {

    return(
        <div className="isim">
            <h3>Ad Soyad <span style={{color: "red"}}>*</span></h3>
            <input type="text" className="isim-alani" value={value} onChange={(e) => onChange(e.target.value)}/>
        </div>
    )
}

export default Isim