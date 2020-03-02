export default {
  animalCount: (state) => {
    return state.pets.length
  },
  getAllCats: (state) => {
    return state.pets.filter(pet => pet.species === 'cat')
  },
  getAllDogs: (state) => {
    return state.pets.filter(pet => pet.species === 'dog')
  }
}
