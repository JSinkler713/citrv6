export default function animals(state = [], action) {
  switch (action.type) {
    case 'FETCH_ANIMALS':
      return state 
    case 'FETCH_ANIMALS_FULFILLED':
      return action.payload.pets
    default:
      return state
  }
}
