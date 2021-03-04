import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('reservations', table => {
        table.integer('id').notNullable().primary()
        table.string('key_name').notNullable()
        table.integer('key_number').notNullable()
        table.string('user_name').notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('returned_at').defaultTo(knex.fn.now())
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('reservations')
}

