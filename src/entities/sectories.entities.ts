import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";

@Entity("sectories")
class Sectories{
  @PrimaryColumn()
    readonly id: 1;
  @Column()
    name: string;
  @Column()
    description: string;
  @CreateDateColumn()
    created_at: Date;
  @UpdateDateColumn()
    updated_at: Date;
   constructor(){
     if(!this.id){
       this.id = 1;
     }
   }
}

export { Sectories }