import {  useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Results from './Results'
import useBreedList from './useBreedList'
import changeLocation from './actionCreators/changeLocation'
import changeAnimal from './actionCreators/changeAnimal'
import changeBreed from './actionCreators/changeBreed'
import changeTheme from './actionCreators/changeTheme'
const ANIMALS = ["bird", "cat", "dog", "rabbit", "turtle"];

const SearchParams = () => {
  const animal = useSelector(state=> state.animal)
  const location = useSelector(state=> state.location)
  const theme = useSelector(state=> state.theme)
  const breed = useSelector(state=> state.breed)
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal)
  const dispatch = useDispatch();
  

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
    dispatch(changeLocation(e.target.value))
  };

  const handleAnimalChange = (e) => {
    dispatch(changeBreed(""))
    dispatch(changeAnimal(e.target.value))
  }

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
            onChange={(e) => handleAnimalChange(e)}
            onBlur={(e) => handleAnimalChange(e)}
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
            onChange={(e) => dispatch(changeBreed(e.target.value))}
            onBlur={(e) => dispatch(changeBreed(e.target.value))}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="theme">
          Theme
          <select
            value={theme}
            onChange={e=> dispatch(changeTheme(e.target.value))}
            onBlur={e=> dispatch(changeTheme(e.target.value))}>
            <option value='darkblue'>DarkBlue</option>
            <option value='peru'>Peru</option>
            <option value='firebrick'>Firebrick</option>

          </select>
        </label>
        <button style={{backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};
export default SearchParams;
