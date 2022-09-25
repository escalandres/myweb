import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import '../css/Auth.css'
import cyber from '../assets/cyber2.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from "@fortawesome/free-brands-svg-icons"
import { faDownload } from '@fortawesome/fontawesome-free-solid';
import axios from 'axios';

function mostrarContrasena(){
    var pass = document.getElementById("password");
    if(pass.type === "password"){
        pass.type = "text";
    }else{
        pass.type = "password";
    }
}
function mostrarKey(){
    var tipo = document.getElementById("key");
    if(tipo.type === "key"){
        tipo.type = "text";
    }else{
        tipo.type = "password";
    }
}

function Auth(){
    return(
        <div className="auth__container">
            <main className="form-login">
                <section className="card-template s-pxy-4 lg-x-4 lg-cols-4">
                    <a href="/">
                        <div className="main-logotype s-cross-center s-relative s-main-center l-block">
                            <img id="logo" className="mb-4" src={cyber} alt="Cyber logo"/>
                        </div>
                    </a>
                    <h1 className="t2 s-weight-extrabold s-center s-mb-4">Inicia sesión</h1>
                    <form action="/" method="post">
                        <div className="input-form s-relative s-mb-2 ">
                            <div className="s-relative s-cross-center">
                                <label for="username" className="s-mb-1 s-weight-semibold small">Username</label>
                                <input id="username" type="text" name="username" className="form-control" placeholder="Escribe tu username" required/>
                            </div>
                        </div>
                        <div className="input-form s-relative s-cross-center">
                            <label for="password" id="" className="s-mb-1 s-weight-semibold small">Contraseña</label>
                            <div className="input-group">
                                <input id="password" type="password" name="password" className="form-control" placeholder="Escribe tu contraseña" required/>
                                <button id="log_show_password" className="btn btn-primary show-btn" type="button" onClick={mostrarContrasena}><FontAwesomeIcon className="fa-solid" icon="fa-eye-slash"/></button>
                                
                            </div>
                        </div>
                        <div className="input-form s-relative s-cross-center">
                            <label for="key" id="" className="s-mb-1 s-weight-semibold small">Contraseña</label>
                            <div className="input-group">
                                <input id="key" type="password" name="key" className="form-control" placeholder="Escribe tu key" required/>
                                <button id="log_show_key" className="btn btn-primary show-btn" type="button" onClick={mostrarKey}><FontAwesomeIcon className="fa-solid" icon="fa-eye" /></button>
                            </div>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary submit-btn" type="submit">Iniciar sesión</button>
                        <p className="mt-5 mb-3 text-muted">&copy; Escalandres <span>{new Date().getFullYear()}</span></p>
                    </form>
                </section>
            </main>
        </div>
        
    );
}

export default Auth