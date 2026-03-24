import React from "react";

function Ekmalzeme({value, onChange}){

    const malzemeler = ["Pepperoni", "Domates", "Biber", "Sosis", "Mısır", "Sucuk",
    "Kanada Jambonu", "Ananas", "Tavuk Izgara", "Jalepeno",
    "Kabak", "Soğan", "Sarımsak"];
    
    const handleChange = (e) => {
        const secilen = e.target.value;
        if(value.includes(secilen)) {
            onChange({
            malzemeler: value.filter((m) => m !== secilen),
            ekmalzemefiyat: -5
        });  
        }
        else{
            onChange({
            malzemeler: [...value, secilen],
            ekmalzemefiyat: +5
        });
        }
    
    }
    return(
        <div className="ekmalzeme">
            {malzemeler.map((malzeme,index) => (
                <label key={index}>
                    <input type="checkbox"
                        value={malzeme}
                        checked={value.includes(malzeme)}
                        onChange={handleChange}
                    />{malzeme}
                </label>
            ))}
        </div>
    );
}

export default Ekmalzeme