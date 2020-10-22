"use strict"

const opti = () => {

  const getFormData = () => {
    const formData = new FormData(document.getElementById("optifast-calculator"))
    return {
      carbohydrates: parseInt(formData.get("carbohydrates")),
      fat: parseInt(formData.get("fat")),
      protein: parseInt(formData.get("protein")),
      mixed: formData.get("mixed")
    }
  }

  const calculateGreenPoints = (carbs) => +carbs / 10

  const calculateYellowOrRed = (isYellow) => (fat) => isYellow ? { yellow: +fat } : { red: +fat }

  const calculateYellowAndRed = (fat) => {
    const red = Math.floor(fat / 3)
    const yellow = fat - red
    return {yellow, red}
  }

  const printResult = (result) => document.getElementById("result").innerHTML = result 

  const handleFormData = (event) => { 
    event.preventDefault()
    const { carbohydrates, fat, protein, mixed } = getFormData()
    const isYellow = !mixed && protein > fat
    const calculateFatPoints = mixed ? calculateYellowAndRed : calculateYellowOrRed(isYellow)
    const { yellow, red } = calculateFatPoints(fat)
    const green = calculateGreenPoints(carbohydrates)
    printResult(`green: ${green ? green : 0}, yellow: ${yellow? yellow: 0}, red: ${red? red: 0}`)
  }

  const addListeners = (callback) => {
    document
      .getElementById("optifast-calculator")
      .addEventListener("submit", callback);
  }

  return {addListeners, handleFormData}
}
