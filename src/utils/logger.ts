// utils/logger.ts

// Función para imprimir logs con prefijo y color (sólo en desarrollo)
export function debugLog(label: string, data: any) {
  if (process.env.NODE_ENV === 'development') {
    // Códigos de colores ANSI para consola
    const color = '\x1b[36m'  // Cyan
    const reset = '\x1b[0m'

    console.log(`${color}[DEBUG] ${label}:${reset}`, data)
  }
}
