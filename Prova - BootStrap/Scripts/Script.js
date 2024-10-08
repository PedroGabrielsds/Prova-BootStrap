class Publicacoes{
    constructor(Img, Titulo, Subtitulo, Descricao, Dono, ImgDono){
        this.Img = Img;
        this.Titulo = Titulo;
        this.Subtitulo = Subtitulo;
        this.Descricao = Descricao;
        this.Dono = Dono;
        this.ImgDono = ImgDono
    }

}

var TodasPublis = []
TodasPublis.push(new Publicacoes("../images/cortado/natureza1.png", "Titulo", "Subtitulo", "Descriçao", "Post de Sergio"))

TodasPublis.forEach (CadaPubli => {
    document.querySelector("#Publis").innerHTML += `
        <div class="Postagens"> 
            <div id="Imagen">
                <img src="${this.Img}">
            </div>
            <div id="Dono" class="Elements">
                <h1>${this.Titulo}</h1>
                <h2>${this.Subtitulo}</h2>
                <p>${this.Descricao}</p>
                <div id="Autor">
                    <img src="${this.ImgDono}" alt="Foto">
                    <p>Post de ${this.Dono}</p>
                </div>
            </div>
        </div>
    `
});