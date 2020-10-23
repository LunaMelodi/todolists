import database from '../db/models';

class TodoService {
  static async getAllTodos() {
    try {
      return await database.Todo.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addTodo(newTodo) {
    try {
      return await database.Todo.create(newTodo);
    } catch (error) {
      throw error;
    }
  }

  static async updateTodo(id, updateTodo) {
    try {
      const todoToUpdate = await database.Todo.findOne({
        where: { id: Number(id) }
      });

      if (todoToUpdate) {
        await database.Todo.update(updateTodo, { where: { id: Number(id) } });

        return updateTodo;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getATodo(id) {
    try {
      const theTodo = await database.Todo.findOne({
        where: { id: Number(id) }
      });

      return theTodo;
    } catch (error) {
      throw error;
    }
  }

  static async deleteTodo(id) {
    try {
      const todoToDelete = await database.Todo.findOne({ where: { id: Number(id) } });

      if (todoToDelete) {
        const deletedTodo = await database.Todo.destroy({
          where: { id: Number(id) }
        });
        return deletedTodo;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default TodoService;