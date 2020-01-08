<template>
  <b-card>{{ info }}</b-card>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
