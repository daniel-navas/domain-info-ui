<template>
  <div class="d-flex flex-column align-items-center">
    <b-button @click="loadHistory" size="lg" variant="info">Reload</b-button>
    <history-card
      v-for="domain in history"
      :key="domain.host"
      :hostname="domain.host"
      :info="domain"
    ></history-card>
    <b-spinner
      v-if="loading"
      type="grow"
      label="Loading"
      variant="info"
      class="mt-5"
    ></b-spinner>
    <b-alert :show="error" variant="danger" class="mt-5"
      >Error fetching history</b-alert
    >
  </div>
</template>
<script>
import serverApi from '../middleware/server-api'
import HistoryCard from './HistoryCard'

export default {
  components: { HistoryCard },

  data() {
    return {
      history: [],
      loading: false,
      error: false
    }
  },

  created() {
    this.loadHistory()
  },

  methods: {
    async loadHistory() {
      this.history = []
      this.error = false
      const historyResponse = serverApi.getAll()
      this.loading = true
      try {
        this.history = await historyResponse
      } catch (e) {
        this.error = true
      }
      this.loading = false
    }
  }
}
</script>
