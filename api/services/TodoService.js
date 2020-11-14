import db from '../db/models';

class TodoService {

  static async addTodo(newTodo) {
    try {
      return await db.Todos.create(newTodo);
    } catch (error) {
      throw error;
    }
  }

  static async getTodos(listId) {
    try {
      console.log("in TodoService.getTodos()");
      
      console.log('listId :>> ', listId);

      var listWithTodos = await db.Lists.findByPk(listId/* , { 
        include: db.Todos
      } */);

      console.log('listWithTodos :>> ', listWithTodos);

      return;
      //return await listWithTodos.get().todos;
    } catch (error) {
      console.log(error)
    }
  }

  static async updateTodo(todoId, updateTodo) {
    try {
      const todoToUpdate = await db.Todos.findOne({
        where: { id: Number(todoId) }
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