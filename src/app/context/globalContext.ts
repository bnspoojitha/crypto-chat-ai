"use client"

import { Dispatch, createContext, useContext } from "react";

import { ReducerActions, State, init_state_global } from "../reducers/globalReducer";


export type GlobalContentProfile = {
  state: State;
  dispatch: Dispatch<ReducerActions>;
};

export const globalContext = createContext<GlobalContentProfile>({
  state: init_state_global,
  dispatch: () => {},
});

export const useGlobalContext = () => useContext(globalContext);
