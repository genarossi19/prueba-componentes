import { json } from '@tanstack/react-start'
import { createAPIFileRoute } from '@tanstack/react-start/api'

export const APIRoute = createAPIFileRoute('/api/locations')({
  GET: ({ request, params }) => {
    return json( [
        {
          id: '1',
          name: 'Supermercado Central',
          address: 'Av. Rivadavia 1234, Buenos Aires',
          hasAlert : true
        },
        {
          id: '2',
          name: 'Farmacia San Martín',
          address: 'Calle San Martín 567, Córdoba',
          hasAlert : false


        },
        {
          id: '3',
          name: 'Restaurante El Gourmet',
          address: 'Av. Libertador 890, Mendoza',
          hasAlert : false

        },
      ])
  },
})
