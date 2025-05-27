import React from 'react'
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '../ui/card'
import { MapPin, AlertTriangle } from 'lucide-react'
import  { Location } from '@/types/location'


            

const LocationCard = ({location, onClick}: {location: Location, onClick?: () => void}) => {
  return (
    <Card onClick={onClick} className="cursor-pointer hover:shadow-md transition-shadow ">
        <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-cyan-600" />
                {location.name}
                {location.hasAlert && <AlertTriangle className="h-4 w-4 ml-2 text-amber-500" />}
            </CardTitle>
            <CardDescription>{location.address}</CardDescription>
        </CardHeader>
        <CardContent>
     
        </CardContent>
    </Card>
  )
}

export default LocationCard