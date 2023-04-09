<template>
    <svg class="icon" :width="width" :height="height">
      <use :xlink:href="`${sprite}#${name}`" />
    </svg>
</template>
  
  <script>
  import sprite from './TechIcon.svg';
  
  export default {
    name: 'TechIcon',
    props: {
      name: { type: String, required: true },
      width: { type: Number, default: 24 },
      height: { type: Number, default: 24 },
    },
    data() {
      return { sprite };
    },
  };
  </script>