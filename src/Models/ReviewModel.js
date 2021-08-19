/**
 * @desc Utilidades
 */
 import Requests from "../Utils/Requests";

 /**
  * @desc Modelo de emails
  */
 
 class ReviewModel {
   /**
    * @desc Envia la reseña 
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
       
       // Respuesta
       return await request.post(`https://backend.nicolasaugustolio.com.ar/reviews/add`, data );
       
     } catch (error) {
       
       console.log(error);
 
       return false;
     }
   }
 }
 export default ReviewModel;
 