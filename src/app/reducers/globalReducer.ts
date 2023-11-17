export enum chatTypes {
  Answer = "Answer",
  Question = "Question",
}

export enum reducerTypes {
  ADD_CHAT = "ADD_CHAT",
  SET_JWT = "SET_JWT",
  SET_USER_DATA = "SET_USER_DATA",
}

export type UserData = {
  username: string;
  accessToken: string
};

export type Chat = {
  text: string;
  type: chatTypes;
};

export type State = {
  chats: Chat[];
  jwt: string;
  userData: UserData
};

export const init_state_global: State = {
  chats: [],
  jwt: "",
  userData: {
    username: "",
    accessToken: ""
  },
};

export type ReducerActions = {
  type: reducerTypes;
  payloadGlobal?: Chat | string | UserData | undefined;
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
      case reducerTypes.SET_USER_DATA:
        return {
          ...state,
          userData: action.payloadGlobal as unknown as UserData,
        };
      default:
      return state;
  }
};
