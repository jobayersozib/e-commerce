import React from 'react'


const FormInput =(props)=>{
        return(
           <div className="input-field col s12">
                <input onChange={(e)=>props.changeHandle(e.target.value)} type={props.type} name={props.name} id={props.id} />
                <label htmlFor={props.id}>{props.label}</label>
            </div>
        )
}


export {FormInput}