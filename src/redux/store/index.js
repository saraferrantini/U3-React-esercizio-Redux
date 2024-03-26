//☑️CONFIGURAZIONE DELLO STORE

//Una volta importato il rootReducer, lo passiamo come valore del campo reducer nell'oggetto di configurazione di configureStore
//Così lo store Redux è configurato per utilizzare il rootReducer come suo reducer principale, che a sua volta gestisce tutti gli stati dell'applicazione attraverso i sotto-reducer combinati.
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/index";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
