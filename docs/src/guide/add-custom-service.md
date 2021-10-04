# Adding a custom service

Sometimes you just want to implement a custom service, KeyLimePie allow you to do it quiet easily.

```js
var cookieManager = new KeyLimePie();
cookieManager.addCustomService({
    key: 'myCustomService',
    type: 'analytics',
    name: 'My Custom Service',
    uri: 'https://example.org',
    cookies: ['example1', 'example2'],
    js: function() {
        console.log('My custom service is loaded');
    }
});
cookieManager.initialize();
```
