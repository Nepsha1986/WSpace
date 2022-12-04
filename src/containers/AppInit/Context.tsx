import React from 'react';
import {FirebaseApp} from "firebase/app"
import { Auth } from "firebase/auth";

export interface FirebaseAppContextProps {
	app: FirebaseApp;
	auth: Auth;
}

export const FirebaseAppContext = React.createContext({} as FirebaseAppContextProps);

export const useFirebaseAppContext: () => FirebaseAppContextProps = () =>
	React.useContext(FirebaseAppContext);