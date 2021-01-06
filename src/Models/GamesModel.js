/**
 * @desc Utilidades
 */
import Requests from "../Utils/Requests";

/**
 * @desc Modelo de ordenes
 */

class GamesModel {
  /**
   * @desc Solicitamos las ordenes.
   *
   * @param { Number } version
   * @param { String } store
   * @param { String } token
   *
   * @return { Promise }
   */
  static async getSummonerData( summonerName ) {
    try {
      // Requester
      const request = new Requests();

      // Respuesta
      return await request.get(`http://localhost:3001/lol/summoners/${summonerName}`);
      
    } catch (error) {
      
      console.log(error);

      return false;
    }
  }
}
export default GamesModel;
