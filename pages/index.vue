<template>
  <b-container>
    <h1 class="my-5 text-center">Domain Info</h1>
    <b-card no-body class="w-75 mx-auto mb-5">
      <b-tabs card>
        <b-tab title="Search hostname" active class="p-5">
          <host-search />
        </b-tab>
        <b-tab title="History" class="p-5">
          <host-history />
        </b-tab>
      </b-tabs>
    </b-card>
  </b-container>
</template>

<script>
import HostSearch from '../components/HostSearch'
import HostHistory from '../components/HostHistory'

export default {
  components: {
    HostSearch,
    HostHistory
  }
}
</script>
