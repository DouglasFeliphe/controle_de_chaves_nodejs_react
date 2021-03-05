import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("table_name").del();

    // Inserts seed entries
    await knex("table_name").insert([
        { key_name: "lab01", key_number: 1, user_name: 'foo' },
        { key_name: "lab02", key_number: 2, user_name: 'bar' },
        { key_name: "lab03", key_number: 2, user_name: 'baz' }
    ]);
};
