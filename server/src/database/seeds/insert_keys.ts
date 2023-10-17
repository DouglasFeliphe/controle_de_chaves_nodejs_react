import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('keys').del();

  // Inserts seed entries
  await knex('keys').insert([
    { number: 1, name: 'lab1' },
    { number: 2, name: 'lab2' },
    { number: 3, name: 'lab3' },
    { number: 4, name: 'lab4' },
    { number: 5, name: 'lab5' },
    { number: 6, name: 'lab6' },
  ]);
}
