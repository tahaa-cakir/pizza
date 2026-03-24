import React from "react";

function Boyut({value, onChange}) {
  
    return(
        <>     
          <h3 className="boyutSec">Boyut Seç<span style={{ color: "red" }}> *</span></h3>
          <label className="pizzaBuyuklugu">
            <input
                type="radio"
                name="boyut"
                value="küçük"
                checked={value === "küçük"}
                onChange={(e) => onChange(e.target.value)}
            />
            Küçük
          </label>
          <label className="pizzaBuyuklugu">
            <input
                type="radio"
                name="boyut"
                value="orta"
                checked={value === "orta"}
                onChange={(e) => onChange(e.target.value)}
            />
            Orta
          </label>
          <label className="pizzaBuyuklugu">
            <input
                type="radio"
                name="boyut"
                value="büyük"
                checked={value === "büyük"}
                onChange={(e) => onChange(e.target.value)}
            />
            Büyük
          </label>
        </>
    )
}

export default Boyut