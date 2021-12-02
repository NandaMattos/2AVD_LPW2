import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCopaMundo1619825371362 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "faculdade",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "disciplina",
                        type: "varchar"
                    },
                    {
                        name: "cargahoraria",
                        type: "varchar"
                    },
                    {
                        name: "professor",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("faculdade")
    }

}
