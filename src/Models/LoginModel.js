/**
 * @desc Utilidades
 */
import Requests from "../Utils/Requests";

/**
 * @desc Modelo de ordenes
 */

class LoginModel {

  /**
   * @desc Logeo del usuario
   *
   * @param { String } email
   * @param { String } password
   *
   * @return { Promise }
   */
  static async Login( email, password ) {
    try {
      // Requester
      const request = new Requests();
      // Respuesta
      return await request.post(`http://localhost:3001/login`, { email, password });
      
    } catch (error) {
      
      console.log(error);

      return false;
    }
  }

  /**
   * @desc Registra al usuario
   *
   * @param { String } email
   * @param { String } password
   *
   * @return { Promise }
   */
  static async Register(data) {
    try {
      // Requester
      const request = new Requests();
      // Respuesta
      return await request.post(`http://localhost:3001/users`, data);
      
    } catch (error) {
      
      console.log(error);

      return false;
    }
  }

  static async LoginWithGoogle(data) {
    try {
      // Requester
      const request = new Requests();
      // Respuesta
      return await request.post(`http://localhost:3001/login/google`, data);
      
    } catch (error) {
      
      console.log(error);

      return false;
    }
  }
  
}
export default LoginModel;
