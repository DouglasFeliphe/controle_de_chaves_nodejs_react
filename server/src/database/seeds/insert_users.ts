import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        {
            registration_number: 1000000001,
            name: 'foo',
            class: 'tecnólogo em sistemas para internet',
            grade: '2° período',
            shift: 'matutino'
        },
        {
            registration_number: 2000000001,
            name: 'bar',
            class: 'tecnólogo em eventos',
            grade: '4° período',
            shift: 'vespertino'
        },
        {
            registration_number: 3000000001,
            name: 'baz',
            class: 'licenciatura em dança',
            grade: '1° período',
            shift: 'noturno'
        }
    ]);
};
