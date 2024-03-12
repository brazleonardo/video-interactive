export const darken = (hexColor: string, magnitude: number) => {
  hexColor = hexColor.replace(`#`, ``)
  if (hexColor.length === 6) {
    const decimalColor = parseInt(hexColor, 16)
    let r = (decimalColor >> 16) + magnitude
    r > 255 && (r = 255)
    r < 0 && (r = 0)
    let g = (decimalColor & 0x0000ff) + magnitude
    g > 255 && (g = 255)
    g < 0 && (g = 0)
    let b = ((decimalColor >> 8) & 0x00ff) + magnitude
    b > 255 && (b = 255)
    b < 0 && (b = 0)
    return `#${(g | (b << 8) | (r << 16)).toString(16)}`
  } else {
    return hexColor
  }
}

/**
 * Função que retorna o tempo em segundos
 * @method convertTimeToSeconds
 * @param {string} time recebe uma string no formato "00:00:00"
 */
export function convertTimeToSeconds(time: string) {
  return time
    ?.split(':')
    .reverse()
    .reduce((prev, curr, i) => prev + Number(curr) * 60 ** i, 0)
}

/**
 * Função que retorna o tempo formatado
 * @method formatTime
 * @param {string} time recebe o tempo
 * @param {auto} typeFormat recebe um número mínino
 */
export function formatTime(time: number, typeFormat: 'auto' | '' = '') {
  const hours = Math.floor(time / (60 * 60))
  const minutes = Math.floor(time / 60) % 60
  const seconds = Math.floor(time % 60)

  let labelHours = String(hours)
  let labelSeconds = String(seconds)
  let labelMinutes = String(minutes)

  if (hours < 10) {
    labelHours = `0${hours}`
  }

  if (minutes < 10) {
    labelMinutes = `0${minutes}`
  }
  if (seconds < 10) {
    labelSeconds = `0${seconds}`
  }

  if (typeFormat === 'auto') {
    return hours > 1
      ? `${labelHours}:${labelMinutes}:${labelSeconds}`
      : `${labelMinutes}:${labelSeconds}`
  }

  return `${labelHours}:${labelMinutes}:${labelSeconds}`
}
