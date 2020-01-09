<template>
  <b-card no-body class="mx-5 mt-5 w-75">
    <template v-slot:header>
      <h5 class="mb-0 text-uppercase">{{ hostname }}</h5>
    </template>
    <strong class="ml-3 mt-3">Servers:</strong>
    <b-card
      v-for="server in info.servers"
      :key="server.address"
      no-body
      class="my-2 mx-3"
    >
      <b-list-group flush>
        <b-list-group-item
          ><strong>Address:</strong> {{ server.address }}</b-list-group-item
        >
        <b-list-group-item
          ><strong>SSL Grade:</strong> {{ server.ssl_grade }}</b-list-group-item
        >
        <b-list-group-item
          ><strong>Country:</strong> {{ server.country }}</b-list-group-item
        >
        <b-list-group-item
          ><strong>Owner:</strong> {{ server.owner }}</b-list-group-item
        >
      </b-list-group>
    </b-card>
    <b-list-group flush>
      <b-list-group-item
        ><strong>SSL Grade:</strong> {{ info.ssl_grade }}</b-list-group-item
      >
      <b-list-group-item
        ><strong>Logo:</strong> {{ info.logo }}</b-list-group-item
      >
      <b-list-group-item
        ><strong>Title:</strong> {{ info.title }}</b-list-group-item
      >
    </b-list-group>
  </b-card>
</template>

<script>
export default {
  props: {
    hostname: {
      type: String,
      required: true
    },
    info: {
      type: Object,
      required: true
    }
  }
}
</script>
