<template>
  <div class="portal">
    <iframe src="https://iscleaner.github.io/" frameborder="0"></iframe>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.portal {
  width: 100%;
  height: auto;
  position: relative;
  iframe {
    width: 100%;
    height: 500px;
    position: absolute;
    top: -20px;
  }
}
</style>
