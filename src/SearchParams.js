import { useState, useEffect } from "react";
import Results from './Results'
import useBreedList from './useBreedList'
const ANIMALS = ["bird", "cat", "dog", "rabbit", "turtle"];

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal)

  useEffect(()=> {
    requestPets();
  }, []) //eslint-disable-line react-hooks/exhaustive-deps

  /*
  useEffect(()=> {
    const timer = setTimeout(()=> alert('hi'), 2000)
    // the cleanup function gets called when we remove the component from the page
    return ()=> clearTimeout(timer)
  })
  */

  async function requestPets() {
    let res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
    res = await res.json()
    console.log(res)
    setPets(res.pets)

  }
  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  /*
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  */

  return (
    <div className="search-params">
      <form onSubmit={(e)=> {
        e.preventDefault()
        requestPets()
      }}>
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={handleChange}
            value={location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};
export default SearchParams;
