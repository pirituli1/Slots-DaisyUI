<template>
  <div class="overflow-x-auto w-full">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Proyecto</th>
          <th>Tareas</th>
          <th>Avance</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr class="hover">
          <th>1</th>
          <td>Cy Ganderton</td>
          <td>Quality Control Specialist</td>
          <td>Blue</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- <input-modal :open="modalOpen" @close="modalOpen = false" @value="onNewValue($event)" /> Si se utiliza solo el argumento es inecesario mandarle el event -->
  <input-modal
    :open="modalOpen"
    @close="modalOpen = false"
    @value="onNewValue"
    placeholder="Ingrese el nombre del proyecto"
    title="Nuevo Proyecto"
    subtitle="Dale un nombre único a tu proyecto"
  />

  <custom-modal :open="customModalOpen">
    <template #header>
      <h1 class="text-3xl">Titulo del modal</h1>
    </template>

    <template #body>
      <p>cuerpo de mi custom modal</p>
    </template>

    <template #footer>
      <div class="flex justify-end">
        <div class="flex justify-end mt-5">
          <button @click="customModalOpen = false" class="btn mr-4">Close</button>
          <button class="btn btn-primary">Aceptar</button>
        </div>
      </div>
    </template>
  </custom-modal>

  <fab-button @click="modalOpen = true">
    <AddCircle />
  </fab-button>

  <fab-button @click="customModalOpen = true" position="bottom-left">
    <Modallcon />
  </fab-button>
</template>

<script lang="ts" setup>
import CustomModal from '@/modules/common/components/CustomModal.vue';
import FabButton from '@/modules/common/components/FabButton.vue';
import InputModal from '@/modules/common/components/InputModal.vue';
import AddCircle from '@/modules/common/icons/AddCircle.vue';
import Modallcon from '@/modules/common/icons/Modallcon.vue';

import { ref } from 'vue';

const modalOpen = ref(false);
const customModalOpen = ref(false);

const onNewValue = (projectName: string) => {
  console.log({
    projectName: projectName,
  });
};
</script>
