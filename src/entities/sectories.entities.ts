import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";

@Entity("sectories")
class Sectories{
  @PrimaryColumn()
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

export { Sectories }