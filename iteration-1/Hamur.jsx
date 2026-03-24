import React from "react";
function Hamur({value, onChange}) {
    
    return(
        <>
            <h3 className="hamurSec">Hamur Seç<span style={{ color: "red" }}> *</span></h3>
            <select name="hamur" value={value} onChange={(e) => onChange(e.target.value)}>
                <option value="" disabled>Hamur Kalınlığı</option>    
                <option value="ince">İnce</option>
                <option value="kalin">Kalın</option>
            </select>
        </>
    )
}

export default Hamur