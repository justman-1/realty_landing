const Dadata = require("dadata-suggestions")
const dadata = new Dadata("3e3288cfdaafb044893d11bd6247f2ce763b3e19")

export default async function (query) {
  await dadata
    .address("address", { query, count: 1 }, apiKey)
    .then((response) => {
      const street = response.suggestions[0].data.street
      console.log(`Улица: ${street}`)
      return street
    })
    .catch((error) => {
      console.log(`Ошибка: ${error.message}`)
      return "null"
    })
}
