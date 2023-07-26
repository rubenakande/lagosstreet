let display = document.getElementById('display')
let getLocation = () => {
    alert("Hi there")
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    } else {
        display.innerHTML ="Geolocation is not available"
    }
}

let showPosition = (position) => {
    display.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude
}