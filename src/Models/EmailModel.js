/**
 * @desc Utilidades
 */
import Requests from "../Utils/Requests";

/**
 * @desc Modelo de emails
 */

class EmailModel {
  /**
   * @desc enviamos el email.
   *
   * @param { Number } version
   * @param { String } store
   * @param { String } token
   *
   * @return { Promise }
   */
  static async sendReview( data ) {
    try {
      // Requester
      const request = new Requests();
      console.log(data)
      // Respuesta
      return await request.post(`https://rosa-review-mailer.vercel.app/send-email`, data );
      
    } catch (error) {
      
      console.log(error);

      return false;
    }
  }
}
export default EmailModel;
