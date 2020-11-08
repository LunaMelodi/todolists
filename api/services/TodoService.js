import db from '../db/models';

class TodoService {

  static async addTodo(newTodo) {
    try {
      return await db.Todo.create(newTodo);
    } catch (error) {
      throw error;
    }
  }

  static async getAllTodos() {
    try {
      return await db.Todo.findAll();
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
      const theTodo = await db.Todo.findOne({
        where: { id: Number(id) }
      });

      return theTodo;
    } catch (error) {
      throw error;
    }
  }

  static async updateTodo(id, updateTodo) {
    try {
      const todoToUpdate = await db.Todo.findOne({
        where: { id: Number(id) }
      });

      if (todoToUpdate) {
        await db.Todo.update(updateTodo, { where: { id: Number(id) } });

        return updateTodo;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async deleteTodo(id) {
    try {
      const todoToDelete = await db.Todo.findOne({ where: { id: Number(id) } });

      if (todoToDelete) {
        const deletedTodo = await db.Todo.destroy({
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