<script setup lang="ts">
import MachineEdit from "@/components/machine/edit.vue";
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <v-container>
    <MachineEdit :id=props.id />
  </v-container>
</template>
