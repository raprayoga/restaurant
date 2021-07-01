import API_ENDPOINT from '../globals/api-endpoint'

class RestaurantSource {
  static async list() {
    const response = await fetch(API_ENDPOINT.LIST)
    const responseJson = await response.json()
    return responseJson.restaurants
  }

  static async search() {
    const response = await fetch(API_ENDPOINT.SEARCH(keyword))
    const responseJson = await response.json()
    return responseJson.restaurants
  }

  static async detail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id))
    return response.json()
  }
}

export default RestaurantSource
