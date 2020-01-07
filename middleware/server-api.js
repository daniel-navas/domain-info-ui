export default {
  async get(url) {
    const resp = await fetch(`http://localhost:3333/${url}`)
    if (!resp.ok) {
      throw await resp.json()
    } else {
      return resp.json()
    }
  },
  async getAll() {
    const resp = await fetch(`http://localhost:3333/history`)
    if (!resp.ok) {
      throw await resp.json()
    } else {
      return resp.json()
    }
  }
}
