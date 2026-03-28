import { useState } from "react";
import MobileLayout from "../layouts/MobileLayout";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <MobileLayout>
            {isLogin ? (
                <Login switchToRegister={() => setIsLogin(false)} />
            ) : (
                <Register switchToLogin={() => setIsLogin(true)} />
            )}
        </MobileLayout>
    );
}