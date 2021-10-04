# Instanciate KeyLimePie
Now that all files are loaded correctly, we need to configure and run KeyLimePie.

::: tip
When loading script from JS files directly, the instatiation function must be the one used for onload hook
To do this, we will use the `onload` hook previously added. In the hook we call a function called `initCookieManager`.
You must implement this function in your page.
To do so, you must add a `script` tag at the end of your body containing the invocation code.
::: 

Instantiate KeyLimePie is quite easy

```js
<script>
    function initCookieManager() {
        var cookieManager = new KeyLimePie();
        cookieManager.initialise();
    }
</script>
```


::: warning
Be careful, without registered service, KeylimePie modal is not display.  
:::

# Configure KeyLimePie
Configuring KeyLimePie is simple as hell !

Each config must be done between the KeyLimePie instantiation `new KeyLimePie` and the initialisation `cookieManager.initilise`.

## Add Service
To add a service, please refere to the [Service](/services/) page that refer all implemented services.
Each service has it's own implementation, but don't be afraid, each service is quite simple to implement.
For each service, you must add implementation code in your init function.
Here's an example implementing [Hotjar](/services/hotjar/) :

```js
<script>
    function initCookieManager() {
        var cookieManager = new KeyLimePie();
        cookieManager.addService("googletagmanager", {gtmId: '123456'});
        cookieManager.addService("hotjar", {hotjarId: 1234567, HotjarSv: 8})
        cookieManager.initialise();
    }
</script>
```

## Setting language
Currently supported languages are `fr` and `en`.
Setting language is also very easy ! You just have to set language using following code :
```js
<script>
    function initCookieManager() {
        var cookieManager = new KeyLimePie();
        cookieManager.setLang("fr");
        cookieManager.addService("googletagmanager", {gtmId: '123456'});
        cookieManager.addService("hotjar", {hotjarId: 1234567, HotjarSv: 8})
        cookieManager.initialise();
    }
</script>
```

And voilà ! You are ready to be GPDR Compliant !
