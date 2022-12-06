<script>
export default {
  name: "ConfirmAnswer",
  props: {
    onClick: String,
  },
  emits: ["onClick"],
}
</script>
<template>
    <button
        :value="onClick"
        @click.prevent="$emit('onClick', $event.target.value)"
        class="bg-white hover:bg-blue-800 text-blue-900 font-semibold 
        hover:text-white py-2 px-4 border border-blue-700 hover:border-transparent rounded mr-3">
        Potvrdi
    </button>
</template>