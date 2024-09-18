import * as bcrypt from 'bcryptjs';
export class User {
    constructor(
        public id: number,
        public full_name: string | null,
        public age: number | null,
        public email: string | null,
        public password: string,
        public avatar: string | null,
        public created_at: Date | null,
        public updated_at: Date | null,
        public state: boolean = true,
    ) {
        this.hashPassword();
    }
    // FAMOSAS REGLAS DE NEGOCIO
    private async hashPassword(): Promise<void> {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
}