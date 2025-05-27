
import { Locations } from '../types/location'
import { useQuery } from '@tanstack/react-query'

import { getLocationById } from '~/actions/get-locations.action';

const fetchLocationById = async (id: string) => {
  return getLocationById(id);
};

export const locationOptions = {
  queryKey: ['locations'],
  queryFn: fetchLocationById,
  refetchOnWindowFocus: true,
  staleTime: 10000,
  retry: 3,
  retryDelay: 1000
};

export default function queryLocations() {
    const  locationsQuery  = useQuery<Locations>(locationsOptions)

      
  return {locationsQuery}
}

