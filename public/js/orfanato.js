const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const lat = document.querySelector('.lat').innerText;
const lng = document.querySelector('.lng').innerText;


const map = L.map('mapid', options).setView([lat, lng], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})



L.marker([lat, lng], { icon })
    .addTo(map)


function exibirImagem() {
    const imagemPrincipal = document.querySelector('.primeira-imagem');

    const imagens = document.querySelectorAll('.imagens img');


    imagens.forEach(imagem => {
        imagem.addEventListener('click', () => {
            removerActive();

            imagem.classList.add('active');

            imagemPrincipal.src = imagem.src;
        })
    })

    function removerActive() {
        imagens.forEach(imagem => {
            imagem.classList.remove('active');
        })
    }


    //console.log(imagens)

}

exibirImagem();