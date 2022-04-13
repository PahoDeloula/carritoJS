const lyr = document.querySelector(".cont-carrito")
const botonVaciarLyrics = document.getElementById('vaciarLyrics')

function findLyrics(){
fetch("https://api.lyrics.ovh/v1/"+document.getElementById("artist").value+"/"+document.getElementById("title").value,)
    .then((resp) => resp.json())   
    .then((data) => {
        const div = document.createElement("div")
        div.innerHTML =`
        <p>${data.lyrics}</p>
        `
        // console.log(data.lyrics)
    lyr.appendChild(div)
    })
    .catch( (err) => {
        let div = document.createElement("div")
        div.innerHTML =`
        <p>¡Lo sentimos! Al parecer hay un error en tu búsqueda.</p>
        `
        console.log(err)
        return err.name === '¡Lo sentimos! Al parecer hay un error en tu búsqueda';
    })
}
