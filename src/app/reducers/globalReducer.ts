export enum chatTypes {
  Answer = "Answer",
  Question = "Question",
}

export enum reducerTypes {
  ADD_CHAT = "ADD_CHAT",
  SET_JWT = "SET_JWT",
}

export type Chat = {
  text: string;
  type: chatTypes;
};

export type State = {
  chats: Chat[];
  jwt: string;
};

export const init_state_global: State = {
  chats: [],
  jwt: "",
};

export type ReducerActions = {
  type: reducerTypes;
  payloadGlobal?: Chat | string;
};

export const globalReducer = (
  state: typeof init_state_global,
  action: ReducerActions
): typeof init_state_global => {
  switch (action.type) {
    case reducerTypes.ADD_CHAT:
      return {
        ...state,
        chats: [...state.chats, action.payloadGlobal as Chat],
      };
    case reducerTypes.SET_JWT:
      return {
        ...state,
        jwt: action.payloadGlobal as string,
      };
    default:
      return state;
  }
};
