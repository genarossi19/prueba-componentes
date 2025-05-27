import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/location/$locationId')({
  component: RouteComponent,
  loader: async ({ context, params: { locationId } }) => {
    const response = await fetch(`http://localhost:3001/location/${locationId}`)
    const data = await response.json()
    return data
  },
  notFoundComponent: () => {
      return <div>User not found</div>
    },
})

function RouteComponent() {
  const params = Route.useParams()
  const { locationId } = params

  return <div>Hello param:{locationId} </div>
}

