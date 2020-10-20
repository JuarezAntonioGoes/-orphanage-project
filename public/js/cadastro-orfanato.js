function mapa() {
    const map = L.map('mapid').setView([-22.2315138, -45.9386988], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


    const icon = L.icon({
        iconUrl: "/images/map-marker.svg",
        iconSize: [58, 68],
        iconAnchor: [29, 68],
        popupAnchor: [170, 2]
    })

    let localizacao;

    map.on('click', (event) => {
        const lat = event.latlng.lat;
        const lng = event.latlng.lng;

        localizacao && map.removeLayer(localizacao)

        document.querySelector('[name=lat]').value = lat;
        document.querySelector('[name=lng]').value = lng;


        localizacao = L.marker([lat, lng], { icon })
            .addTo(map)

    })
}


function fimSemana() {
    const botoes = document.querySelectorAll('.fim-semana button');

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            removerActive();
            botao.classList.add('active');
            document.querySelector('#atende-fim-semana').value = botao.value;
        })
    })

    function removerActive() {
        botoes.forEach(botao => {
            botao.classList.remove('active')
        })
    }
}

function novaFotoFunc() {
    const novaFoto = document.querySelector('.criarbotao');



    novaFoto.addEventListener('click', () => {
        const divFoto = document.querySelector('#images');



        const fotos = divFoto.querySelectorAll('.new-upload');
        const ultimaFoto = fotos[fotos.length - 1];

        const cloneFoto = ultimaFoto.cloneNode(true);


        if (cloneFoto.querySelector('input').value != '') {
            cloneFoto.querySelector('input').value = '';

            divFoto.appendChild(cloneFoto);
        }

    })
}


function excluirFoto(event) {

    const fotos = document.querySelectorAll('.new-upload');
    if (fotos.length - 1 < 1) {

        fotos[0].querySelector('input').value = '';

        return
    }
    event.parentNode.remove();
}

novaFotoFunc();






mapa();
fimSemana();