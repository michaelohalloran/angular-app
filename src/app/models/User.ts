export interface User {
    firstName: string,
    lastName: string,
    age?: number, //? makes it optional
    address?: {
        street: string,
        city: string,
        state: string,
    }
}