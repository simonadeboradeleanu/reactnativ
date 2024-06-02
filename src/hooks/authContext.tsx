import React, { createContext, useContext, useEffect, useState } from "react";
import { getUserDetails, login, register } from "../api";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IAuthContext {
    userDetails: any;
    token: string;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
    isLoading: boolean

}

const AuthContext = createContext<IAuthContext>({
    userDetails: null,
    token: '',
    login: async () => {},
    register: async () => {},
    isLoading: false
})

export const AuthContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {

    const [token, setToken] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);
    const [userDetails, setUserData] = useState<any>(null);

    useEffect(() => {
        setIsLoading(true)
        AsyncStorage.getItem('token')
        .then(value => {
            if (value !== null) {
                setToken(value)
            }
        })
        .finally(() => {setIsLoading(false)})
    }, []);

    const handleLogin = async (email: string, password: string) => {
        try {
            const result = await login(email, password);
            setToken(result);
            await AsyncStorage.setItem('token', result);
        } catch (error) {
            console.log(error)
        }
    };
    const handleRegister = async (email: string, password: string) => {
        try {
            const result = await register(email, password);
            setToken(result);
            await AsyncStorage.setItem('token', result);
        } catch (error) {
            console.log(error)
        }
    };

    const handleUserDetails = async () => {
        try {
            const result = await getUserDetails();
            setUserData(result);
        } catch (error) {
            console.log(error)
        }
    };
    return (
        <AuthContext.Provider value={{
            userDetails,
            token,
            login: handleLogin,
            register: handleRegister,
            isLoading
        }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => useContext(AuthContext);
