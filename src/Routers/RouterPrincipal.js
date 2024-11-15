import React from "react";
import {Routes, Route, NavLink, BrowserRouter} from 'react-router-dom';
//importar los componentes

import {Inicio} from "../Components/Inicio";


import {Contactos} from "../Components/Contactos"
import AlmacenarLista from "../Components/AlmacenarLista";

export const RouterPrincipal=()=>{
    return(
        <BrowserRouter>
            <h1>Menú Principal</h1>
            <hr/>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Lista">AlmacenarLista</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contactos">Contactos</NavLink>
                    </li>
                </ul>
            </nav>
            <hr/>
            <section>
                <Routes>
                    <Route path="/" element={<Inicio></Inicio>}></Route>
                    <Route path="/lista" element={<AlmacenarLista></AlmacenarLista>}></Route>
                    <Route path="/contactos" element={<Contactos></Contactos>}></Route>
                </Routes>
            </section>
        </BrowserRouter>
    )
}