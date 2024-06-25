<script setup lang="ts">
import { getMachineById, patchMachineById } from '@/api/machine';
import type { Machine, MachinePatchDTO } from '@/interfaces/machine';
import { onUpdated, ref, toRaw } from 'vue';
import swal from 'sweetalert2';


const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});
const wait = ref<boolean>(false);
const machine = ref({
  id: '',
  hostIp: '',
  backendUrl: '',
  frontendUrl: '',
  note: '',
} as Machine);
const oldMachine = ref({
  id: '',
  hostIp: '',
  backendUrl: '',
  frontendUrl: '',
  note: '',
} as Machine);
const findMachineById = async (id: string) => {
  wait.value = true;
  const res = await getMachineById(id);
  wait.value = false;
  machine.value = res;
  oldMachine.value = res;
};
const resetForm = () => {
  machine.value = toRaw(oldMachine.value);
};
const submitForm = async () => {
  const formRecord = {
    hostIp: machine.value.hostIp,
    backendUrl: machine.value.backendUrl,
    frontendUrl: machine.value.frontendUrl,
    note: machine.value.note,
  } as MachinePatchDTO;
  const res = await patchMachineById(props.id, formRecord)
  machine.value = res;
  swal.fire("修改成功", "NAT 節點資料已經同步更新", "success")

};
onUpdated(() => {
  if (props.id != "") {
    findMachineById(props.id);
  }
});
</script>

<template>
  <v-form id="form">
    <v-row>
      <v-col cols="3">
        <v-text-field v-model="machine.hostIp" label="主機位置 IP"></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field v-model="machine.backendUrl" label="後端位置"></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field v-model="machine.frontendUrl" label="前端位置"></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field v-model="machine.note" label="備註"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-btn class="mt-4" color="success" block @click="submitForm" :disabled="wait">
          Submit
        </v-btn>

        <v-btn class="mt-4" color="error" block @click="resetForm" :disabled="wait">
          Reset Form
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>
<style>
#form {
  /* margin: 0% 5%; */
  width: 100%;
  padding: 2%;
  background-color: #ffffff5e;
  border-radius: 0px 0px 20px 20px;
}
</style>
