import React, { createContext, useContext, useReducer} from "react";

// prepares the DataLayer

export const StateContext= createContext();

// Wrap our app and provide DataLayer
export const StateProvider=({ reducer, initialState, children  }) => (
    <StateContext.Provider value={useReducer( reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull information from the DataLayer
export const useStateValue= () => useContext(StateContext); 