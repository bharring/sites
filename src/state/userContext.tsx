import { Auth, CognitoUser } from '@aws-amplify/auth';
import { createContext, useReducer } from 'react';
import * as H from 'history';

export interface UserAttributes {
  email: string;
  email_verified: boolean;
  family_name: string;
  given_name: string;
  phone_number: string;
  phone_number_verified: boolean;
  sub: string;
}

/*
 * The following interface extends the CognitoUser type because it has issues
 * (see github.com/aws-amplify/amplify-js/issues/4927). Eventually (when you
 * no longer get an error accessing a CognitoUser's 'attribute' property) you
 * will be able to use the CognitoUser type instead of CognitoUserExt.
 */
export interface CognitoUserExt extends CognitoUser {
  attributes: UserAttributes;
}

export interface UserState extends Partial<UserAttributes> {
  error?: any;
  loading: boolean;
  password?: string;
  signedIn: boolean;
}

const initialState: UserState = {
  loading: false,
  signedIn: false,
};

export enum UserType {
  Login = '[User] Login',
  LoginError = '[User] LoginError',
  Logout = '[User] Logout',
  Loading = '[User] Loading',
}

export type UserActions =
  | { type: UserType.Login; payload: UserAttributes }
  | { type: UserType.LoginError; payload: any }
  | { type: UserType.Logout }
  | { type: UserType.Loading };

export const actions: { [key: string]: (state: UserState, payload?: any) => UserState } = {
  login: (state: UserState, { user }: { user: UserAttributes }): UserState => ({ ...user, loading: false, signedIn: true }),
  loginError: (state: UserState, error: any): UserState => ({ ...state, loading: false, error }),
  logout: (): UserState => initialState,
  loading: (state: UserState): UserState => ({ ...state, loading: true }),
};

const reducer = (state: UserState, action: UserActions): UserState => {
  console.log('state', state);
  console.log('action', action);
  switch (action.type) {
    case UserType.Login: {
      return actions.login(state, action.payload);
    }
    case UserType.Logout: {
      return actions.logout(state);
    }
    case UserType.Loading: {
      return actions.loading(state);
    }
    case UserType.LoginError: {
      return actions.loginError(state, action.payload);
    }
    default: {
      return state;
    }
  }
};

export const UserContext = createContext<{
  state: UserState;
  dispatch: (action: UserActions) => void;
  signOut: (e: React.MouseEvent) => Promise<void>;
  signIn: (email: string, password: string, history: H.History<unknown>) => Promise<void>;
}>({
  state: initialState,
  dispatch: () => undefined,
  signOut: async () => undefined,
  signIn: async () => undefined,
});

export const UserContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const signOut = async (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({ type: UserType.Logout });
    document.location.replace('/login');
    await Auth.signOut();
  };

  const signIn = async (email: string, password: string, history: H.History<unknown>) => {
    try {
      dispatch({ type: UserType.Loading });
      const user: CognitoUserExt = await Auth.signIn(email, password);
      dispatch({ type: UserType.Login, payload: user.attributes });
      history.push('/sites');
    } catch (e) {
      dispatch({ type: UserType.LoginError, payload: e });
    }
  };
  return <UserContext.Provider value={{ state, dispatch, signOut, signIn }}>{children}</UserContext.Provider>;
};
