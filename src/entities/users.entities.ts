import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("users")
class Users{
  @PrimaryGeneratedColumn()
    readonly id: number;
  @Column()
    username: string;
  @Column()
    email: string;
  @Column()
    password: string;
  @CreateDateColumn()
    created_at: Date;
  @UpdateDateColumn()
    updated_at: Date;
}

export { Users }