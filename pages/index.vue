<template>
  <b-container>
    <b-row>
      <b-col>
        <b-form inline>
          <b-form-input
            v-model="hostname"
            size="lg"
            placeholder="Hostname"
            class="mr-2"
          ></b-form-input>
          <b-button @click="get" size="lg" variant="primary">Search</b-button>
        </b-form>
        <div>{{ loading }}</div>
        <div>{{ info }}</div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import serverApi from '../middleware/server-api'
export default {
  components: {},
  data: () => ({
    hostname: '',
    info: '',
    loading: ''
  }),
  function() {},
  methods: {
    async get() {
      this.info = ''
      if (this.hostname !== '') {
        const infoResponse = serverApi.get(this.hostname)
        this.loading = 'Loading ...'
        this.info = await infoResponse
        this.loading = ''
      }
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
