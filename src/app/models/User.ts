export interface User {
    firstName: string,
    lastName: string,
    email: string,
    isActive?: boolean, //? makes it optional
    registered?: any,
    hide?: boolean,
}