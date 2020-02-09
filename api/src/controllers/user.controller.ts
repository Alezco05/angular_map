import knex from '../database/database';


export async function getUser(){
    knex("usuario").then((data:any) => console.log(data));
}