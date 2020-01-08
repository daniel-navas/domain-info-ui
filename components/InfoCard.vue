<template>
  <b-card :title="hostname" class="mx-5 mt-5">
    Hostname: {{ hostname }} Is Down: {{ info.is_down }}
    {{ info }}
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

<style></style>
