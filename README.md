# capacitor-plugin-hmsgms-checker
<p align="center"><br><img src="https://user-images.githubusercontent.com/236501/85893648-1c92e880-b7a8-11ea-926d-95355b8175c7.png" width="100" height="100" /></p>
<p align="center"><strong><code>capacitor-plugin-hmsgms-checker</code></strong></p>
<p align="center">
  Capacitor  plugin for checking HMS or GMS availability.</a>.
</p>


## Platforms Support

Only Android Platform is supported.


## Installation

Using npm:

```bash
npm install capacitor-plugin-hmsgms-checker
```

Sync native files:

```bash
npx cap sync
```



On Android, register the plugin in your main activity:

```java
import com.angelcamacho.plugin.ServiceChecker;

public class MainActivity extends BridgeActivity {

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    this.init(
        savedInstanceState,
        new ArrayList<Class<? extends Plugin>>() {

          {
            // Additional plugins you've installed go here
            add(ServiceChecker.class);
          }
        }
      );
  }
}
```

## Configuration

In your `android/app/build.gradle` add next line in your repositories entry

```java
repositories {
    ...
    maven { url 'http://developer.huawei.com/repo/' }
}
```

## Usage

```typescript
// Must import the package once to make sure the web support initializes
...
import 'capacitor-plugin-gmshms-checker';
import { Plugins } from "@capacitor/core";
const { ServiceChecker } = Plugins;

...
/**
 * Platform: Android
 * Gets true if GMS are available on the device
 * @param none
 * @returns object {value: boolean} - boolean indicates if GMS are available
 */
ServiceChecker.isGMSAvailable().then(({ value }) => {
    // use value to do something
    console.log(value);
});
/**
 * Platform: Android
 * Gets true if HMS are available on the device
 * @param none
 * @returns object {value: boolean} - boolean indicates if HMS are available
 */
ServiceChecker.isHMSAvailable().then(({ value }) => {
    // use value to do something
    console.log(value);
});

...

```


## Android/Google

No more steps are needed. This plugin implements `play-services-base` version `17.6.0`.

You may download the `google-services.json` file and copy it to `android/app/` directory of your capacitor project.

## Android/Huawei

No more steps are needed. This plugin implements `hms:push` version `6.1.0.300`.
You may download the `agconnect-services.json` file and copy it to `android/app/` directory of your capacitor project.



Your Android Gradle plugin must be 3.5.4 or later


## Android setup

- `ionic start my-cap-app --capacitor`
- `cd my-cap-app`
- `npm install --save @capacitor-community/firebase-analytics`
- `mkdir www && touch www/index.html`
- `npx cap add android`
- `npx cap sync android` (every time you run `npm install`)
- `npx cap open android`
- add `google-services.json` or/and `agconnect-services.json`  to your `android/app` folder



Now you should be set to go. Try to run your client using `ionic cap run android --livereload --address=0.0.0.0`.

> Tip: every time you change a native code you may need to clean up the cache (Build > Clean Project | Build > Rebuild Project) and then run the app again.


