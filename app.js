window.addEventListener('load', ()=>{
   let long = 24.7037952;
   let lat = 59.4075648;
   //let long;
   //let lat;
    /*if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.latitude;
            lat = position.coords.latitude;
            console.log("Long: ", long);
            console.log("Lat: ", lat);
        })
    }*/
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const api = `${proxy}https://api.darksky.net/forecast/5d1ca6151cc93d30c719e59ec670d196/${lat},${long}`;
    fetch(api)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
});