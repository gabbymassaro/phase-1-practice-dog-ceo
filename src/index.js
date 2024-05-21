// Once we are able to load all of the dog breeds onto the page, add JavaScript 
// so that the user can filter breeds that start with a particular letter using 
// a dropdown

// For example, if the user selects 'a' in the dropdown, only show the breeds 
// with names that start with the letter a. For simplicity, the dropdown only 
// includes the letters a-d. However, we can imagine expanding this to include 
// the entire alphabet.


// the value of the option needs to === the first character
// of the breeds name and only display those
// need an eventListener to know when the option has been selected
// it needs to come after the fetch has received the dog breeds

// grab the Selected letter
// grab the array of names
// filter through the array
// check if name starts with selected letter (truthy)
// (filter looks for truthy return)
// return filtered array 

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
    console.log("This is dogBreedArray: ", dogBreedArray)

    let breedA = dogBreedArray.filter(name => name.startsWith('a'))
    let breedB = dogBreedArray.filter(name => name.startsWith('b'))
    let breedC = dogBreedArray.filter(name => name.startsWith('c'))
    let breedD = dogBreedArray.filter(name => name.startsWith('d'))

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
      console.log("This was selected: ", selectedOption)

      if (selectedOption === 'a') {
        console.log(breedA)
      }
    })

  })

})