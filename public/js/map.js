let markers = [];
class Data {
    constructor(){}
    importApi() {
        let url = "https://api.jcdecaux.com/vls/v3/stations?contract=Lyon&apiKey=f29a4663948246f1b9fd88aaf9897f6f96575fda";
        fetch(url)
        .then(response => response.json())
        .then(response => this.filterData(response))
        .catch(error => alert("Erreur : " + error));   
    };
    // filtrer la data reçu et push dans un nouveau tableau
    filterData(data){
        let dataFiltered = []
        for (let i = 0; i < data.length; i++){
            if (data[i].status == "OPEN"){
                dataFiltered.push(data[i]);
            }
        }
        let bikeStock = []
        for (let i = 0; i < dataFiltered.length; i++){
            if (dataFiltered[i].totalStands.availabilities.bikes > 0){
                bikeStock.push(dataFiltered[i]);
            }
        }
        this.initMap(bikeStock);
    };
    initMap(bikeStock){
        let map = L.map('map').setView([45.75493922033646,4.84711760117186], 13);
        let osm = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoibmVvZ3JhcGgiLCJhIjoiY2tyNmNwNG5xM2JmaTJvcWgzYjhqd3BmcSJ9.1FadDm5BTY_HcxSE39-7kA'
        });
        osm.addTo(map);

        //custom icons
        var myIcon = L.icon({
            iconUrl: 'public/img/marker.png',
            iconSize: [35, 45],
            iconAnchor: [22, 94],
            popupAnchor: [-3, -76],
        });
        for (let i = 0; i < bikeStock.length; i++){
            let lat = bikeStock[i].position.latitude;
            let long = bikeStock[i].position.longitude;
            let name = bikeStock[i].name;
            let address = "test"
            if (bikeStock[i].address == ""){
                address = "Adresse non disponible"
            }
            else (
                address = "Adresse: " + bikeStock[i].address
                );
            let nbVDispo = "Nombre de vélo disponible(s): " + bikeStock[i].totalStands.availabilities.bikes;
            
            // ajout des markers sur la carte et dans un tableau
            L.marker([lat, long], {icon: myIcon}).addTo(map).bindPopup("<h3 id='title'>" + name + "</h3> <p>" + address + "</br>" + nbVDispo + "</br></br><button class='bookBtn btn btn-success' id='bookBtn' onclick='book(" + i + ")'>Réserver un vélo</button></p>");
            markers.push(name);
        }
    };
};    
$(document).ready(function(){
    const dataa = new Data();
    dataa.importApi();
});