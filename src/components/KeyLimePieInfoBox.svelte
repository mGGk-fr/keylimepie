<style lang="scss">
  .key-lime-pie-info {
    $block-selector: &;
    background-color: $dialog-background;
    padding: 1em;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.75);
    text-align: center;
    font-family: sans-serif;

    &--bottom-bar {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      animation: slideUp 0.5s;

      @include breakpoint($breakpoint-desktop) {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      #{$block-selector}__actions {
        @include breakpoint($breakpoint-desktop) {
          flex-direction: row;
          margin-left: 1.5em;
        }

        :global(.key-lime-pie-button) {
          width: 100%;
          margin-top: 0.5em;

          @include breakpoint($breakpoint-tablet) {
            margin-left: 0.5em;
          }

          @include breakpoint($breakpoint-desktop) {
            width: auto;
            margin-top: 0;
            margin-bottom: 0;
          }
        }
      }
    }

    &--dialog {
      width: 80vw;
      border-radius: 0.5em;
      animation: scaleUp 0.5s;

      @include breakpoint($breakpoint-desktop) {
        width: 50em;
      }

      #{$block-selector}__actions {
        @include breakpoint($breakpoint-desktop) {
          flex-direction: row;
          justify-content: center;
        }

        :global(.key-lime-pie-button) {
          margin-top: 1em;
          @include breakpoint($breakpoint-desktop) {
            margin-left: 0.5em;
            margin-right: 0.5em;
          }
        }
      }
    }

    &__actions {
      display: flex;
      flex-direction: column;
    }
  }

  @keyframes slideUp {
    0% {
      transform: translateY(100%);
    }

    100% {
      transform: translateY(0);
    }
  }

  @keyframes scaleUp {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }
</style>

<script lang="ts">
  import Core from '../class/Core'
  import KeyLimePieButton from './KeyLimePieButton.svelte'
  import KeyLimePieDialogMode from '../enum/DialogMode'
  import { lang } from '../store/config'
  import KeyLimePieState from '../enum/Status'

  const { mode, status } = Core

  function showSettings() {
    console.log('show')
      if (status) {
          status.set(KeyLimePieState.COOKIES_SELECTOR)
      }
  }
</script>

<div
  class="key-lime-pie-info"
  class:key-lime-pie-info--dialog={$mode === KeyLimePieDialogMode.DIALOG}
  class:key-lime-pie-info--bottom-bar={$mode === KeyLimePieDialogMode.BOTTOM_BAR}
>
  {$lang.thisWebsiteUseCookies}
  <div class="key-lime-pie-info__actions">
    <KeyLimePieButton>
      {$lang.acceptAll}
    </KeyLimePieButton>
    <KeyLimePieButton>
      {$lang.denyAll}
    </KeyLimePieButton>
    <KeyLimePieButton on:click={showSettings}>
      {$lang.personalize}
    </KeyLimePieButton>
  </div>
</div>
