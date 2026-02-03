// Minimal shape your app must provide to the library when validating credentials
export interface AuthUserWithPassword {
    id: string;
    email: string;
    passwordHash: string; // hashed password from your DB
    // add fields as you like; only these are required by the library
}

export interface AuthUserPublic {
    id: string;
    email: string;
    // add anything else you want to expose in tokens/responses
}
