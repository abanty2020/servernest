// src/users/domain/entities/user.entity.ts
export class User {
    constructor(
        public id: number,            
        public fullName: string | null, 
        public age: number | null,         
        public email: string | null,     
        public password: string,        
        public avatar: string | null,      
        public createdAt: Date | null,   
        public updatedAt: Date | null,    
        public state: boolean = true,     
    ) { }
}