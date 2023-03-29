
import React from 'react' 

import login from './Login.module.css'

export default function Login(){
  return(
    <div className={login.main}>
      <div className={login.box}>
        <div className={login.input}>
          <input placeholder='Enter email' className={login.in} type="text"/>
          <br />
          <input placeholder='Enter Password' className={login.in} type="password"/>
        </div>
        <div className={login.btn}>
          
          <button className={login.loginbtn}>Login</button>
        </div>
      </div>
    </div>
  )
}