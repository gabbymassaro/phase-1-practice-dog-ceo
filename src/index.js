document.addEventListener("DOMContentLoaded", (e) => {
e.preventDefault()
const dogPark = document.getElementById("dog-image-container")
console.log(dogPark)

fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(function(response) {
    return response.json()
  })
  .then(function (data) {
    let dogArray = data.message
    dogArray.forEach(function (dogs) {
      console.log(dogs)
      const image = document.createElement('img')
      image.src = dogs
      dogPark.appendChild(image)
    })
  })
})