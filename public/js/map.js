window.onload = initTheMap

function initTheMap()
{
    let mymap = L.map('map').setView([43.6044622,1.4442469], 13);

        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibmVvZ3JhcGgiLCJhIjoiY2tyNmNwNG5xM2JmaTJvcWgzYjhqd3BmcSJ9.1FadDm5BTY_HcxSE39-7kA'
    }).addTo(mymap);

    let url = "https://api.jcdecaux.com/vls/v3/stations?contract=Lyon&apiKey=f29a4663948246f1b9fd88aaf9897f6f96575fda";
    fetch(url)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(error => alert("Erreur : " + error));

}