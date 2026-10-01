import {pool} from "../config/db.js"

export const userModel = {
    create: async (nome, email) => {
        const [result] = await pool.query(
            "INSERT INTO usuarios (nome, email) VALUES (?, ?)",
            [nome, email]
        );
        return result.insertId;
    },

    findAll: async () => {
        const [rows] = await pool.query("SELECT * FROM usuarios");
        return rows;
    },

    findById: async (id) => {
        const [rows] = await pool.query("SELECT * FROM usuarios WHERE id = ?", [id]);
        return rows[0];
    },

    update: async (id, nome, email) => {
        const [result] = await pool.query(
            "UPDATE usuarios SET nome = ?, email = ? WHERE id = ?",
            [nome, email, id]
        );
        return result.affectedRows;
    },

    delete: async (id) => {
        const [rows] = await pool.query("DELETE FROM usuarios WHERE id = ?", [id]);
        return result.affectedRows;
    },
};