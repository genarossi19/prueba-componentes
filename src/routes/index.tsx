import { createFileRoute } from '@tanstack/react-router'
import queryLocations from '../hooks/queryLocations'
import LocationCard from '~/components/Locations/LocationCard'
import { debugLog } from '../utils/logger'
export const Route = createFileRoute('/')({
  component: RouteComponent,


})

function RouteComponent() {


  const { locationsQuery } = queryLocations()

  debugLog('useQuery object (locationsQuery)', locationsQuery)
  debugLog('fetched data (locationsQuery.data)', locationsQuery.data)

  const locations = locationsQuery.data ?? []
  debugLog('parsed locations array', locations)

  const firstName = locations[0]?.name
  debugLog('first location name', firstName)

  return <div className="container">

{locationsQuery.isLoading && <p>Loading...</p>}
{locationsQuery.isError && <p>Error: {locationsQuery.error.message}</p>}
{locationsQuery.data && (
  <ul>
    {locations.map((location) => (
      <LocationCard key={location.id} location={location} onClick={() => {alert(`You clicked on ${location.name}`)}}   />
    ))}
  </ul>
)}
  </div>
}
