import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class users1629068387101 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true
                    },
                    {
                        name: "username",
                        type: "varchar(250)",
                        isNullable: false
                    },
                    {
                        name: "email",
                        type: "varchar(250)"
                    },
                    {
                        name: "password",
                        type: "varchar(20)"
                    },
                    {
                        name: "created_at",
                        type: "datetime",
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
        await queryRunner.dropTable("users");
    }
}
