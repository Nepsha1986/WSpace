import React from 'react';
import { Navigate } from 'react-router-dom';
import { useFirebaseAppContext } from "../AppInit/Context";
import { getAuth } from 'firebase/auth';

interface ProtectedRouteProps {
	children: React.ReactNode,
	redirectPath?: string,
}

const ProtectedRoute = ({
	redirectPath = '/sign-in',
	children,
}:ProtectedRouteProps) => {
	const { auth } = useFirebaseAppContext();
	if (!auth.currentUser) {
		return <Navigate to={redirectPath} replace />;
	}

	return <>{children}</>;
};

export default ProtectedRoute;