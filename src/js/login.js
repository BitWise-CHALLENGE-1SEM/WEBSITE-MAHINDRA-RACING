// VALIDAÇÃO LOGIN
function logar(){
    var login = document.querySelector("#login").value;
    var senha = document.querySelector("#senha").value;
    if(login == "admin" && senha == "admin"){
        alert("Login Efetuado com Sucesso! Volte à Página Principal")
        location.href = "index.html"
    }
    else{
        alert("Login ou Senha Incorretos.")
    }
}