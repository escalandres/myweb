

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
    <main class="form-login">
        <section class="card-template s-pxy-4 lg-x-4 lg-cols-4">
            <a href="/">
                <div class="main-logotype s-cross-center s-relative s-main-center l-block">
                    <img id="logo" class="mb-4" src="img/Coffee Pet-LOGO1.svg" alt=""/>
                </div>
            </a>
            <h1 class="t2 s-weight-extrabold s-center s-mb-4">Inicia sesión</h1>
            <form action="/login" method="post">
                <div class="input-form s-relative s-mb-2 ">
                    <div class="s-relative s-cross-center">
                        <label class="s-mb-1 s-weight-semibold small">Username</label>
                        <input id="log_username" type="text" name="username" class="form-control" placeholder="Escribe tu username" required/>
                    </div>
                </div>
                <div class="s-relative s-cross-center">
                    <label id="login-lpassword" class="s-mb-1 s-weight-semibold small">Contraseña</label>
                    <div class="input-group">
                        <input id="password" type="password" name="password" class="form-control" placeholder="Escribe tu contraseña" required/>
                        <button id="log_show_password" class="btn btn-primary" type="button" onclick="mostrarContrasena()"><span class="fa fa-eye-slash icon"></span></button>
                        
                    </div>
                </div>
                <div class="s-relative s-cross-center">
                    <label id="login-key" class="s-mb-1 s-weight-semibold small">Contraseña</label>
                    <div class="input-group">
                        <input id="pkey" type="password" name="key" class="form-control" placeholder="Escribe tu key" required/>
                        <button id="log_show_key" class="btn btn-primary" type="button" onclick="mostrarKey()"><span class="fa fa-eye-slash icon"></span></button>
                    </div>
                </div>
                <button class="w-100 btn btn-lg btn-primary" type="submit">Iniciar sesión</button>
                <p class="mt-5 mb-3 text-muted">&copy; Escalandres</p>
            </form>
        </section>
    </main>
    
}