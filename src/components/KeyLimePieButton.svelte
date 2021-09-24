<style lang="scss">
  .key-lime-pie-button {
    border: none;
    padding: 0.5em 1em;
    border-radius: 0.2em;
    background-color: $button-color;
    color: #ffffff;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: darken($button-color, 10);
    }

    &--red {
      background-color: $button-color-deny;

      &:hover {
        background-color: darken($button-color-deny, 10);
      }
    }

    &--green {
      background-color: $button-color-allow;

      &:hover {
        background-color: darken($button-color-allow, 10);
      }
    }
  }
</style>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let red = false;
  export let green = false;

  const dispatch = createEventDispatcher();

  function emitClick() {
    dispatch('click');
  }
</script>

<button
  class="key-lime-pie-button"
  class:key-lime-pie-button--red={red}
  class:key-lime-pie-button--green={green}
  on:click={emitClick}
>
  <slot />
</button>
