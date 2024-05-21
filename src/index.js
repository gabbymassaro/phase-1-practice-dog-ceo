document.addEventListener("DOMContentLoaded", (e) => {
e.preventDefault()
const dogPark = document.getElementById("dog-image-container")
const dogBreeds = document.getElementById("dog-breeds")
console.log(dogBreeds)

fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(function(response) {
    return response.json()
  })
  .then(function (data) {
    let dogArray = data.message
    dogArray.forEach(function (dogs) {
      const image = document.createElement('img')
      image.src = dogs
      dogPark.appendChild(image)
    })
  })

fetch("https://dog.ceo/api/breeds/list/all")
  .then(function(response) {
    return response.json()
  })
  .then(function (data) {
    dogBreedArray = Object.keys(data.message)
    dogBreedArray.forEach(function (breed){ 
      const li = document.createElement('li')
      li.textContent = `${breed}`
      dogBreeds.appendChild(li)
    })
  })
})