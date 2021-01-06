/**
 * @desc Dependencias
 */
import { Component } from "react";
import { addStorage, getStorage} from '../../Utils/SessionStorage'
import GamesModel from "../../Models/GamesModel";
import ComplementsModel from "../../Models/ComplementsModel";
import UsersModel from "../../Models/UsersModel";


class ProfileUi extends Component {
  /**
   * @desc Constructor
   *
   * @param { Object } props
   *
   * @return { void }
   */
  constructor(props) {
    super(props);
    
    this.state = {
      // Datos del pefil
      profile:{
        name: {
          value: '',
          empty: false,
          invalid: false
        },
        category: {
          value: 'Player',
          empty: false,
          invalid: false
        },
        birthdate: {
          value: null,
          empty: false,
          invalid: false
        },
        gender: {
          value: '',
          empty: false,
          invalid: false
        },
        phone: {
          value: '',
          empty: false,
          invalid: false
        },
        country: {
          value: '',
          empty: false,
          invalid: false
        },
        
        /* avatar: {
          value: '',
          empty: false,
          invalid: false
        }  */
      },
      // Listado de paises
      countrys: null,
      // Set de errores
      errorSet : {       
        error:false,
        message: ""
      }
    }
  }

  async componentDidMount(){

    // Seteamos los valores del storage al formulario
    this.setData();

    // Obtenemos los paises
    this.getCountrys();

  }

  /**
   * @desc Cambia el estado del perfil
   * @param index campo del perfil a modificar
   * @param value valor del campo
   */
  changeProfileData = ( index, value) => {

    let { profile } = this.state;

    profile[index].value = value;
    profile[index].empty = false;

    this.setState({
      profile,
      errorSet : {       
        error:false,
        message: ""
      }
    })
    
  }

  /**
   * @desc obtiene los datos del invocador
   * @param summonerName nombre del invocador
   */
  getSummonerData = async ( summonerName ) => {
 
    try {

      // Alias del estado
      let { lol } = this.state

      const res = await GamesModel.getSummonerData( summonerName );

      return res.body;
      
    } catch (error) {

      console.log(error);

      return false;
    }
  };

  /**
   * @desc obtiene los paises
   */
  getCountrys = async () => {
 
    try {
      
      const res = await ComplementsModel.getCountrys();

      // Seteamos el estado 
      this.setState({ countrys: res.body })

      return true;
      
    } catch (error) {

      console.log(error);

      return false;
    }
  };

  /**
   * @desc Actualiza los datos del perfil
   */
  updateProfile = async () => {

    try {
      
      // Verificamos el formulario
      await this.verify();
      
      if( this.state.errorSet.error )
        return false;

      const res = await UsersModel.updateProfile(this.getData());
      
      return true;
      
    } catch (error) {

      console.log(error);

      return false;
    }
  };

  /**
    * @desc Verifica los datos del formulario
    * 
    * @return { Boolean }
  */
  verify(){

      try{

          // Alias del estado
          const { profile = {} } = this.state;
          
          // Limpiamos los errores
          Object.keys( profile ).forEach(( key ) => {

              profile[key].empty = false;
              profile[key].invalid = false;
              profile[key].error = false;

          });

          // Verificamos los campos
          Object.keys( profile ).forEach(( key ) => {

            if(profile[key].value === '' || profile[key].value === null ){

              // Indicamos que el nombre esta vacio.
              profile[key].empty = true;

              // Actualizamos el estado
              this.setState({ profile, errorSet: { error: true, message: "Error en el formulario"} });
              
            } 

          });

          return true;

      }catch( error ){

          // Logueamos el error
          console.log( error );

          return false;

      }

  }

  /**
   * @desc Obtiene los datos del formulario
   * 
   * @return { Object }
   */
  getData(){

      try{

          const { 
              
              // Datos del formulario
              profile = {}, 
              
          } = this.state;

          const user = getStorage("user",true);

          // Resultado
          let result = {
              "userId": user.id,            
              "name": profile.name.value,
              "category": profile.category.value,
              "birthdate": profile.birthdate.value,
              "gender": profile.gender.value,
              "phone": profile.phone.value,
              "country": profile.country.value,
              //"avatar": profile.avatar.value,              
          };         

          return result;


      }catch( error ){

          // Logueamos el error
          console.log( error );

          return false;

      }

  }
/**
   * @desc Obtiene los datos del storage y los setea en el formulario
   * 
   * @return { Object }
   */
  setData(){

    try{

        const { 
            
            // Datos del formulario
            profile = {}, 
            
        } = this.state;

        const user = getStorage("user",true);

        Object.keys( user ).forEach(( key ) => {

          if( user[key] && profile[key] ){
            profile[key].value = user[key];
          }

        });

        this.setState({ 
          profile
        })

        return true;


    }catch( error ){

        // Logueamos el error
        console.log( error );

        return false;

    }

}

}
export default ProfileUi;
