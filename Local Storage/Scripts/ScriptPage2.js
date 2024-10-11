const ListarBtn = document.getElementById("Listar");
const DeletarBtn = document.getElementById("Deletar");
const ResetarBtn = document.getElementById("Resetar");


ListarBtn.addEventListener(`click`, Listar);
DeletarBtn.addEventListener(`click`, Deletar);
ResetarBtn.addEventListener(`click`, Resetar);


function Listar(){
    document.querySelector("#ListarEmail").innerHTML = `
        ${localStorage.getItem('Email')}
    `
    
}

function Deletar(){
    localStorage.removeItem('Email')
}

function Resetar(){
    localStorage.clear()
}