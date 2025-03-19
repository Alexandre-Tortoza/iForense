<!-- 
  Uma implementação que poderia ser feita aqui
  seria a de uma paginação, ou um lazy loading
  para carregar os posts aos poucos, evitando
  que a página fique muito pesada.
-->
<template>
  <div class="w-full">
    <div class="hidden md:block">
      <table class="w-full border-collapse">
        <thead>
          <tr class="text-neutral-500">
            <th class="px-4 py-3 text-left font-semibold">ID</th>
            <th class="px-4 py-3 text-left font-semibold">Título</th>
            <th class="px-4 py-3 text-left font-semibold">Conteúdo</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="post in data"
            :key="post.id"
            class="border-b border-neutral-200 last:border-none hover:bg-neutral-100 transition-colors duration-300">
            <td class="px-4 py-3 font-bold text-neutral-900">#{{ post.id }}</td>
            <td class="px-4 py-3 text-neutral-800">{{ post.title }}</td>
            <td class="px-4 py-3 text-neutral-800">{{ post.body }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="block md:hidden">
      <div
        v-for="post in data"
        :key="post.id"
        class="border-b border-neutral-200 last:border-none p-4 hover:bg-neutral-100 transition-colors duration-300">
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-2">
            <span class="font-semibold text-neutral-800">ID:</span>
            <span class="font-bold text-neutral-900">{{ post.id }}</span>
          </div>
          <div class="flex flex-col">
            <span class="font-semibold text-neutral-800">Título:</span>
            <span class="text-neutral-700">{{ post.title }}</span>
          </div>
          <div class="flex flex-col">
            <span class="font-semibold text-neutral-800">Conteúdo:</span>
            <span class="text-neutral-700">{{ post.body }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: Object,
});
</script>
