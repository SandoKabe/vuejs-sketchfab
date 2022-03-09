<template>
    <div>
      <div class="header">
        <span v-if="open"
          @Click="open = !open">
          &#x25B2;
          Collapse
        </span>
        <span v-if="!open"
          @Click="open = !open">
          &#x25BC;
          Expand
        </span>
        <!-- Toggleable -->
        <slot v-if="open">
        </slot>
      </div>
    </div>
</template>

<script>

export default {
  name: 'CollapsibleSection',
  data() {
    return { open: true };
  },
};
</script>

<style scoped>
.header {
    background-color: #bbb;
    padding: 3px;
    cursor: pointer;
}
</style>
