<script setup>
  import {useI18n} from "vue-i18n";
  import {ref} from "vue";

  const {t} = useI18n();
  const drawer = ref(false);
  const toggleDrawer = () => {drawer.value = !drawer.value;}

  const items =
      [
        { label: 'option.home', to: '/home'},
        { label: 'option.about', to: '/about'},
      ];
</script>

<template>

</template>

<style scoped>

</style>