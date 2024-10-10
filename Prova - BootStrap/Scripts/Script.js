class Pacote {
    constructor(Image, Titulo, Subtitulo, Descricao, ImgDono, NomePost){
        this.Image = Image;
        this.Titulo = Titulo;
        this.Subtitulo = Subtitulo;
        this.Descricao = Descricao;
        this.ImgDono = ImgDono;
        this.NomePost = NomePost;
    }
}           

var TodosPacotes = []
TodosPacotes.push(new Pacote ("/Prova - BootStrap/images/Dow/natureza.jpg","japão", "Japonês fala japonês no Japão", "Japao fica na Asia", "/Prova - BootStrap/images/original/time/alice.jpg", "Alice"))

TodosPacotes.push(new Pacote ("/Prova - BootStrap/images/Dow/natureza.jpg","japão", "Japonês fala japonês no Japão", "Japao fica na Asia", "/Prova - BootStrap/images/original/time/alice.jpg", "Alice"))

TodosPacotes.push(new Pacote ("/Prova - BootStrap/images/Dow/natureza.jpg","japão", "Japonês fala japonês no Japão", "Japao fica na Asia", "/Prova - BootStrap/images/original/time/alice.jpg", "Alice"))

TodosPacotes.push(new Pacote ("/Prova - BootStrap/images/Dow/natureza.jpg","japão", "Japonês fala japonês no Japão", "Japao fica na Asia", "/Prova - BootStrap/images/original/time/alice.jpg", "Alice"))
                
TodosPacotes.forEach(CadaPacote => {
    document.querySelector("#Geral1").innerHTML += `
    <a href="/Prova - BootStrap/Pages/Postagem/index.html">
        <div id="Geral2">
            <div id="Image">
                <img src="${CadaPacote.Image}" alt="Image">
            </div>
            <div id="Infos">
                <div id="Textos">
                    <h1>${CadaPacote.Titulo}</h1>
                    <h2>${CadaPacote.Subtitulo}</h2>
                    <p>${CadaPacote.Descricao}</p>
                </div>
                <div id="Dono">
                    <img src="${CadaPacote.ImgDono}" alt="Dono">
                    <p>Post por ${CadaPacote.NomePost}</p>
                </div>
            </div>
        </div>
    </a>
    `
});    

