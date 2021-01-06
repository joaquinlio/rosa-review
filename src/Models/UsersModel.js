/**
 * @desc Utilidades
 */
import Requests from "../Utils/Requests";

/**
 * @desc Modelo de usuario
 */

class UsersModel {
 
  /**
   * @desc Actualiza los datos del perfil   
   *
   * @return { Promise }
   */
  static async updateProfile(data) {
    try {
      // Requester
      const request = new Requests();
      // Respuesta
      return await request.post(`http://localhost:3001/users/profile`, data);
      
    } catch (error) {
      
      console.log(error);

      return false;
    }
  }
}
export default UsersModel;
