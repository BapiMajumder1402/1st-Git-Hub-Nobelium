import React from 'react' 
import r from './Register.module.css'

export default function Register(){
  return(
    <div className={r.main}>
        <div className={r.box}>
        <div>
          <input className={r.in} placeholder='Enter Name' type="text"/>
          <input className={r.in} placeholder='Enter Password' type="password"/>
          <input className={r.in} placeholder='Enter Email' type="email"/>
        </div>
        <div>
          
          <button className={r.btn}>Sign Up</button>
        </div>
        </div>
    </div>
  )
}