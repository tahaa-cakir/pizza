import { useState } from 'react'
import { Switch, Route, Link, useHistory } from 'react-router-dom'
import Header from './Header.jsx'
import Boyut from './Boyut.jsx'
import Hamur from './Hamur.jsx'
import Ekmalzeme from './Ekmalzeme.jsx'
import Isim from "./Isim.jsx"
import SiparisNot from './SiparisNot.jsx'
import Adet from './Adet.jsx'
import SiparisToplam from './SiparisToplam.jsx'
import SiparisVer from './SiparisVer.jsx'


function App() {
  return (
    <div className='app'>
      <Switch>
        <Route path="/" exact>
          <Anasayfa />
        </Route>
        <Route path="/secenekler">
          <Secenekler />
        </Route>
        <Route path="/siparis-olustur">
          <SiparisOlustur />
        </Route>
      </Switch>
    </div>
  )
}

function Anasayfa() {

  const history = useHistory();

  return(
      <div className="anasayfa">
          <h2 className='home-baslik'>Teknolojik Yemekler</h2>
          <p className='home-yazi'>KOD ACIKTIRIR PİZZA, DOYURUR</p>
          <input type="button" className="home-button" value="ACIKTIM" onClick={() => history.push("/secenekler")}/>
      </div>
  )
}

function Secenekler() {

  const [boyut, setBoyut] = useState('');
  const [hamur, setHamur] = useState('');
  const [isim, setIsim] = useState('');
  const [ekmalzeme, setEkmalzeme] = useState([]);
  const [secimFiyat, setSecimFiyat] = useState(0);
  const [adet, setAdet] =useState(1);
  const [not,setNot] = useState('');

  const handleMalzemeChange = ({ malzemeler, ekmalzemefiyat}) => {
    setEkmalzeme(malzemeler);
    setSecimFiyat((secim) => (secim + ekmalzemefiyat));
  };

  const formValid = boyut !== "" && hamur !== "" && isim.trim() !== "" && ekmalzeme.length >= 4 && ekmalzeme.length <= 10;
  const form = {
    isim,
    boyut,
    hamur, 
    ekmalzeme,
    adet,
    not
  }

  return (
    <div>
      <Header/>
      <h3 className='kucukbaslik'>Position Absolute Acı Pizza</h3>
      <h2 className='fiyat1'>85.50₺</h2>
      <p className='paragraf'>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
       diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle çeşitli
       yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen
       pizzetta denir.</p>
       <div className='secim-container'>
        <div className='boyut-bosluk'>
          <Boyut value={boyut} onChange={setBoyut}/>
        </div>
        <div className='hamur-bosluk'>
          <Hamur value={hamur} onChange={setHamur}/>
        </div>
       </div>
       <h3 className='ekmalzeme-yazi'>Ek Malzemeler</h3>
       <p className='malzeme-yazi'>En az 4 ve en fazla 10 adet malzeme seçebilirsiniz. 5₺</p>
       <Ekmalzeme value={ekmalzeme} onChange={handleMalzemeChange}/>
       <Isim value={isim} onChange={setIsim}/>
       <SiparisNot value={not} onChange={setNot}/>
       <hr />
       <div className='siparisAlani'>
       <div>
        <Adet adet={adet} setAdet={setAdet}/>
       </div>
       <div>
        <SiparisToplam secimFiyat={secimFiyat} adet={adet}/>
       </div>
       </div>
       <SiparisVer form={form} disabled={!formValid}/>
    </div>
  )
}

function SiparisOlustur() {

  return(
      <div className='siparis-olustur'>
          <h2 className='home-baslik'>Teknolojik Yemekler</h2>
          <p className='siparis-olustur-yazi'>TEBRİKLER! SİPARİŞİNİZ ALINDI!</p>
      </div>
  )
}

export default App
