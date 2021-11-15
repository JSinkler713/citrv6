import { ajax } from "rxjs/ajax";
import { ofType } from "redux-observable";
import { map, mergeMap, tap } from "rxjs/operators";

import {
  FETCH_ANIMALS,
  fetchAnimalsFulfilled,
} from "./actionCreators/fetchAnimals";

const apiEndpoint = `http://pets-v2.dev-apis.com/pets`;

const fetchAnimalsEpic = (action$, state$) => {
  console.log('in the epic')
  return action$.pipe(
    ofType(FETCH_ANIMALS),
    mergeMap((action) =>
      ajax
        .getJSON(
          `${apiEndpoint}?animal=${state$.value.animal}&location=${state$.value.location}&breed=${state$.value.breed}`
        )
      .pipe(
        tap(res=>console.log(res)),
        map((response) => fetchAnimalsFulfilled(response))
      )
    )
  );
};

export default fetchAnimalsEpic
