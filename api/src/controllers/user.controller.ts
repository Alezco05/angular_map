import knex from '../database/database';

export async function getHome(req:any, res:any){
    res.render('index.ejs');
}

export async function getUser(){
    knex("usuario").then((data:any) => console.log(data));
}

