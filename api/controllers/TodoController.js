import TodoService from '../server/services/TodoService';
import Util from '../utils/Utils';

const util = new Util();

class TodoController {
  static async getAllTodos(req, res) {
    try {
      const allTodos = await TodoService.getAllTodos();
      if (allTodos.length > 0) {
        util.setSuccess(200, 'Todos retrieved', allTodos);
      } else {
        util.setSuccess(200, 'No todo found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addTodo(req, res) {
    if (!req.body.content) {
      console.log(req.body)
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newTodo = req.body;
    try {
      const createdTodo = await TodoService.addTodo(newTodo);
      util.setSuccess(201, 'Todo Added!', createdTodo);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedTodo(req, res) {
    const alteredTodo = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateTodo = await TodoService.updateTodo(id, alteredTodo);
      if (!updateTodo) {
        util.setError(404, `Cannot find todo with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Todo updated', updateTodo);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getATodo(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theTodo = await TodoService.getATodo(id);

      if (!theTodo) {
        util.setError(404, `Cannot find todo with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Todo', theTodo);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteTodo(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const todoToDelete = await TodoService.deleteTodo(id);

      if (todoToDelete) {
        util.setSuccess(200, 'Todo deleted');
      } else {
        util.setError(404, `Todo with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default TodoController;