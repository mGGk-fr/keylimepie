<style lang="scss">
  .key-lime-pie-service {
    @include breakpoint($breakpoint-desktop) {
      display: flex;
      justify-content: space-between;
    }

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
  import { get } from 'svelte/store';
  import type Service from '../types/Service';
  import KeyLimePieButton from './KeyLimePieButton.svelte';
  import Core from '../class/Core';
  import CookieManager from '../utils/CookieManager';
  import ServiceAcceptance from '../enum/ServiceAcceptance';

  const { lang, servicesStatus } = Core;

  export let service: Service;

  function allowService() {
    servicesStatus.set({
      ...get(servicesStatus),
      [service.key]: ServiceAcceptance.ALLOWED
    });
    CookieManager.allowService(service.key);
    Core.invokeService(service.key);
  }

  function denyService() {
    servicesStatus.set({
      ...get(servicesStatus),
      [service.key]: ServiceAcceptance.DENIED
    });
    CookieManager.denyService(service.key);
  }
</script>

<div class="key-lime-pie-service">
  <div class="key-lime-pie-service__descriptor">
    <p class="key-lime-pie-service__name">{service.name}</p>
    <a class="key-lime-pie-service__link" target="_blank" href={service.uri}>
      {lang.dialog.policy}
    </a>
  </div>
  <div class="key-lime-pie-service__actions">
    <KeyLimePieButton
      green={$servicesStatus[service.key] === ServiceAcceptance.ALLOWED}
      on:click={allowService}>{lang.dialog.allow}</KeyLimePieButton
    >
    <KeyLimePieButton
      red={$servicesStatus[service.key] === ServiceAcceptance.DENIED}
      on:click={denyService}>{lang.dialog.deny}</KeyLimePieButton
    >
  </div>
</div>
