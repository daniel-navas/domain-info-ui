<template>
  <b-container>
    <h1 class="my-5 text-center">Domain Info</h1>
    <b-card no-body class="mx-5">
      <b-tabs card>
        <b-tab title="Search hostname" active class="p-5">
          <b-form inline class="d-flex justify-content-center">
            <b-form-input
              v-model="hostname"
              size="lg"
              placeholder="Hostname"
              class="mr-2"
            ></b-form-input>
            <b-button @click="get" size="lg" variant="info">Search</b-button>
          </b-form>
          <info-card
            v-if="info !== null"
            :hostname="hostname"
            :info="info"
          ></info-card>
          <!-- <div>{{ loading }}</div> -->
        </b-tab>
        <b-tab title="History">
          <b-card-text>Tab contents 2</b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </b-container>
</template>

<script>
import serverApi from '../middleware/server-api'
import InfoCard from '../components/InfoCard'
export default {
  components: {
    InfoCard
  },
  data: () => ({
    hostname: '',
    info: null,
    loading: ''
  }),
  methods: {
    async get() {
      this.info = null
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

<style></style>
