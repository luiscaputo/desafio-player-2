import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class sector1628753599723 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "sector",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true
                    },
                    {
                        name: "name",
                        type: "vachar(250)"
                    },
                    {
                        name: "description",
                        type: "text"
                    },
                    {
                        name: "created_at",
                        type:"datetime",
                        default: "current_timestamp"
                    },                    
                    {
                        name: "updated_at",
                        type: "datetime",
                        default: "current_timestamp"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("sector");
    }

}
