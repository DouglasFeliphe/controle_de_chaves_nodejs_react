import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('keys', table => {
        table.integer('number').notNullable().primary()
        table.integer('name').notNullable().unique()
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('keys')
}





