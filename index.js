const display = document.getElementById('display')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
let loc 
async function getLocation()  {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(postCoordinates);

    } else {
        console.log("Geolocation is not available")
    }
}

let postCoordinates = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coords = {latitude: latitude,
        longitude: longitude}
    console.log("Before sending data to server")
    console.log(coords)
    fetch('https://script.google.com/macros/s/AKfycbyijU0gnErpMxE7J_wXeQ8gPBgTJmZVkXM06LwEKaY2jSBoH4X2C0B6bR--xTKGFZuj/exec',
    {
        method: 'POST',
           headers: {
               'Content-Type': 'text/plain;charset=utf-8',
               },
           body: JSON.stringify(coords),
           }).then(res => res.json())
           .then(data => {
           console.log("success:", data);
                   // console.log(data)
                   console.log("check 2")
           })
           .catch(err => {
               console.log("Error:" + err);
           });
           console.log("check 3")
    }


const url = 'https://script.google.com/macros/s/AKfycbyijU0gnErpMxE7J_wXeQ8gPBgTJmZVkXM06LwEKaY2jSBoH4X2C0B6bR--xTKGFZuj/exec'
btn1.addEventListener('click',(e) =>{
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8',
                }
            }).then(res => res.json())
                .then(data => {
                console.log("success:", data);
                // console.log(data)
            })
            .catch(err => {
                console.log("Error:" + err);
            });
        })
async function test() {
    return "success"
}
btn2.addEventListener('click',(e) =>{
    getLocation()   
    })

