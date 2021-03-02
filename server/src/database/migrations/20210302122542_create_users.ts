import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', table => {
        table.integer('registration_number').primary()
        table.string('name').notNullable()
        table.string('course_name').notNullable()
        table.string('degree').notNullable()
        table.enum('shift', ['matutino', 'vespertino', 'noturno']).notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users')
}

