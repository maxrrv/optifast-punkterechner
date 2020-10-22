"use strict"

const opti = () => {

  const getFormData = () => {
    const formData = new FormData(document.getElementById("optifast-calculator"))
    return {
      carbohydrates: parseFloat(formData.get("carbohydrates")),
      fat: parseFloat(formData.get("fat")),
      protein: parseFloat(formData.get("protein")),
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

  const printResult = ({green, yellow, red}) => {
    document.getElementById("green-result").innerHTML = green ? green : ""
    document.getElementById("red-result").innerHTML = red ? red : ""
    document.getElementById("yellow-result").innerHTML = yellow ? yellow : ""
  }

  const handleFormData = (event) => { 
    event.preventDefault()
    const { carbohydrates, fat, protein, mixed } = getFormData()
    const isYellow = !mixed && protein > fat
    const calculateFatPoints = mixed ? calculateYellowAndRed : calculateYellowOrRed(isYellow)
    const { yellow, red } = calculateFatPoints(fat)
    const green = calculateGreenPoints(carbohydrates)
    printResult({green, yellow, red})
  }

  const addListeners = (callback) => {
    document
      .getElementById("optifast-calculator")
      .addEventListener("submit", callback);
  }

  return {addListeners, handleFormData}
}
