import TodoService from '../services/TodoService';
import ResGen from '../utils/ResGeneration';

const resgen = new ResGen();

class TodoController {
  static async getAllTodos(req, res) {
    try {
      const allTodos = await TodoService.getAllTodos();
      if (allTodos.length > 0) {
        resgen.setSuccess(200, 'Todos retrieved', allTodos);
      } else {
        resgen.setSuccess(200, 'No todo found');
      }
      return resgen.send(res);
    } catch (error) {
      return resgen.setError(400, error).send(res);      
    }
  }

  static async addTodo(req, res) {
    if (!req.body.content) {
      console.log(req.body)
      return resgen.setError(400, 'Please provide complete details').send(res);      
    }
    const newTodo = req.body;
    try {
      const createdTodo = await TodoService.addTodo(newTodo);
      return resgen.setSuccess(201, 'Todo Added!', createdTodo).send(res);      
    } catch (error) {
      return resgen.setError(400, error.message).send(res);      
    }
  }

  static async updatedTodo(req, res) {
    const alteredTodo = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      return resgen.setError(400, 'Please input a valid numeric value').send(res);      
    }
    try {
      const updateTodo = await TodoService.updateTodo(id, alteredTodo);
      if (!updateTodo) {
        resgen.setError(404, `Cannot find todo with the id: ${id}`);
      } else {
        resgen.setSuccess(200, 'Todo updated', updateTodo);
      }
      return resgen.send(res);
    } catch (error) {
      return resgen.setError(404, error).send(res);
    }
  }

  static async getOneTodo(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      return resgen.setError(400, 'Please input a valid numeric value').send(res);
    }

    try {
      const theTodo = await TodoService.getOneTodo(id);

      if (!theTodo) {
        resgen.setError(404, `Cannot find todo with the id ${id}`);
      } else {
        resgen.setSuccess(200, 'Found Todo', theTodo);
      }
      return resgen.send(res);
    } catch (error) {
      return resgen.setError(404, error).send(res);    
    }
  }

  static async deleteTodo(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      return resgen.setError(400, 'Please provide a numeric value').send(res);      
    }

    try {
      const todoToDelete = await TodoService.deleteTodo(id);

      if (todoToDelete) {
        resgen.setSuccess(200, 'Todo deleted');
      } else {
        resgen.setError(404, `Todo with the id ${id} cannot be found`);
      }
      return resgen.send(res);
    } catch (error) {
      return resgen.setError(400, error).send(res);      
    }
  }
}

export default TodoController;