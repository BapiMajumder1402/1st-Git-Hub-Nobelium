import React from "react";
import h from './Home.module.css'

// import Login from './Login'
// import { Link } from 'react-router-dom'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Home() {
    return (
        <div className={h.bg}>
            
            <div className={h.main}>
                <div className={h.img}> <img src="https://tse3.mm.bing.net/th?id=OIP.51JUhK_39dVGFXUCAouzmwHaK7&pid=Api&P=0" alt="img" /> </div>
                <div className={h.text}>
                    <h1>Hi , Wanna Make Your Career?</h1>
                    <h3>Join us Free Web development Bootcamp</h3>
                    
                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique sit, vitae perferendis quia consectetur doloribus ipsa nihil quas reiciendis reprehenderit!</p> 
                   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quaerat expedita deserunt laborum voluptates voluptate nam voluptatum corporis dolorem illo exercitationem nihil iste, magnam assumenda veritatis ipsa impedit placeat, repellendus vitae temporibus ea culpa modi.</p>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam repellat ducimus qui nobis assumenda, modi perspiciatis magnam quaerat quae. Doloremque cupiditate magni qui temporibus sint inventore suscipit aliquid aperiam maxime, incidunt voluptatibus recusandae unde, eligendi harum deleniti. Veritatis nulla illum, voluptatum at consequatur veniam exercitationem placeat ullam! Vel, optio.</p>
                </div>
            </div>

        </div>
    );
}