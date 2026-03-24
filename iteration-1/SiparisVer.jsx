import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function SiparisVer({form, disabled}) {

    const history = useHistory();

    async function handleClick() {
        try {
          const response = await axios.post("https://reqres.in/api/pizza", form, {
            headers: {
              "Content-Type": "application/json",
              "x-api-key": "reqres-free-v1"
            },
          });
    
          console.log("Sipariş Özeti:", response.data);
          history.push("/siparis-olustur");
        } catch (err) {
          console.error("Sipariş hatası:", err);
        }
      }
    
    return(
        <div className="SiparisVer">
            <button type="button" className="SiparisVer-button" disabled={disabled} onClick={handleClick}>SİPARİŞ VER</button>
        </div>
    )
}

export default SiparisVer