import { userModel } from "../models/usuarioModel.js";

export const userController = {
  createUser: async (req, res) => {
    try {
      const { nome, email } = req.body;
      const newId = await userModel.create(nome, email);
      res.status(201).json({ id: newId, nome, email });
    } catch (error) {
      res.status(500).json({ message: "Erro ao criar utilizador", error: error.message });
    }
  },

  getUsers: async (req, res) => {
    try {
      const users = await userModel.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Erro ao listar utilizadores", error: error.message });
    }
  },

  getUserById: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await userModel.findById(id);

      if (!user) {
        return res.status(404).json({ message: "Utilizador não encontrado" });
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Erro ao procurar utilizador", error: error.message });
    }
  },

  updateUser: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, email } = req.body;
      await userModel.update(id, nome, email);
      res.status(200).json({ message: "Utilizador atualizado com sucesso" });
    } catch (error) {
      res.status(500).json({ message: "Erro ao atualizar utilizador", error: error.message });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;
      await userModel.delete(id);
      res.status(200).json({ message: "Utilizador eliminado com sucesso" });
    } catch (error) {
      res.status(500).json({ message: "Erro ao eliminar utilizador", error: error.message });
    }
  },
};