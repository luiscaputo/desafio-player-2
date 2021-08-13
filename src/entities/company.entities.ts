import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";

@Entity("company")
class Company{
  @PrimaryColumn()
    readonly id: number;
  @Column()
    name: string;
  @Column()
    sector_id: number;
  @Column()
    industry_id: number;
  @Column()
    CNPJ: string;
  @Column()
    CNAE: string;
  @Column()
    titular_company: string;
  @CreateDateColumn()
    created_at: Date;
  @UpdateDateColumn()
    updated_at: Date;
}

export { Company }