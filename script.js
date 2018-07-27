let house = {
  exterior: "wood siding",
  roof: "spanish tile",
  bedrooms: 2,
  bathrooms: 2,
  sqft: 1200,
  hasYard: true
}

let neighborhood = [
  house
]

function drawNeighborhood(){
  let container = document.querySelector("div#container")
  container.innerHTML = ""
  
  for(let i=0; i<neighborhood.length;i++){
    build(neighborhood[i], container)
    let divider = document.createElement("p")
    divider.innerHTML = "🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲"
    container.appendChild(divider)
  }
}

function build(obj, container){
  let div = document.createElement("div")
  div.classList.add("house")

  for (let key in obj){
    // create a nice paragraph
    let p = document.createElement("p")
    p.innerHTML = key + ": " + obj[key]

    // append it to the "house" div
    div.appendChild(p)
  }
  // append "house" div to container
  container.appendChild(div)
}

// New form submission handler
const form = document.querySelector("form")

form.addEventListener("submit", function(event){
  event.preventDefault()

  let errorMessages = ""

  let newRoof = this.roof.value
  if(newRoof === ""){
    newRoof = "unknown"
  }
  let newExterior = this.exterior.value
  if(newExterior === ""){
    newExterior = "uknown"
  }

  let newBathrooms = parseFloat(this.bathrooms.value)
  if(isNaN(newBathrooms) || newBathrooms > 5 || newBathrooms < 1){
    errorMessages = errorMessages + "Number of bathrooms must be a number between 1 and 5"
  }

  let newBedrooms = parseInt(this.bedrooms.value)
  if(isNaN(newBedrooms) || newBedrooms > 5 || newBedrooms < 1){
    errorMessages = errorMessages + " Number of bedrooms must be a number between 1 and 5"
  }

  let newSqft = parseInt(this.sqft.value)
  if(isNaN(newSqft)){
    errorMessages = errorMessages + " Square Footage is required"
  }

  let newHasYard = this.hasYard.value
  if(newHasYard === ""){
    errorMessages = errorMessages + " Has Yard is required"
  } else {
    newHasYard = newHasYard === "true"
  }

  if(errorMessages !== ""){
    // print to page, return
    // TODO: Print at top of form, color red
    let p = document.createElement("p")
    p.innerHTML = errorMessages
    this.appendChild(p)
    return
  } else {
    // TODO: clear form fields
    // create object, put in neighborhood
    const newHouse = {
      exterior: newExterior,
      roof: newRoof,
      bedrooms: newBedrooms,
      bathrooms: newBathrooms,
      sqft: newSqft,
      hasYard: newHasYard
    }
    neighborhood.push(newHouse)
    drawNeighborhood()
  }

})
