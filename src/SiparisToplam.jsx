import React, { useState } from "react";

function SiparisToplam({secimFiyat = 0, adet = 1}) {

    const fiyat = 85.5 + secimFiyat;
    const toplam = fiyat * adet;
    return(
        <div className="siparisToplamAlani">
            <h3 className="siparis-yazi">Sipariş Toplamı</h3>
            <div className="siparisSecimler-alan">
                <p className="siparisSecimler-yazi">Seçimler</p>
                <p className="siparisSecimler-fiyat">{(secimFiyat).toFixed(2)}₺</p>
            </div>
            <div className="siparisToplam-alan">
                <p className="siparisToplam-yazi">Toplam</p>
                <p className="siparisToplam-fiyat">{toplam.toFixed(2)}₺</p>
            </div>
        </div>
    )
}

export default SiparisToplam