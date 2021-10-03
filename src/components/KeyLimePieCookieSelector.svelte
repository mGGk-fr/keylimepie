<style lang="scss">
  .key-lime-pie-cookie-selector {
    @extend %box-shadow;
    background-color: $dialog-background;
    font-family: sans-serif;
    border-radius: 0.5em;
    padding: 1em;
    width: 80vw;
    position: relative;

    &__header-title {
      font-weight: bold;
      text-align: center;
    }

    &__close {
      position: absolute;
      top: 1em;
      right: 1em;
      border: 0;
      border-radius: 50%;
      width: 2em;
      height: 2em;
      font-weight: bold;
      cursor: pointer;
    }

    &__categories {
      list-style: none;
      text-align: left;
      padding: 0;
      margin: 0;
      display: flex;
      gap: 1em;
    }
  }
</style>

<script lang="ts">
  import { onMount } from 'svelte';

  import type Service from '../types/Service';
  import Core from '../class/Core';
  import Status from '../enum/Status';

  import KeyLimePieService from './KeyLimePieService.svelte';
  import KeyLimePieButton from './KeyLimePieButton.svelte';

  const { lang, status } = Core;

  let activeServices: Array<Service> = [];

  function refreshServiceList(category: string): void {
    activeServices = Core.registredServicesValues.filter((service: Service) => {
      return service.type === category;
    });
  }

  function close() {
    Core.checkForReload();
    status.set(Status.ICON);
  }

  onMount(() => {
    refreshServiceList(Core.categories[0]);
  });
</script>

<div class="key-lime-pie-cookie-selector">
  <button class="key-lime-pie-cookie-selector__close" on:click={close}>X</button>
  <div class="key-lime-pie-cookie-selector__header">
    <p class="key-lime-pie-cookie-selector__header-title">{lang.dialog.header}</p>
    <p>
      {lang.dialog.description}
    </p>
    <div class="key-lime-pie-cookie-selector__selector">
      <ul class="key-lime-pie-cookie-selector__categories">
        {#each Core.categories as category}
          <li class="key-lime-pie-cookie-selector__category">
            <KeyLimePieButton on:click={() => refreshServiceList(category)}>
              {lang.categories[category]}
            </KeyLimePieButton>
          </li>
        {/each}
      </ul>
      <div class="key-lime-pie-cookie-selector__services">
        {#each activeServices as service}
          <KeyLimePieService {service} />
        {/each}
      </div>
    </div>
  </div>
</div>
