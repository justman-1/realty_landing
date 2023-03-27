export default async function () {
  // Функция для преобразования градусов в радианы
  function deg2rad(deg) {
    return deg * (Math.PI / 180)
  }

  function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const R = 6371 // Радиус Земли в километрах
    const dLat = deg2rad(lat2 - lat1)
    const dLon = deg2rad(lon2 - lon1)
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    const d = R * c
    return d
  }

  function checkLocation(position) {
    const userLat = position.coords.latitude // Широта пользователя
    const userLon = position.coords.longitude // Долгота пользователя

    const murmanskLat = 68.965107 // Широта Мурманской области
    const murmanskLon = 33.074541 // Долгота Мурманской области
    const murmanskDistance = getDistanceFromLatLonInKm(
      userLat,
      userLon,
      murmanskLat,
      murmanskLon
    ) // Расстояние до Мурманской области

    const yaroslavlLat = 57.626387 // Широта города Ярославля
    const yaroslavlLon = 39.893371 // Долгота города Ярославля
    const yaroslavlDistance = getDistanceFromLatLonInKm(
      userLat,
      userLon,
      yaroslavlLat,
      yaroslavlLon
    ) // Расстояние до Ярославля

    if (murmanskDistance <= 100) {
      return [userLat, userLon, "Мурманская область"]
    } else if (yaroslavlDistance <= 100) {
      return [userLat, userLon, "Ярославль"]
    } else {
      return murmanskDistance < yaroslavlDistance
        ? [userLat, userLon, "Мурманская область"]
        : [userLat, userLon, "Ярославль"]
    }
  }

  // Проверяем, поддерживает ли браузер геолокацию, и если да, запрашиваем её
  if (navigator.geolocation) {
    return await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = checkLocation(position)
          resolve(location)
        },
        () => {
          return [null, null, null]
        }
      )
    })
  } else {
    return [null, null, null]
  }
}
