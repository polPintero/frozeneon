class API {
  constructor(domain) {
    this.domain = domain
  }
  async sendRequest(url = '/', params = {}) {
    let response = await fetch(url, params)
    try {
      response = await response.json()
    } catch (err) {
      console.log(err)
    }
    return response
  }
}

class Frozeneon extends API {
  async getSearch(searchString, offset = 0, size = 10) {
    const query = {
      q: searchString,
      size,
      from: offset
    }
    let url = new window.URLSearchParams(query)
    url = this.domain + 'search?' + url.toString()
    return await this.sendRequest(url)
  }
}

export default new Frozeneon('https://api.npms.io/v2/')
