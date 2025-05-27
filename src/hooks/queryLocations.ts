
import { Locations } from '../types/location'
import { useQuery } from '@tanstack/react-query'

import { getLocationsAxios } from '~/actions/get-locations.action';


export const locationsOptions = {
        queryKey: ['locations'],
        queryFn: getLocationsAxios,
        refetchOnWindowFocus: true,
         staleTime: 10000,
         retry: 3,
         retryDelay: 1000
        
      }

export default function queryLocations() {
    const  locationsQuery  = useQuery<Locations>(locationsOptions)
    

      
  return {locationsQuery}
}

