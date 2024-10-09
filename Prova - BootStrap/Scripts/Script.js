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
TodasPublis.push(new Publicacoes("/Prova - BootStrap/images/cortado/natureza1.png", "Nome Lugar", "Subtitulo", "Lorem", "Sergio", "/Prova - BootStrap/images/original/time/sergio.jpg"))



TodasPublis.forEach(CadaPubli => {
    document.querySelector("#Publis").innerHTML += `
        <div id="Post" style="width:23rem; padding: 20px"> 
            <div id="Imagen">
                <img src="${CadaPubli.Img}">
            </div>
            <div id="Dono">
                <div id="Sobre">
                    <h1>${CadaPubli.Titulo}</h1>
                    <h2 class="texts">${CadaPubli.Subtitulo}</h2>
                    <p class="texts">${CadaPubli.Descricao}</p>
                </div>
                <div id="Autor">
                    <img  src="${CadaPubli.ImgDono}" alt="Foto">
                    <p>Post de ${CadaPubli.Dono}</p> 
                </div>
            </div>
        </div>
    `
});

// 


