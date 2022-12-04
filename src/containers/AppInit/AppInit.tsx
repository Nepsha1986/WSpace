import React, { useEffect, useState, Consumer } from 'react';
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth  } from "firebase/auth";
import { firebaseConfig } from '../../firebase-config';
import { FirebaseAppContext } from "./Context";

const AppInit = ({children}: { children: React.ReactNode }) => {
	const [app, setApp] = useState({} as FirebaseApp);
	const [auth, setAuth] = useState({} as Auth);

	useEffect(() => {
		debugger;

		const app = initializeApp(firebaseConfig);
		const auth = getAuth(app);

		setApp(app);
		setAuth(auth);
		debugger;
	}, []);

	return <><FirebaseAppContext.Provider value={{app: app, auth: auth}}>{children}</FirebaseAppContext.Provider></>;
}

export default AppInit;