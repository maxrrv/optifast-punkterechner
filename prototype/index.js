"use strict"

const opti = () => {
  const calculateGreenPoints = (carbs) => carbs / 10 

  const calculateYellowOrRed = (fat) => fat

  const calculateYellowAndRed = (fat) => {
    const red = math.floor(fat / 3)
    const yellow = fat - red
    return {yellow, red}
  }

  const getFormData = () => {
    const formData = new FormData(document.getElementById("optifast-calculator"))
    const carbohydrates = formData.get("carbohydrates")
    const fat = formData.get("fat")
    const protein = formData.get("protein")
    const mixed = formData.get("mixed")
    return {carbohydrates, fat, protein, mixed}
  }

  const printResult = (result) => document.getElementById("result").innerHTML = result 

  const handleFormData = (event) => { 
    event.preventDefault()
    const { carbohydrates, fat, protein, mixed } = getFormData()
    


  }

  const addListeners = (callback) => {
    document
      .getElementById("optifast-calculator")
      .addEventListener("submit", callback);

  }

  return {addListeners, handleFormData}
}
