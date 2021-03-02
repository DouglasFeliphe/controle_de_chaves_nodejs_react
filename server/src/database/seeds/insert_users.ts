import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        {
            registration_number: 1000000001,
            name: 'foo',
            course_name: 'tecnólogo em sistemas para internet',
            degree: '2° período',
            shift: 'matutino'
        },
        {
            registration_number: 2000000001,
            name: 'bar',
            course_name: 'tecnólogo em eventos',
            degree: '4° período',
            shift: 'vespertino'
        },
        {
            registration_number: 3000000001,
            name: 'baz',
            course_name: 'licenciatura em dança',
            degree: '1° período',
            shift: 'noturno'
        }
    ]);
};
