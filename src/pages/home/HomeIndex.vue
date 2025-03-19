<template>
  <div class="text-sm text-center text-stone-500 border-b border-stone-300">
    <ul class="flex flex-wrap">
      <li class="me-2">
        <button
          @click="toggleTab"
          :class="[
            'inline-block p-4 border-b-2 rounded-t-lg',
            activeTab
              ? 'text-stone-900 border-stone-900'
              : 'border-transparent hover:text-stone-600 hover:border-stone-300',
          ]">
          Tabela
        </button>
      </li>
      <li class="me-2">
        <button
          @click="toggleTab"
          :class="[
            'inline-block p-4 border-b-2 rounded-t-lg',
            !activeTab
              ? 'text-stone-900 border-stone-900'
              : 'border-transparent hover:text-stone-600 hover:border-stone-300',
          ]">
          Cards
        </button>
      </li>
    </ul>
  </div>

  <div class="mt-6 py-6">
    <div v-if="postsData">
      <TableComponent :data="postsData" v-if="activeTab" />
      <cardGroup :data="postsData" v-else />
    </div>
    <div v-else class="border border-neutral-300 p-12 text-center rounded">
      <p v-if="isLoading">Carregando...</p>
      <p v-else>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          width="40px"
          viewBox="0 -960 960 960"
          fill="#404040"
          class="m-auto mb-6">
          <path
            d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
        </svg>
        Não conseguimos encontrar novos Posts, volte mais tarde.
      </p>
    </div>
  </div>

  <LoaderComponent :show="isLoading" />
</template>

<script setup>
import TableComponent from "./components/TableComponent.vue";
import cardGroup from "./components/cardGroup.vue";
import LoaderComponent from "@/components/LoaderComponent.vue";

import { ref, onMounted } from "vue";

import { isLoading, getAllPosts } from "@/service/postService.js";

const activeTab = ref(true);
const postsData = ref({});

const toggleTab = () => {
  activeTab.value = !activeTab.value;
};

onMounted(async () => {
  let response = await getAllPosts();
  postsData.value = response;
});
</script>
