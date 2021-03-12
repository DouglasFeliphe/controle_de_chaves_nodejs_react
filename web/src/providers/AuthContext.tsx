import React, { createContext, useState } from 'react';

interface Admins {
    name: string
    registration_number: number
}

interface AuthContextData {
    // signed: boolean,
    // token: string
    admin: Admins
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {

    const [admin, setAdmin] = useState<Admins>({
        name: 'asdf',
        registration_number: 123
    });

    return (
        <AuthContext.Provider value={{ admin }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext