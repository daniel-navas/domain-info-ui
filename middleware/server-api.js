const baseUrl = 'http://localhost:3333/'

export default {
  async get(url) {
    const resp = await fetch(`${baseUrl}${url}`)
    if (!resp.ok) {
      throw await resp.json()
    } else {
      return resp.json()
    }
  },

  async getAll() {
    const resp = await fetch(`${baseUrl}history`)
    if (!resp.ok) {
      throw await resp.json()
    } else {
      return resp.json()
    }
  }
}
