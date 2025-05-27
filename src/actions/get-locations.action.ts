import { baseURLApi } from '~/routes/api/baseurl.api';
import { Locations } from '../types/location'

//Movimos la logica de negocio para obtener los usuarios a una accion para que sea mas facil obtener despues y no este flotando en todos los archivos

export const getLocationsAxios = async (): Promise<Locations> => {


    const {data} = await baseURLApi.get<Locations>('locations')
    return data;
  }

  export const getLocationById = async (id: string): Promise<Locations> => {
    const {data} = await baseURLApi.get<Locations>(`locations/${id}`)
    return data;
  }