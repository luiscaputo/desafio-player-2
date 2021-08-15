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
   
    constructor(){
     let sum = 6;
       for(let i=1; i <= 999999; i++){
         if(!this.id)
             sum += i;
            this.id = sum
       }
  }
}

export { Sectories }