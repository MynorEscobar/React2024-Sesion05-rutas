import React,{useEffect, useState} from "react";

export const Almacenamiento = ()=>{
    const [nombre, setNombre] =useState("");
    const [guardado, setGuardado]=useState("");
    useEffect(()=>{
        const nombreGuardado= localStorage.getItem("nombreReact");
        if(nombreGuardado){
            setNombre(nombreGuardado);
        }
    },[]);
    const handleChange=(e)=>{
        setNombre(e.target.value);
    }
    const guardarNombre=()=>{
        localStorage.setItem("nombreReact", nombre);
        setGuardado(nombre);
        setNombre("");
    }

    return(
        <div>
            <h1>Guardar en localStorage</h1>
            <input type="text" value={nombre} onChange={handleChange} placeholder="Ingrese un nombre"></input>
            <button onClick={guardarNombre}>Nombre</button>
        </div>
    )
}