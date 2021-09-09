<style lang="scss">
  .key-lime-pie {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<script lang="ts">
  import KeyLimePieInfoBox from './KeyLimePieInfoBox.svelte'
  import Core from '../class/Core'
  import Status from '../enum/Status'
  import KeyLimePieCookieSelector from './KeyLimePieCookieSelector.svelte'

  const { status } = Core
</script>

<div class="key-lime-pie">
  {#if $status === Status.INITIAL_ASK}
    <KeyLimePieInfoBox />
  {/if}
  {#if $status === Status.COOKIES_SELECTOR}
    <KeyLimePieCookieSelector />
  {/if}
</div>
