const express = require('express')

let tasks = [
    {id: 1, title:"Estudar Apis", done: false},
    {id:2, title: "Praticar Docker", done: true}
]








const getAll = ()  => tasks;

const getById = (id) => {
    const task = tasks.find(t => t.id === id)
    if(!task) throw {stastus: 404, message:"Tarefa não encotrada"}
    return task
}



module.exports = {getAll, getById}