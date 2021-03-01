exports.up = function (knex) {
    return knex.schema.createTable('keys', function (table) {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.timestamps()
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('keys')
}