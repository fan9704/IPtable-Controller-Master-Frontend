<script setup lang="ts">
import { listMachines, deleteMachineById } from '@/api/machine';
import type { Machine } from '@/interfaces/machine';
import { onMounted, ref } from 'vue';
import router from '@/router';
import swal from 'sweetalert2';

const formShow = ref<boolean>(false);

const machines = ref<Machine[]>([]);

const selectId = ref<string>('');

const goEdit = (id: string) => {
  router.push(`/machine/${id}`);
}

const setId = async (id: string) => {
  selectId.value = id;
  formShow.value = true;
}
const closeForm = () => {
  formShow.value = false;
  selectId.value = '';
}
const findAllMachines = async () => {
  const res = await listMachines();
  machines.value = res.content;
};
const deleteById = async (id: string) => {
  await deleteMachineById(id);
  swal.fire('刪除成功', "網路規則刪除成功", "success");
  listMachines();
};

onMounted(() => {
  findAllMachines();
});
</script>
<template>

  <h1 id="panel-title">叢集 NAT 節點管理</h1>

  <v-row>
    <v-col cols="6" xs=6 sm="6" md="4" lg="2">編號</v-col>
    <v-col cols="6" xs=6 sm="6" md="4" lg="2">主機位置</v-col>
    <v-col cols="6" xs=6 sm="6" md="4" lg="2">後端位置</v-col>
    <v-col cols="6" xs=6 sm="6" md="4" lg="2">前端位置</v-col>
    <v-col cols="6" xs=6 sm="6" md="4" lg="3">備註</v-col>
    <v-col cols="6" xs=6 sm="6" md="4" lg="1">操作</v-col>
  </v-row>
  <v-row v-for="(machine, index) in machines" key:machine class="network-record">
    <v-col cols="6" xs=6 sm="6" md="4" lg="2">{{ machine.id }}</v-col>
    <v-col cols="6" xs=6 sm="6" md="4" lg="2">{{ machine.hostIp }}</v-col>
    <v-col cols="6" xs=6 sm="6" md="4" lg="2">{{ machine.backendUrl }}</v-col>
    <v-col cols="6" xs=6 sm="6" md="4" lg="2">{{ machine.frontendUrl }}</v-col>
    <v-col cols="6" xs=6 sm="6" md="4" lg="3">{{ machine.note }}</v-col>
    <v-col cols="6" xs=6 sm="6" md="4" lg="1">
      <v-btn @click="goEdit(machine.id)">
        <v-icon>
          mdi-puzzle-edit
        </v-icon>
      </v-btn>
      <v-btn @click="deleteById(machine.id)">
        <v-icon>
          mdi-delete
        </v-icon>
      </v-btn>
    </v-col>

  </v-row>
</template>

<style>
.v-col {
  text-align: center;
}

.v-theme--dark .network-record {
  border: 1px solid white;

}

.v-theme--light .network-record {
  border: 1px solid black
}

#panel-title {
  text-align: center;
  margin: 20px;
  font-size: larger;
}

#form-close-btn {
  width: 100%;
  text-align: center;
  background-color: #ffffff3a;
}

#form-container {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #0000008a;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  overflow: auto;
}

#create-btn {
  background-color: #1b7fd1;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  overflow: auto;
  bottom: 10%;
  right: 5%;
}
</style>
