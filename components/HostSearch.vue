<template>
  <div class="d-flex flex-column align-items-center">
    <b-form @submit="get" inline>
      <b-form-input
        v-model="hostname"
        size="lg"
        placeholder="Hostname"
        class="mr-2"
      ></b-form-input>
      <b-button type="submit" size="lg" variant="info">Search</b-button>
    </b-form>
    <info-card
      v-if="info !== null"
      :hostname="hostname"
      :info="info"
    ></info-card>
    <b-spinner
      v-if="loading"
      type="grow"
      label="Loading"
      variant="info"
      class="mt-5"
    ></b-spinner>
    <b-alert :show="error" variant="danger" class="mt-5"
      >Error searching domain info</b-alert
    >
  </div>
</template>

<script>
import serverApi from '../middleware/server-api'
import InfoCard from './InfoCard'

export default {
  components: { InfoCard },

  data() {
    return {
      info: null,
      hostname: '',
      loading: false,
      error: false
    }
  },

  methods: {
    async get(evt) {
      evt.preventDefault()
      this.info = null
      this.error = false
      if (this.hostname !== '') {
        const infoResponse = serverApi.get(this.hostname)
        this.loading = true
        try {
          this.info = await infoResponse
        } catch (e) {
          this.error = true
        }
        this.loading = false
      }
    }
  }
}
</script>
