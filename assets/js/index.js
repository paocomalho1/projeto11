var map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoicGFvY29tYWxobyIsImEiOiJjbDByOHFsd28wMTRqM2JwNXQ1bWI3cmFhIn0.P_V03j0uL9Yx9wJB4_iLNg'
    }).addTo(map);

function buscarIp(){
    const input = document.querySelector(".cabecalho__input")
    const valor = input.value
    
    
    const url = `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_i347jSTrUxn4t7OMJSBeOWObTsS3q&ipAddress=${valor}`
    fetch(url, {method: 'GET',}).then(response => response.json()).then( 
        data => {mudar(data)

        }
    )
}
function mudar(data){
    const lista = document.querySelectorAll(".cabecalho__item-texto")
    const botao = document.querySelector(".cabecalho__botao")
    if(data.ip == undefined){
        botao.classList.add("error")
        return
        
    }else{
        botao.classList.remove("error")
    }
    lista[0].innerHTML = data.ip
    lista[1].innerHTML = data.location.city + ` ${data.location.region}` + ` ${data.location.country}`
    lista[2].innerHTML = `UTL${data.location.timezone}`
    lista[3].innerHTML = data.isp
    map.setView([data.location.lat, data.location.lng], 13);
    var marker = L.marker([data.location.lat, data.location.lng]).addTo(map);
    

}
