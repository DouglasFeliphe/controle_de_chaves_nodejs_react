import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("reservations").del();

    // Inserts seed entries
    await knex("reservations").insert([
        { key_name: "lab01", key_number: 1, user_name: 'foo', user_registration_number: 1000000001 },
        { key_name: "lab02", key_number: 2, user_name: 'bar', user_registration_number: 2000000001 },
        { key_name: "lab03", key_number: 3, user_name: 'baz', user_registration_number: 3000000001 }
    ]);
};
