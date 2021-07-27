// ajout des icons perso pour les markers
let dataFiltered = []
let bikeStock = []
class DataApi {
    constructor(){}
    importAPI() {
        let url = "https://api.jcdecaux.com/vls/v3/stations?contract=Lyon&apiKey=f29a4663948246f1b9fd88aaf9897f6f96575fda";
        fetch(url)
        .then(response => response.json())
        .then(response => this.filterData(response))
        .catch(error => alert("Erreur : " + error));   
    }
    // fonction pour filtrer la data reçu en fonction d'une condition et push les résultats dans un nouveau tableau
    filterData(data){
        for (let i = 0; i < data.length; i++){
            if (data[i].status == "OPEN"){
                dataFiltered.push(data[i]);
            }
        }
        for (let i = 0; i < dataFiltered.length; i++){
            if (dataFiltered[i].totalStands.availabilities.bikes > 0){
                bikeStock.push(dataFiltered[i]);
            }
        }
        // console.log(data); // Données brutes
        // console.log(dataFiltered); // Stations ouvertes seulement 
        console.log(bikeStock) // Vélos disponibles
    }
};
class MapBuild {
    constructor(){}
    initMap() {
        let mapV = L.map('map').setView([45.75493922033646,4.84711760117186], 11);
        let osm = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoibmVvZ3JhcGgiLCJhIjoiY2tyNmNwNG5xM2JmaTJvcWgzYjhqd3BmcSJ9.1FadDm5BTY_HcxSE39-7kA'
        });
        osm.addTo(mapV);
        this.addMarkers();
    }
    addMarkers() {
        console.log("fonction ajout des markers")
        for (let i = 0; i < bikeStock.length; i++){
            let marker = L.marker([bikeStock[i].position.latitude, bikeStock[i].position.longitude], {
            }).addTo(mapV).bindPopup("<h1> Marker </h1> <p> This is the marker text </p>");
        }
    }
};    
const dataAPI = new DataApi();
const map = new MapBuild();
window.onload = dataAPI.importAPI();
window.onload = map.initMap();

// https://www.youtube.com/watch?v=5ZrYCt2BqSU&ab_channel=GeoDev
// https://leafletjs.com/reference-1.7.1.html#icon