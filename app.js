window.addEventListener('load', ()=>{
   let long = 24.7037952;
   let lat = 59.4075648;

   let temperatureDegree = document.querySelector(".temperature-degree");
   let temperatureDescription = document.querySelector(".temperaure-description");
   let locationTimeZone = document.querySelector(".location-timezone");
   let temperatureSection = document.querySelector(".degree-section");
   let temperatureSectionSpan = document.querySelector(".degree-section span");
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
        const {temperature,  summary, icon} = data.currently;
        temperatureDegree.textContent = temperature;
        temperatureDescription.textContent = summary;
        locationTimeZone.textContent = data.timezone;
        console.log("ICON",icon);
        section(icon, document.querySelector(".icon"));

        let celsius = (temperature - 32)*(5/9);
        temperatureSection.addEventListener('click', () => {
            if(temperatureSectionSpan.textContent === "F"){
                temperatureSectionSpan.textContent = "℃";
                temperatureDegree.textContent = Math.floor(celsius);

            }else{
                temperatureSectionSpan.textContent = "F";
                temperatureDegree.textContent = temperature;
            }
        });

    });
});
function section(icon, iconID){
    const skycons = new skycons({color: "white"});
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]);
}
