import { createContext, ReactNode, useState } from "react";

type AuthProviderProps = {
    children: ReactNode;
}

type AuthContextData = {
    isAuthenticated: boolean;
    setIsAuthenticated: (value: boolean) => void;
    user: string;
    setUser: (value:string)=> void;
}

export const AuthContextData = createContext({} as AuthContextData);

export const AuthProvider = ({children}: AuthProviderProps) => {
        const [isAuthenticated, setIsAuthenticated] = useState(false)
        const [user, setUser]= useState("");
    return(
        <AuthContextData.Provider value={{isAuthenticated, setIsAuthenticated, user, setUser}}>
            {children}
        </AuthContextData.Provider>
    );
}