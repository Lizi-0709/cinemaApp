import React from 'react'
import './profile.scss'


function Profile() {
  return (
    <div>
        <div className='container1'>
          <div className="parent">
          <div className='header'>
          <div className='profilDuzenle'> <h1>Profile Düzenle</h1></div>
          </div>
          <div className='input1'>
            <input className='Name1' type="text" placeholder='Adi' />
          </div>
          <div className="text2">
            <h4>Oyun için kullanini adi: </h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='input2'>
            <input className='Name2' type="text" placeholder='Kullanici Adi oluştur' />
          </div>
          <br />
          <div className="text2">
            <h4>Yetişinlik Ayarlar:</h4>
          </div>
          <div className="button1">
            <button className='duzelyer'>Tüm Yetişkinlik Düzeyleri</button>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div className="button2">
            <button className='duzenle'>Düzenle</button>
          </div>
          <div className="text3">
            <h4>Otomatik Oynatma Kontrolleri</h4>
          </div>
          <div className="Checkbox">
          <input type="checkbox" id='myCheckbox'/>
          <label htmlFor="myCheckbox" className='CheckBox'>Lorem ipsum dolor sit amet.</label>
          </div>
          <div className="checkbox1">
          <input type="checkbox" id='myCheckbox1'/>
          <label htmlFor="myCheckbox1" className='Checkbox1'>Lorem ipsum dolor sit amet.</label>
          </div>
          <div className="button2">
            <button className='Kaydet'>kaydet</button>
            <button className='iptal'>iptal</button>
          </div>
          </div>
        </div>
    </div>
    
  )
}

export default Profile