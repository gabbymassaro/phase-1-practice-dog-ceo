document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault()
  const dogPark = document.getElementById("dog-image-container")
  const dogBreeds = document.getElementById("dog-breeds")
  const dropdown = document.getElementById("breed-dropdown")
  
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
      let dogBreedArray = Object.keys(data.message)
  
      dogBreedArray.forEach(function (breed){ 
        const li = document.createElement('li')
        li.textContent = `${breed}`
        li.style.color = 'black'
        trackBreeds = dogBreeds.appendChild(li)
        
        trackBreeds.addEventListener('click', (e) => {
          if (li.style.color === 'black') {
            li.style.color = 'red'
          } else {
            li.style.color = 'black'
          }
        })
      })
      
      dropdown.addEventListener('click', (e) => {
        let selectedOption = dropdown.value;
        let filteredBreed = dogBreedArray.filter(name => name.startsWith(selectedOption))
        dogBreeds.innerHTML = ''

        filteredBreed.forEach(function (name){ 
          const li = document.createElement('li')
          li.textContent = `${name}`
          li.style.color = 'black'
          trackBreeds = dogBreeds.appendChild(li)
      })
    })
  })
})