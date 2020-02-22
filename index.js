"use strict"

const opti = {
  calculateOptiPoints: (event) => { 
    event.preventDefault()

    const formData = new FormData(document.getElementById("optifast-calculator"))
    const pointType = formData.get("point-type")
    const carbohydrates = formData.get("carbohydrates")
    const fat = formData.get("fat")
    const protein = formData.get("protein")
      console.log(carbohydrates)
    const result = `${pointType}: ${pointType == "green-point" ? carbohydrates / 10 : fat}`
    document.getElementById("result").innerHTML = result


  },
  addListeners: () => {
    document.getElementById("optifast-calculator").addEventListener("submit", opti.calculateOptiPoints);
  
  }
}

opti.addListeners()
