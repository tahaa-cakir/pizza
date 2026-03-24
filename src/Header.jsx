import React from "react";
import { Link } from "react-router-dom";
function Header() {

    return(
        <>     
            <div className="baslik">
                <h1 className="header">Teknolojik Yemekler</h1>      
                <nav className="link-container">
                    <Link to="/" className="link">Anasayfa </Link><span style={{ color: "white" }}>-</span>
                    <Link to="/secenekler" className="link"> Seçenekler </Link><span style={{ color: "white" }}>-</span>
                    <Link to="/siparis-olustur"className="link"> Sipariş Oluştur</Link>
                </nav>   
            </div>           
        </>
    )
}

export default Header