const display = document.getElementById('display')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')

let getLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)

    } else {
        display.innerHTML ="Geolocation is not available"
    }
}

let showPosition = (position) => {
    display.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude
    console.log(position)
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

btn2.addEventListener('click',(e) =>{
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain;charset=utf-8',
            },
        body: JSON.stringify({a: 2}),
        }).then(res => res.json())
        .then(data => {
        console.log("success:", data);
                // console.log(data)
        })
        .catch(err => {
            console.log("Error:" + err);
        });
    })

