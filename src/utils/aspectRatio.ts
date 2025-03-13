/**
 * Calcula el padding-bottom basado en un aspect ratio dado
 * @param aspectRatio - Relación de aspecto en formato "ancho/alto"
 * @returns Valor de padding-bottom como string con porcentaje
 */
export const calculatePaddingFromAspectRatio = (aspectRatio = "16/9"): string => {
  const [width, height] = aspectRatio.split("/").map(Number)
  if (!width || !height) return "56.25%" // Default 16:9

  return `${(height / width) * 100}%`
}

