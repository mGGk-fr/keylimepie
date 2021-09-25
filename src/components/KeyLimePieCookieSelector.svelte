<style lang="scss">
  .key-lime-pie-cookie-selector {
    @extend %box-shadow;
    background-color: $dialog-background;
    font-family: sans-serif;
    border-radius: 0.5em;
    padding: 1em;
    width: 80vw;

    &__header-title {
      font-weight: bold;
      text-align: center;
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
  import type Service from '../types/Service';
  import Core from '../class/Core';
  import KeyLimePieService from './KeyLimePieService.svelte';
  import KeyLimePieButton from './KeyLimePieButton.svelte';
  const { lang } = Core;

  let activeServices: Array<Service> = [];

  function refreshServiceList(category: string): void {
    activeServices = Object.values(Core.registredServices).filter((service: Service) => {
      return service.type === category;
    });
  }

  refreshServiceList(Core.categories[0]);
</script>

<div class="key-lime-pie-cookie-selector">
  <div class="key-lime-pie-cookie-selector__header">
    <p class="key-lime-pie-cookie-selector__header-title">{$lang.dialog.header}</p>
    <p>
      {$lang.dialog.description}
    </p>
    <div class="key-lime-pie-cookie-selector__selector">
      <ul class="key-lime-pie-cookie-selector__categories">
        {#each Core.categories as category}
          <li class="key-lime-pie-cookie-selector__category">
            <KeyLimePieButton on:click={() => refreshServiceList(category)}>
              {$lang.categories[category]}
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
