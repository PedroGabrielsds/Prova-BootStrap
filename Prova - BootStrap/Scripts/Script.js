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
TodasPublis.push(new Publicacoes("/Prova - BootStrap/images/cortado/natureza1.png", "França", "Francês", "França fala fracês", "Sergio", "/Prova - BootStrap/images/original/time/sergio.jpg"))


TodasPublis.forEach(CadaPubli => {
    document.querySelector("#Publis").innerHTML += `
        <div id="Posts"> 
            <div id="Imagen">
                <img src="${CadaPubli.Img}" alt="Blabla">
            </div>
            <div id="Dono">
                <h1>${CadaPubli.Titulo}</h1>
                <h2>${CadaPubli.Subtitulo}</h2>
                <p>${CadaPubli.Descricao}</p>
                <div id="Autor">
                    <img src="${CadaPubli.ImgDono}" alt="Foto">
                    <p>Post de ${CadaPubli.Dono}</p>
                </div>
            </div>
        </div>
    `
});