function plantdis(){
    fetch('/api/plants')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            const plant = data[i];
            const plantName = plant.plant_name.toLowerCase()
            if (plantName.includes(" ")) {
                plantName = plantName.split(" ").join("-");
              }
            const plantHealth = plant.Health
            const appendPlantLocation = document.querySelector("#appendlist")
            const createPlantImg = document.createElement('img');
            const createPlantA = document.createElement('a');
            const createPlantDiv = document.createElement('div');
            const createPlantH2 = document.createElement('h2');
            const createPlantP = document.createElement('p');
            const createPlantButton = document.createElement('button');
           

            if(i%2 === 0){
                createPlantImg.setAttribute('src', `/images/${plantName}.jpg`)
                
                // TODO: add href for PlantA?
                createPlantA.setAttribute('href', "")
                createPlantA.setAttribute('class', 'feature-item')
                createPlantA.setAttribute('id', `appendimage${i}`)
                
                createPlantDiv.setAttribute('class', 'item-card')
                createPlantDiv.setAttribute('id', `appendinfo${i}`)
                
                createPlantH2.setAttribute('class', 'item-name')
                createPlantH2.textContent = `${plant.plant_name}`;

                let firstBenefit = true;
                plantHealth.forEach(function(plants) {
                  console.log(plants.benefits);
                  if (firstBenefit) {
                    createPlantP.textContent += `This plant is most commonly used for : ${plants.benefits}`;
                    firstBenefit = false;
                  } else {
                    createPlantP.textContent += `, ${plants.benefits}`;
                  }
                });
                                
                createPlantButton.setAttribute('type', 'button')
                createPlantButton.setAttribute('class', 'feature-button')
                createPlantButton.setAttribute('id', 'addGardenBtn')

                appendPlantLocation.appendChild(createPlantA)
                let appendImageLocation = document.querySelector(`#appendimage${i}`)
                appendImageLocation.appendChild(createPlantDiv)
                let appendInfoLocation = document.querySelector(`#appendinfo${i}`)
                appendImageLocation.appendChild(createPlantImg)
                appendInfoLocation.appendChild(createPlantH2)
                appendInfoLocation.appendChild(createPlantP)
                appendInfoLocation.appendChild(createPlantButton)
                
            } 
            else if(i%2 !==0) {
                createPlantImg.setAttribute('src', `/images/${plantName}.jpg`)
                
                // TODO: add href for PlantA?
                createPlantA.setAttribute('href', "")
                createPlantA.setAttribute('class', 'feature-item')
                createPlantA.setAttribute('id', `appendimage${i}`)
                
                createPlantDiv.setAttribute('class', 'item-card')
                createPlantDiv.setAttribute('id', `appendinfo${i}`)
                
                createPlantH2.setAttribute('class', 'item-name')
                createPlantH2.textContent = `${plant.plant_name}`;

                let firstBenefit = true;
                plantHealth.forEach(function(plants) {
                  console.log(plants.benefits);
                  if (firstBenefit) {
                    createPlantP.textContent += `This plant is most commonly used for : ${plants.benefits}`;
                    firstBenefit = false;
                  } else {
                    createPlantP.textContent += `, ${plants.benefits}`;
                  }
                });            
                createPlantButton.setAttribute('type', 'button')
                createPlantButton.setAttribute('class', 'feature-button')
                createPlantButton.setAttribute('id', 'addGardenBtn')

                appendPlantLocation.appendChild(createPlantA)
                let appendImageLocation = document.querySelector(`#appendimage${i}`)
                appendImageLocation.appendChild(createPlantImg)
                appendImageLocation.appendChild(createPlantDiv)
                let appendInfoLocation = document.querySelector(`#appendinfo${i}`)
                appendInfoLocation.appendChild(createPlantH2)
                appendInfoLocation.appendChild(createPlantP)
                appendInfoLocation.appendChild(createPlantButton)
                // switched order of the img and div
            }
            
        }
      });
}
plantdis()