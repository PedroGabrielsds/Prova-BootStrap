const CadastrarBtn = document.getElementById("Cadastrar");

CadastrarBtn.addEventListener(`click`, Cadastrar);


function Cadastrar(){
    let Email = document.getElementById("Email").value;
    let Senha = document.getElementById("Senha").value;

    localStorage.setItem('Email', Email)
    localStorage.setItem('Senha', Senha)

}

