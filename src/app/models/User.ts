import { basename } from 'path';

export interface User {
    firstName: string,
    lastName: string,
    age?: number, //? makes it optional
    address?: {
        street: string,
        city: string,
        state: string,
    },
    image?: string,
    isActive?: boolean,
    balance?: number,
    registered?: any,
}