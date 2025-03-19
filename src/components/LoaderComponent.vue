```vue
<template>
  <teleport to="body">
    <div
      v-if="show"
      class="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
      <div
        class="w-12 h-12 border-4 border-gray-200 border-t-emerald-700 rounded-full animate-spin"></div>
    </div>
  </teleport>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});
</script>
```
