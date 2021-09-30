# Service

This doc will define service type

| Porperty  | Type              | Definition                                               | Example                        |
| --------- | ----------------- | -------------------------------------------------------- | ------------------------------ |
| key       | string            | A unique key for the service                             | `myservice`                      |
| type      | string            | A key to categorize service                              | `analytics`                      |
| name      | string            | Name of the service                                      | `My Service`                     |
| uri       | string            | A link to GPDR compliance page                           | `https://myservice.com`          |
| cookies   | Array of string   | An array that list installed cookies by the service      | `['sv', 'sj', 'su']`             |
| settings  | Object            | Object that contains dynamic settings to setup service   | `{ param: 'defaultValue'}`       |
| js        | function          | Function that will be called if service is allowed       | `() => {console.log('loaded');}` |