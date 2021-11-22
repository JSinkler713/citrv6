import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks'
import useBreedList from '../useBreedList';

// some weird syntx to use our hook w/ a basic TestComponent
/*
function getBreedList(animal) {
  let list
  function TestComponent () {
    list = useBreedList(animal) // returns [breedList, status]
    // valid markup for react component
    return null
  }
  render(<TestComponent />)
  return list
}
*/

test ("gives an empty list with no animal", async ()=> {
  //const [breedList, status] = getBreedList()
  const { result } = renderHook(()=> useBreedList()) // renderHook
  const [breedList, status] = result.current

  expect(breedList).toHaveLength(0)
  expect(status).toBe('unloaded')
})

test("gives back breeds with an animal", async()=> {
  const breeds = [
    "Terrier",
    "Poodle",
    "Corgie"
  ]

  fetch.mockResponseOnce(JSON.stringify({
    animal: "dog",
    breeds
  }))

  const { result, waitForNextUpdate } = renderHook(()=> useBreedList("dog"))

  await waitForNextUpdate();

  const [breedList, status] = result.current;
  expect(status).toBe("loaded");
  expect(breedList).toEqual(breeds);

})





