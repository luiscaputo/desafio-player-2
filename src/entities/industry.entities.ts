import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity("industry")
class Industry{
  @PrimaryGeneratedColumn()
    readonly id: number;
  @Column()
    name: string;
  @Column()
    description: string;
  @CreateDateColumn()
    created_at: Date;
  @UpdateDateColumn()
    updated_at: Date;
}

export { Industry }