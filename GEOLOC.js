if('geolocation' in navigator){
    console.log("geo avail");
    navigator.geolocation.getCurrentPosition(position =>{
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const openhref = 'https://www.openstreetmap.org/#map=18/'+latitude+'/'+longitude;
        const gmaphref = 'https://www.google.com/maps/place/'+latitude+"+"+longitude;
        document.getElementById('lat').textContent=latitude;
        document.getElementById('lon').textContent=longitude;
        document.getElementById('map').href=openhref;
        document.getElementById('gmap').href=gmaphref;
        //console.log(href);
    }
    )
}
else
{

}