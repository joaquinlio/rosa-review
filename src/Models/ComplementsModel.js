/**
 * @desc Utilidades
 */
import Requests from "../Utils/Requests";

/**
 * @desc Modelo de paises
 */

class ComplementsModel {
  /**
   * @desc Solicitamos los paises
   * @return { Promise }
   */
  static async getCountrys() {
    try {
      // Requester
      const request = new Requests();

      // Respuesta
      return await request.get(`http://localhost:3001/countrys`);
      
    } catch (error) {
      
      console.log(error);

      return false;
    }
  }
}
export default ComplementsModel;
