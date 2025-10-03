const db = require('../database/db');

const getAllUsers = async () => {
    const [rows] = await db.query('SELECT * FROM users');
    return rows;
};

const getUserById = async (id) => {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
};

const createUser = async (user) => {
    const {nome, email} = user;
    const [result] = await db.query('INSERT INTO users (nome, email) VALUES (?,?)', [nome, email]);
    return {id: result.insertid, ...user};
};

const deleteUser = async (id) =>{
    await db.query('DELETE FROM users WHERE id = ?', [id]);
    return{msg:'Usúario deletado'};
};

module.exports = {getAllUsers, getUserById, createUser, deleteUser};