function checkLogin(){

    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value

    if(usuario == "Matheus" && senha == "123"){
        window.open("clienteHome.html")    
    }

    if(usuario == "José" && senha == "123"){        
        window.open("atendenteHome.html")
    }

}