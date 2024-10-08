class Publicacoes{
    constructor(Img, Titulo, Subtitulo, Descricao, Dono){
        this.Img = Img;
        this.Titulo = Titulo;
        this.Subtitulo = Subtitulo;
        this.Descricao = Descricao;
        this.Dono = Dono;
    }

}

var TodasPublis = []
TodasPublis.push(new Publicacoes("../images/cortado/natureza1.png", "Titulo", "Subtitulo", "Descriçao", "Post de Sergio"))

TodasPublis.forEach (CadaPubli => {
    document.querySelector("#Publis").innerHTML += `
        <div class="Postagens"> 
            
        </div>
    
    `
});