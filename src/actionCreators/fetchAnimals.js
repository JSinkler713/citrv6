export const FETCH_ANIMALS = 'FETCH_ANIMALS'
export const FETCH_ANIMALS_FULFILLED = 'FETCH_ANIMALS_FULFILLED'

export const fetchAnimals = () => {
  return { type: FETCH_ANIMALS }
}

export const fetchAnimalsFulfilled = (payload) => {
  return { type: FETCH_ANIMALS_FULFILLED, payload }
}
