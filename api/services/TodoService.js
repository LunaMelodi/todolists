import db from '../db/models';

class TodoService {
  static async addTodo(newTodo) {
    console.log('in TodoService.addTodo()');

    return db.Todos.create(newTodo);
  }

  static async getTodos(listId) {
    console.log('in TodoService.getTodos()');

    console.log('listId :>> ', listId);

    const listWithTodos = await db.Lists.findByPk(listId, {
      include: [{
        model: db.Todos,
        attributes: ['id', 'title', 'note', 'isCompleted'],
      }],
    });
    console.log('listWithTodos :>> ', listWithTodos);

    const simplifiedTodos = listWithTodos.dataValues.Todos.map((todo) => todo.dataValues);
    console.log('simplifiedTodos :>> ', simplifiedTodos);

    const simplifiedListWithTodos = {
      listId,
      name: listWithTodos.dataValues.name,
      todos: simplifiedTodos,
    };
    console.log('simplifiedListWithTodos :>> ', simplifiedListWithTodos);

    return simplifiedListWithTodos;
    // return await listWithTodos.get().todos;
  }

  static async updateTodo(todoId, updateTodo) {
    const todoToUpdate = await db.Todos.findOne({
      where: { id: Number(todoId) },
    });

    if (todoToUpdate) {
      await db.Todos.update(updateTodo, { where: { id: Number(todoId) } });

      return updateTodo;
    }
    return null;
  }

  static async deleteTodo(id) {
    const todoToDelete = await db.Todos.findOne({ where: { id: Number(id) } });

    if (todoToDelete) {
      const deletedTodo = await db.Todos.destroy({
        where: { id: Number(id) },
      });
      return deletedTodo;
    }
    return null;
  }
}

export default TodoService;
