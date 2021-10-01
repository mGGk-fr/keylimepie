# KeyLimePie
KeyLimePie is the main class exported by the bundle, it allow you to use KeyLimePie on your website

## Methods

### addService
This method allow you to add a service to your KeyLimePie instance

`addService(serviceKey, settings)`

| Parameter  | Type   | Example                           |
| ---------- | ------ | --------------------------------- |
| serviceKey | string | `hotjar`                          |
| settings   | Object | `{hotjarId: 1234, hotjarSv: 789}` |

### setMode
This method allow you to set dialog mode (bar at the bottom of screen `bottom-bar` or centered dialog `dialog`)

`setMode(mode)`

| Parameter | Type   | Example     |
| --------- | ------ | ----------- |
| mode      | string | `dialog`    |

### setLang
This method allow you to set language to use

`setLang(langKey)`

| Parameter | Type   | Example |
| --------- | ------ | ------- |
| langKey   | string | `fr`    |

### addCustomService
This method allow you to add a custom service that isn't embedded into KeyLimePie

`addCustomService(service)`

| Parameter | Type   | Example                           |
| --------- | ------ | --------------------------------- |
| service   | Object | A [service](/api/service/) object |