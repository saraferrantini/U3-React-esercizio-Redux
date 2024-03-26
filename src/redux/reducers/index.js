import { combineReducers } from "redux";
import favouritesReducer from "./favouritesReducer";
import searchReducer from "./searchReducer";

//☑️COMBINEREDUCERS
//combineReducers viene utilizzato per combinare i sotto-reducer (favouritesReducer e searchReducer) in un unico oggetto chiamato rootReducer

//☑️ROOTREDUCERS
//abbiamo due sotto-reducer:

//favouritesReducer gestisce lo stato relativo ai lavori preferiti e searchReducer gestisce lo stato relativo ai risultati di ricerca.
//Quando combinati insieme utilizzando combineReducers, questi sotto-reducer diventano proprietà dell'oggetto rootReducer

//In questo modo, lo stato dell'applicazione è organizzato in modo più strutturato e modulare, consentendo una migliore gestione e una maggiore facilità di manutenzione.
const rootReducer = combineReducers({
  favourites: favouritesReducer,
  search: searchReducer,
});

export default rootReducer;
