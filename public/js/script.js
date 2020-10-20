const map = L.map('mapid').setView([-22.2315138, -45.9386988], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);




const icon = L.icon({
    iconUrl: "images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

const dados = document.querySelectorAll('.dados');

dados.forEach(dado => {
    const resultado = {
        id: dado.dataset.id,
        name: dado.dataset.name,
        lat: dado.dataset.lat,
        lng: dado.dataset.lng
    }

    local(resultado);
})

function local({ id, name, lat, lng }) {
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="../../orfanato?id=${id}" class="choose-orpanage" ><img src="/images/arrow-white.svg" ></a>`)


    L.marker([lat, lng], { icon })
        .addTo(map)
        .bindPopup(popup)
}