import * as bcrypt from 'bcrypt';

export class PasswordService {
    constructor(private readonly saltRounds = 12) {}
    
    hash(plain: string) {
        return bcrypt.hash(plain, this.saltRounds);
    }
    compare(plain: string, hash: string) {
        return bcrypt.compare(plain, hash);
    }
}
