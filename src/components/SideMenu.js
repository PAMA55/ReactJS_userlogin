//import react from "react";
import { Link } from 'react-router-dom';
import '../styles/styles-sidemenu.css';

export default function SideMenu() {
    return(
        <div id="sidepanel">  
            <img id="sidepanel-logo" alt="Logo" />

            <span  style={{textAlign: 'center', color: 'white', fontSize: '12px', paddingBottom:'.4rem', paddingTop:'.4rem', borderBottom:'2px solid white' }}>
                <b>Bienvenido:</b>
                <br/>

                <span style={{cursor: 'pointer'}}>Cambiar contraseña</span>
            </span>
                
            <Link to="/documents">
                <div className="sidebtn">
                    <img id="sideimg3" alt="" />
                    <span>Añadir documento</span>
                </div> 
            </Link>

            <Link to="/imagen">
                <div className="sidebtn">
                    <img id="sideimg2" alt="" />
                    <span>Ver documentos</span>
                </div>
            </Link>
            
            <div className="sidebtn">
                <img id="sideimg4" alt="" />
                <span>Ordenes de compra</span>
            </div> 
                
            <div className="sidebtn">
                <img id="sideimg1" src="/SistemaGas/resources/request_page_white_24dp.svg" alt="" />
                <span>Usuarios</span>
            </div> 
            
            <div className="sidebtn">
                <img id="sideimg5" alt="" />
                <span>Cerrar sesión</span>
            </div> 
            
        </div>
    )
}