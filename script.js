
let url = "https://kontests.net/api/v1/all"
let responce = fetch(url);
responce.then((value)=>{
    return value.json()
}).then((contest)=>{

console.log(contest);

    ihtml = ""

    for(item in contest){
        console.log(contest[item].name)

            ihtml += `                <div class="cards">
                    <img src="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg" alt="">
                    <h2>${contest[item].name}</h2>
                    <p>Start: ${contest[item].start_time}</p>
                    <p>End: ${contest[item].end_time}</p>
                    <p>Status: ${contest[item].status}</p>
                    <p>In 24 hour: ${contest[item].in_24_hours}</p>
                    <a href="${contest[item].url}" target="_blank">Visit Site</a>

                </div>`
                const container = document.getElementById("container")
container.innerHTML = ihtml
    }
})


// const axios = require('axios');

const options = {
  method: 'GET',
  params: {
    lat: '35.5',
    lon: '-78.5'
  },
  headers: {
    'X-RapidAPI-Key': '0bc09a55e2mshef015db42ef2630p1f2e6bjsne07fd2c851ab',
    'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
  }
};

// let func = async ()=>{
//     let responce1 = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m")
//     let result = await responce1.json()
//     console.log(result)

// }
//  func()


            /*
        const btnEl = document.querySelector("button")
        btnEl.addEventListener('click', addNote)
        let count = 0;  // Key Value

        // Function to add a note
        function addNote() {
            let KeyVlaue = prompt("Enter Vlaue for the key")
            localStorage.setItem(`${count}`, `${KeyVlaue}`)

            let p = document.createElement('li')
            p.innerHTML = KeyVlaue
            document.body.append(p)


            count++ // Increases the key value by one
        }

        // Clears the stord data 
        window.onload = () =>{
            localStorage.clear()
        }
        */
