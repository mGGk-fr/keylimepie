<style lang="scss">
  .key-lime-pie-service {
    &__name {
      font-weight: bold;
      margin-bottom: 0;
    }

    &__actions {
      margin-top: 1em;
      display: flex;
      gap: 1em;

      :global(.key-lime-pie-button) {
        flex-basis: 50%;
      }
    }
  }
</style>

<script lang="ts">
  import type Service from '../types/Service';
  import KeyLimePieButton from './KeyLimePieButton.svelte';
  import Core from '../class/Core';
  import CookieManager from '../utils/CookieManager';

  const { lang } = Core;

  export let service: Service;

  function allowService() {
    CookieManager.allowService(service.key);
    Core.invokeService(service.key);
  }

  function denyService() {
    CookieManager.denyService(service.key);
  }
</script>

<div class="key-lime-pie-service">
  <p class="key-lime-pie-service__name">{service.name}</p>
  <a class="key-lime-pie-service__link" target="_blank" href={service.uri}>
    {$lang.dialog.policy}
  </a>
  <div class="key-lime-pie-service__actions">
    <KeyLimePieButton on:click={allowService}>{$lang.dialog.allow}</KeyLimePieButton>
    <KeyLimePieButton on:click={denyService}>{$lang.dialog.deny}</KeyLimePieButton>
  </div>
</div>
