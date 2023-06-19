class API {
  constructor(domain) {
    this.domain = domain
  }
  async sendRequest(url = '/', params = {}) {
    let response = await fetch(url, params)
    try {
      response = await response.json()
    } catch (err) {
      response  = {
        results: []
      }
      console.log(err)
    }
    return response
  }
}

class Frozeneon extends API {
  constructor(domain){
    super(domain)
    this.options = {
      offsetMax: 5000,
      sizeMax: 250
    }
  }

  async getSearch(searchString, offset = 0, size = 10) {
    const query = {
      q: searchString,
      size: size < this.options.sizeMax ? size : this.options.sizeMax,
      from: offset < this.options.offsetMax ? offset : this.options.offsetMax
    }
    let url = new window.URLSearchParams(query)
    url = this.domain + 'search?' + url.toString()
    const response = await this.sendRequest(url)
    const maxTotal = this.options.offsetMax * size
    response.total =  response.total < maxTotal ? response.total : maxTotal
    return response
  }
}

export default new Frozeneon('https://api.npms.io/v2/')
