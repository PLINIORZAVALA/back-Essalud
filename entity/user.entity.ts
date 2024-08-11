
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity("user")
export class userEntity {
    @PrimaryGeneratedColumn()
    IdUser: number;
    
    @Column()
    FirstName: string;

    @Column()
    LastName: string;

    @Column()
    Password: string;

    @Column()
    Dni: string;

    @Column()
    EmployeeCode: string;

    @Column()
    Shift: string;

    @Column()
    PhoneNumber: string;

    @Column()
    Mail: string;

    @Column()
    Rol: number;
    
    @Column()
    Date:Date;

    @Column()
    IndActive:Boolean;
}