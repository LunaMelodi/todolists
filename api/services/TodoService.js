import db from '../db/models';

class TodoService {

  static async addTodo(newTodo) {
    try {
      return await db.Todos.create(newTodo);
    } catch (error) {
      throw error;
    }
  }

  static async getAllTodos() {
    try {
      return await db.Todos.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async getAllTodosByListId(listId) {
    try {
      var listWithTodos = await db.List.findByPk(listId, { 
        include: ['todos']
      });
      return await listWithTodos.get().todos;
    } catch (error) {
      console.log(error)
    }
  }

  static async getOneTodo(id) {
    try {
      const theTodo = await db.Todos.findOne({
        where: { id: Number(id) }
      });

      return theTodo;
    } catch (error) {
      throw error;
    }
  }

  static async updateTodo(id, updateTodo) {
    try {
      const todoToUpdate = await db.Todos.findOne({
        where: { id: Number(id) }
      });

      if (todoToUpdate) {
        await db.Todos.update(updateTodo, { where: { id: Number(id) } });

        return updateTodo;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async deleteTodo(id) {
    try {
      const todoToDelete = await db.Todos.findOne({ where: { id: Number(id) } });

      if (todoToDelete) {
        const deletedTodo = await db.Todos.destroy({
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