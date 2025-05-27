export type Location = {
  id: number
  name: string
  address: string
  hasAlert: boolean
  refrigerators: Refrigerator[]
  alerts: Alert[]
  externalTemp: number | null
  externalTempDate: string | null
}

// La respuesta de la API es un array de Location directamente
export type Locations = Location[]




export type Refrigerator = {
  id: number
  detail: string | null
  maxTemp: number
  minTemp: number
  enableAlert: boolean
  refrigeratorType: string
  lastTemp: number | null
  lastTempDate: string | null
  alerts: Alert[]
}

export type Alert = {
  id: number
  deviceId: number | null
  refrigeratorId: number | null
  date: string | null
  alertReason: string
  alertState: string
}


