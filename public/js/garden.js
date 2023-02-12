document.getElementById("signout-btn").addEventListener("click", e => {
    e.preventDefault();
    fetch("/api/users/logout",{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.href = "/"
        } else {
            alert("Darnit")
        }
    })
});
function plantdis(){
    fetch('/api/plants')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            const plant = data[i];
            const plantName = plant.plant_name.toLowerCase()
            // const plantHealth = plant.plant_health
            const appendPlantLocation = document.querySelector("#appendlist")
            const appendImageLocation = document.querySelector("#appendimage")
            const appendInfoLocation = document.querySelector("#appendinfo")

            const createPlantImg = document.createElement('img');
            createPlantImg.setAttribute('src', `/images/${plantName}.jpg`)
            
            const createPlantA = document.createElement('a');
            // TODO: add href for PlantA?
            createPlantA.setAttribute('href', "")
            createPlantA.setAttribute('class', 'feature-item')
            createPlantA.setAttribute('id', 'appendimage')
            
            const createPlantDiv = document.createElement('div');
            createPlantDiv.setAttribute('class', 'item-card')
            createPlantDiv.setAttribute('id', 'appendinfo')
            
            const createPlantH2 = document.createElement('h2');
            createPlantH2.setAttribute('class', 'item-name')
            
            const createPlantP = document.createElement('p');
            // createPlantP.textContent = `${plantHealth}`;
            
            const createPlantButton = document.createElement('button');
            createPlantButton.setAttribute('type', 'button')
            createPlantButton.setAttribute('class', 'feature-button')
            createPlantDiv.setAttribute('id', 'addGardenBtn')


            if(plant%2 === 0){
                appendPlantLocation.appendChild(createPlantA)
                appendImageLocation.appendChild(createPlantDiv)
                appendImageLocation.appendChild(createPlantImg)
                appendInfoLocation.appendChild(createPlantH2)
                appendInfoLocation.appendChild(createPlantP)
                appendInfoLocation.appendChild(createPlantButton)

            // } else if(plant%2 !==0) {
            //     appendPlantLocation.appendChild(createPlantA)
            //     appendImageLocation.appendChild(createPlantImg)
            //     appendImageLocation.appendChild(createPlantDiv)
            //     appendInfoLocation.appendChild(createPlantH2)
            //     appendInfoLocation.appendChild(createPlantP)
            //     appendInfoLocation.appendChild(createPlantButton)
            //     // switched order of the img and div
            // }
            
        }
      });
}
plantdis()