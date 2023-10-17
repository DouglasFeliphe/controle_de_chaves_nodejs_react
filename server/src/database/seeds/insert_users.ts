import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').del();

  // Inserts seed entries
  await knex('users').insert([
    {
      image: 'https://i.pravatar.cc',
      registration_number: 1000000001,
      name: 'foo',
      course_name: 'tecnólogo em sistemas para internet',
      degree: '2° período',
      shift: 'matutino',
    },
    {
      image: 'https://i.pravatar.cc',
      registration_number: 2000000001,
      name: 'bar',
      course_name: 'tecnólogo em eventos',
      degree: '4° período',
      shift: 'vespertino',
    },
    {
      image: 'https://i.pravatar.cc',
      registration_number: 3000000001,
      name: 'baz',
      course_name: 'licenciatura em dança',
      degree: '1° período',
      shift: 'noturno',
    },
    {
      image: 'https://i.pravatar.cc',
      registration_number: 345321456654,
      name: 'baz',
      course_name: 'licenciatura em dança',
      degree: '6° período',
      shift: 'noturno',
    },
    {
      image: 'https://i.pravatar.cc',
      registration_number: 234321456654,
      name: 'baz',
      course_name: 'licenciatura em dança',
      degree: '4° período',
      shift: 'noturno',
    },
    {
      image: 'https://i.pravatar.cc',
      registration_number: 321321456654,
      name: 'baz',
      course_name: 'licenciatura em dança',
      degree: '3° período',
      shift: 'noturno',
    },
    {
      image: 'https://i.pravatar.cc',
      registration_number: 765321456654,
      name: 'baz',
      course_name: 'tecnólogo em eventos',
      degree: '3° período',
      shift: 'noturno',
    },
    {
      image: 'https://i.pravatar.cc',
      registration_number: 1365321456654,
      name: 'john',
      course_name: 'tecnólogo em eventos',
      degree: '3° período',
      shift: 'noturno',
    },
    {
      image: 'https://i.pravatar.cc',
      registration_number: 3365321456654,
      name: 'Deo',
      course_name: 'tecnólogo em eventos',
      degree: '3° período',
      shift: 'noturno',
    },
  ]);
}
