<!-- 
  Como no componente de tabela, aqui também poderíamos
  implementar uma paginação ou um lazy loading tambem.
-->
<template>
  <div class="w-full">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
      <div
        v-for="post in data"
        :key="post.id"
        class="bg-neutral-200 hover:bg-neutral-100 transition-all rounded-lg shadow-md border border-neutral-200 hover:shadow-lg duration-300 overflow-hidden px-4 py-8">
        <div class="grid grid-cols-1 p-4 gap-3">
          <div class="grid grid-cols-1 gap-1">
            <p class="text-neutral-800 text-base font-semibold">
              {{ post.title }}
            </p>
          </div>
          <hr class="border-neutral-300" />
          <div class="grid grid-cols-1 gap-1">
            <p class="text-neutral-600 text-base break-words">
              {{ post.body }}
            </p>
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
