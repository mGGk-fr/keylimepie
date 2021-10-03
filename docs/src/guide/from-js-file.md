# Use KeyLimePie from JS file
This guide will show you how to use KeyLimePie using the `js` and `css` distributed files.

## Getting files
Please head to [GitHub release page](https://github.com/mGGk-fr/keylimepie/releases) and download latest release.

## Load file in your template
Edit your `<head>` section of your template to add following code:
```html
<link rel='stylesheet' href='/keylimepie.css'>
<script type="text/javascript" defer src='/keylimepie.js' />
```

::: tip
Please edit href according to your structure.
:::

## Hook script loaded event
To do clean stuff, we will hook js loading event to a function that will instantiate KeyLimePie.
To do this, edit the `script` tag added below to add an `onload` hook.

```html
<script type="text/javascript" defer src='/keylimepie.js' onload="initCookieManager()"/>
```

This hook will handle plugin instantiation.

For the next step, please follow [Usage](/guide/how-to-use/)