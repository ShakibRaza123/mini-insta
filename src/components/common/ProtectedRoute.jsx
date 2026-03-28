import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const isLoggedIn = localStorage.getItem("dummyLogin");

    return isLoggedIn ? children : <Navigate to="/" />;
}