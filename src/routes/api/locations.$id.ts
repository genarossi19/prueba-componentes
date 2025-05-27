import { json } from '@tanstack/react-start'
import { createAPIFileRoute } from '@tanstack/react-start/api'

const locationsById = {
  1: [
  {
    "id": 1,
    "name": "Monitor 1",
    "refrigerators": [
      {
        "id": 6,
        "detail": "Heladera nuevo mod",
        "maxTemp": 20,
        "minTemp": 2,
        "enableAlert": true,
        "refrigeratorType": "Heladera",
        "lastTemp": null,
        "lastTempDate": null,
        "alerts": [
          {
            "id": 2,
            "deviceId": null,
            "refrigeratorId": 6,
            "date": null,
            "alertReason": "TEMP_MAX_SUPERADA",
            "alertState": "ACTIVA"
          }
        ]
      },
      {
        "id": 4,
        "detail": "Heladera neuva",
        "maxTemp": 15.4,
        "minTemp": -2,
        "enableAlert": true,
        "refrigeratorType": "Heladera",
        "lastTemp": null,
        "lastTempDate": null,
        "alerts": []
      },
      {
        "id": 3,
        "detail": null,
        "maxTemp": 7,
        "minTemp": 2,
        "enableAlert": true,
        "refrigeratorType": "Freezer",
        "lastTemp": null,
        "lastTempDate": null,
        "alerts": []
      },
      {
        "id": 2,
        "detail": null,
        "maxTemp": 8,
        "minTemp": 2,
        "enableAlert": true,
        "refrigeratorType": "Heladera",
        "lastTemp": null,
        "lastTempDate": null,
        "alerts": []
      },
      {
        "id": 1,
        "detail": "Heladera Admin",
        "maxTemp": 7,
        "minTemp": 2,
        "enableAlert": false,
        "refrigeratorType": "Heladera",
        "lastTemp": null,
        "lastTempDate": null,
        "alerts": []
      }
    ],
    "alerts": [],
    "externalTemp": null,
    "externalTempDate": null
  },
  {
    "id": 2,
    "name": "Monitor 2",
    "refrigerators": [],
    "alerts": [],
    "externalTemp": null,
    "externalTempDate": null
  },
  {
    "id": 3,
    "name": "Monitor 3",
    "refrigerators": [
      {
        "id": 7,
        "detail": "string",
        "maxTemp": 5,
        "minTemp": 4,
        "enableAlert": true,
        "refrigeratorType": "Heladera",
        "lastTemp": null,
        "lastTempDate": null,
        "alerts": []
      },
      {
        "id": 5,
        "detail": "Heladera Modificada2",
        "maxTemp": 20,
        "minTemp": 19,
        "enableAlert": false,
        "refrigeratorType": "Heladera",
        "lastTemp": null,
        "lastTempDate": null,
        "alerts": []
      }
    ],
    "alerts": [
      {
        "id": 1,
        "deviceId": 3,
        "refrigeratorId": null,
        "date": null,
        "alertReason": "FALLA_REFRIGERADOR",
        "alertState": "ACTIVA"
      }
    ],
    "externalTemp": null,
    "externalTempDate": null
  },
  {
    "id": 5,
    "name": "monitor Post-Update",
    "refrigerators": [],
    "alerts": [],
    "externalTemp": null,
    "externalTempDate": null
  }
],
  2: [
    {
      id: 2,
      name: "Monitor 2A",
      refrigerators: [
        {
          id: 101,
          detail: "Freezer Central",
          maxTemp: -10,
          minTemp: -25,
          enableAlert: true,
          refrigeratorType: "Freezer",
          lastTemp: -18,
          lastTempDate: "2025-05-27T08:30:00Z",
          alerts: [],
        }
      ],
      alerts: [],
      externalTemp: 19,
      externalTempDate: "2025-05-27T08:30:00Z",
    }
  ],
  3: [
    {
      id: 3,
      name: "Monitor 3A",
      refrigerators: [],
      alerts: [
        {
          id: 999,
          deviceId: 3,
          refrigeratorId: null,
          date: "2025-05-27T07:50:00Z",
          alertReason: "FALLA_SENSOR",
          alertState: "ACTIVA",
        }
      ],
      externalTemp: null,
      externalTempDate: null,
    }
  ]
}

export const APIRoute = createAPIFileRoute('/api/locations/$id')({
  GET: ({ params }) => {
    const id = Number(params.id)
    const monitors = locationsById[id]

    if (!monitors) {
      return json({ error: 'Location not found' }, { status: 404 })
    }

    return json(monitors)
  },
})
