class UI {
    constructor() {
        this.api=new API()
        this.markers= new L.LayerGroup()
         // Iniciar el mapa
        this.mapa = this.inicializarMapa();

    }

    inicializarMapa() {
         // Inicializar y obtener la propiedad del mapa
         const map = L.map('mapa').setView([19.390519, -99.3739778], 6);
         const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
         L.tileLayer(
             'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
             attribution: '&copy; ' + enlaceMapa + ' Contributors',
             maxZoom: 18,
             }).addTo(map);
         return map;

    }
    showLocals(){
        this.api.getData()
            .then(data=>{
                const resultData=data.results
                this.showPointsOnMap(resultData)
            })
    }
    showPointsOnMap(data){
        //console.log(data)
        this.markers.clearLayers()
        data.forEach(element => {
            const {longitude,latitude,regular,premium,calle}=element
            //Add a popup
            const popup=L.popup()
                            .setContent(`<p>Calle: ${calle}</p>
                                         <p><b>Regular</b>: ${regular}</p>
                                         <p><b>Premium</b>: ${premium}</p>`)
            //add pin
            const marker=L.marker([
                parseFloat(latitude),
                parseFloat(longitude)
            ]).bindPopup(popup)
            //Add markers to the layer
            this.markers.addLayer(marker)
        });
        //Add layer to the map
        this.markers.addTo(this.mapa)

    }

    searchSuggestions(textToBeSearched){
        this.api.getData()
            .then(data=>{
                const res=data.results
                this.resultsFilter(res,textToBeSearched)
            })
    }

    resultsFilter(results,search){
        const filt=results.filter(element => element.calle.indexOf(search) !== -1)
        //console.log(filt)
        this.showPointsOnMap(filt)
    }
}