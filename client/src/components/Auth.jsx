import React, { useState } from 'react';
import '../css/Auth.css'
import cyber from '../assets/cyber.png'

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

const Auth = () => {
    <main className="form-login">
        <section className="card-template s-pxy-4 lg-x-4 lg-cols-4">
            <a href="/">
                <div className="main-logotype s-cross-center s-relative s-main-center l-block">
                    <img id="logo" className="mb-4" src={cyber} alt="Cyber logo"/>
                </div>
            </a>
            <h1 className="t2 s-weight-extrabold s-center s-mb-4">Inicia sesión</h1>
            <form action="/login" method="post">
                <div className="input-form s-relative s-mb-2 ">
                    <div className="s-relative s-cross-center">
                        <label className="s-mb-1 s-weight-semibold small">Username</label>
                        <input id="log_username" type="text" name="username" className="form-control" placeholder="Escribe tu username" required/>
                    </div>
                </div>
                <div className="s-relative s-cross-center">
                    <label id="login-lpassword" className="s-mb-1 s-weight-semibold small">Contraseña</label>
                    <div className="input-group">
                        <input id="password" type="password" name="password" className="form-control" placeholder="Escribe tu contraseña" required/>
                        <button id="log_show_password" className="btn btn-primary" type="button" onClick={mostrarContrasena}><span className="fa fa-eye-slash icon"></span></button>
                        
                    </div>
                </div>
                <div className="s-relative s-cross-center">
                    <label id="login-key" className="s-mb-1 s-weight-semibold small">Contraseña</label>
                    <div className="input-group">
                        <input id="pkey" type="password" name="key" className="form-control" placeholder="Escribe tu key" required/>
                        <button id="log_show_key" className="btn btn-primary" type="button" onClick={mostrarKey}><span className="fa fa-eye-slash icon"></span></button>
                    </div>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Iniciar sesión</button>
                <p className="mt-5 mb-3 text-muted">&copy; Escalandres</p>
            </form>
        </section>
    </main>
    
}

export default Auth;