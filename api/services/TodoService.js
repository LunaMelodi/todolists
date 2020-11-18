import db from "../db/models";

class TodoService {
  static async addTodo(newTodo) {
    console.log("in TodoService.addTodo()");
    try {
      return await db.Todos.create(newTodo);
    } catch (error) {
      throw error;
    }
  }

  static async getTodos(listId) {
    try {
      console.log("in TodoService.getTodos()");

      console.log("listId :>> ", listId);

      let listWithTodos = await db.Lists.findByPk(listId, {
        include: [
          {
            model: db.Todos,
            attributes: ["id", "title", "note", "isCompleted"],
          },
        ],
      });
      console.log("listWithTodos :>> ", listWithTodos);

      let simplifiedTodos = listWithTodos.dataValues.Todos.map((todo) => {
        return todo.dataValues;
      });
      console.log("simplifiedTodos :>> ", simplifiedTodos);

      let simplifiedListWithTodos = {
        listId: listId,
        name: listWithTodos.dataValues.name,
        todos: simplifiedTodos,
      };
      console.log("simplifiedListWithTodos :>> ", simplifiedListWithTodos);

      return simplifiedListWithTodos;
      //return await listWithTodos.get().todos;
    } catch (error) {
      console.log(error);
    }
  }

  static async updateTodo(todoId, updateTodo) {
    try {
      console.log("todoId :>> ", todoId);

      const todoToUpdate = await db.Todos.findOne({
        where: { id: Number(todoId) },
      });

      if (todoToUpdate) {
        await db.Todos.update(updateTodo, { where: { id: Number(todoId) } });

        return updateTodo;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async deleteTodo(id) {
    try {
      const todoToDelete = await db.Todos.findOne({
        where: { id: Number(id) },
      });

      if (todoToDelete) {
        const deletedTodo = await db.Todos.destroy({
          where: { id: Number(id) },
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
