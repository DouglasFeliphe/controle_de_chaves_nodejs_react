import { createContext } from 'react'

interface Users {
    name: string
    registration_number: number
}

const UsersContext = createContext<Users>({
    name: 'fulano',
    registration_number: 1001000000001
})

export default UsersContext