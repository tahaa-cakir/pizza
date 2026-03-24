import React from "react";

function SiparisNot({value, onChange}) {
    
    return(
        <div className="siparis">
            <h3>Sipariş Notu</h3>
            <input type="text" className="siparisNot-alani" value={value} onChange={(e) => onChange(e.target.value)} placeholder="Siparişine eklemek istediğin bir not var mı?"/>
        </div>
    )
}

export default SiparisNot