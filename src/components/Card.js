import React from "react";


const Card =(props)=>{
    
    return(
        <>
        <img className ="img"src="https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Amit" />
        <h5>{props.designation}</h5>
        <h2>{props.name}</h2>
        <p >{props.description}</p>

        
        </>
    )

}
export default Card