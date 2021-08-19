/**
 * @desc Utilidades
 */
 import Requests from "../Utils/Requests";

 /**
  * @desc Modelo de emails
  */
 
 class QuestionModel {
   /**
    * @desc Lista las preguntas
    *
    * @return { Promise }
    */
   static async getQuestions() {
     try {

       // Requester
       const request = new Requests();
             
       // Respuesta
       return await request.get(`https://backend.nicolasaugustolio.com.ar/questions`);
       
     } catch (error) {
       
       console.log(error);
 
       return false;
     }
   }
 }
 export default QuestionModel;
 