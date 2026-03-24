import React from "react";

function Adet({adet, setAdet}) {

    const handleClick = (e) => {
        if(e.target.value === "eksilt") {
            if(adet > 1) {
            setAdet(adet - 1);
            }
        }
        else if(e.target.value === "arttir") {
            setAdet(adet + 1);
        }
    }


    return(
        <div className="adet">
            <button type="button" className="adet-eksi" value="eksilt" onClick={handleClick}>-</button>
            <input type="text" className="adet-sayi" value={adet} readOnly/>
            <button type="button" className="adet-arti" value="arttir" onClick={handleClick}>+</button>
        </div>
    )
}

export default Adet