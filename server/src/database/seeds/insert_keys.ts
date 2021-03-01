import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("keys").del();

    // Inserts seed entries
    await knex("keys").insert([
        { number: 1, name: "lab1" },
        { number: 2, name: "lab2" },
        { number: 3, name: "lab3" }
    ]);
};
