import ListService from '../services/ListService';
import ResGen from '../utils/ResGeneration';

const resgen = new ResGen();

class ListController {

  static async addList(req, res) {
    if (!req.body.name) {
      console.log('req.body :>> ', req.body);
      return resgen.setError(400, 'Please provide complete details').send(res);   
    }
    const newList = req.body;
    try {
      const createdList = await ListService.addList(newList, req.userRecord.id);
      return resgen.setSuccess(201, 'List Added!', createdList).send(res);

    } catch (error) {
      return resgen.setError(400, error.message).send(res);      
    }
  }

  static async getAllLists(req, res) {
    try {
      console.log("in ListController.getAllLists()");
      const allLists = await ListService.getAllLists();
      if (allLists.length > 0) {
        resgen.setSuccess(200, 'Lists retrieved', allLists);
      } else {
        resgen.setSuccess(200, 'No list found');
      }
      return resgen.send(res);

    } catch (error) {
      console.log(error);
      return resgen.setError(400, error).send(res);      
    }
  }

  static async getAllListsByUserId(req, res) {
    try {
      console.log("in ListController.getAllListsByUserId()");
      console.log('req.userRecord.id :>> ', req.userRecord.id);
      const allLists = await ListService.getAllListsByUserId(req.userRecord.id);
      if (allLists.length > 0) {
        resgen.setSuccess(200, 'Lists retrieved', allLists);
      } else {
        resgen.setSuccess(200, 'No list found');
      }
      return resgen.send(res);

    } catch (error) {
      console.log(error);
      return resgen.setError(400, error).send(res);      
    }
  }

  static async updateList(req, res) {
    const alteredList = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      return resgen.setError(400, 'Please input a valid numeric value').send(res);      
    }
    try {
      const updateList = await ListService.updateList(id, req.userRecord.id, alteredList);
      if (!updateList) {
        resgen.setError(404, `Cannot find list with the id: ${id}`);
      } else {
        resgen.setSuccess(200, 'List updated', updateList);
      }
      return resgen.send(res);

    } catch (error) {
      return resgen.setError(404, error).send(res);
    }
  }

  static async getOneList(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      return resgen.setError(400, 'Please input a valid numeric value').send(res);
    }

    try {
      const theList = await ListService.getOneList(id);

      if (!theList) {
        resgen.setError(404, `Cannot find list with the id ${id}`);
      } else {
        resgen.setSuccess(200, 'Found List', theList);
      }
      return resgen.send(res);

    } catch (error) {
      return resgen.setError(404, error).send(res);    
    }
  }

  static async deleteList(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      return resgen.setError(400, 'Please provide a numeric value').send(res);
    }
    //WRONG ID BEING PASSED IN. USER DOES NOT HAVE ACCESS TO LIST WITH ID 1
    try {
      const listToDelete = await ListService.deleteList(id, req.userRecord.id);

      if (listToDelete) {
        resgen.setSuccess(200, 'List deleted');
      } else {
        resgen.setError(404, `List with the id ${id} cannot be found`);
      }
      return resgen.send(res);
      
    } catch (error) {
      return resgen.setError(400, error).send(res);      
    }
  }
}

export default ListController;