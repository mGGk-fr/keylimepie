<style lang="scss">
  .key-lime-pie-cookie-selector {
    background-color: $dialog-background;
    font-family: sans-serif;
    border-radius: 0.5em;
    padding: 1em;
    width: 80vw;

    &__header-title {
      font-weight: bold;
    }
  }
</style>

<script lang="ts">
  import Core from '../class/Core';
  import KeyLimePieService from './KeyLimePieService.svelte';
  const { lang, services } = Core;
</script>

<div class="key-lime-pie-cookie-selector">
  <div class="key-lime-pie-cookie-selector__header">
    <p class="key-lime-pie-cookie-selector__header-title">{$lang.dialog.header}</p>
    <p>
      {$lang.dialog.description}
    </p>
    <div class="key-lime-pie-cookie-selector__services">
      {#each Object.values($services) as service}
        <KeyLimePieService {service} />
      {/each}
    </div>
  </div>
</div>
