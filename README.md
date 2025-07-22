# capacitor-plugin-hmsgms-checker

<p align="center"><br><img src="https://user-images.githubusercontent.com/236501/85893648-1c92e880-b7a8-11ea-926d-95355b8175c7.png" width="100" height="100" /></p>
<p align="center"><strong><code>capacitor-plugin-hmsgms-checker</code></strong></p>
<p align="center">
  Capacitor  plugin for checking HMS and GMS availability.</a>
</p>

<p align="center">
<a href="https://www.npmjs.com/package/capacitor-plugin-gmshms-checker">
 <img src="https://badge.fury.io/js/capacitor-plugin-gmshms-checker.svg" width="120"/>
 </a>
</p>

## Platforms Support

Only Android Platform is supported.

## Installation

### Using npm:


```bash
npm install capacitor-plugin-hmsgms-checker@latest
```


Sync native files:

```bash
npx cap sync
```

## Version Compatibility
On capacitor v6 migration, no breaking changes are reported, but major number version jump to 6 to better understanding of this plugin-capacitor compatibility.

| Capacitor Version | Plugin Version | Install Command |
| --- | --- | --- |
| Capacitor V2 | 1.0.0 | ```npm i capacitor-plugin-gmshms-checker@1``` |
| Capacitor V3 | 2.0.0 | ```npm i capacitor-plugin-gmshms-checker@2.0.0``` |
| Capacitor V4 | 2.1.0 | ```npm i capacitor-plugin-gmshms-checker@2.1.0``` |
| Capacitor V5 | 3.0.0 | ```npm i capacitor-plugin-gmshms-checker@3``` |
| Capacitor V6 | 6.0.0 | ```npm i capacitor-plugin-gmshms-checker@6``` |
| Capacitor V7 | 7.0.0 | ```npm i capacitor-plugin-gmshms-checker@latest``` |
||||


### On Android, register the plugin in your main activity:

Capacitor v2.x

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

Capacitor v3.x

```java
import com.angelcamacho.plugin.ServiceChecker;

public class MainActivity extends BridgeActivity {

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    // Additional plugins you've installed go here
    registerPlugin(ServiceChecker.class);
  }
}

```

Capacitor v4+

```java
import com.angelcamacho.plugin.ServiceChecker;

public class MainActivity extends BridgeActivity {

  @Override
  public void onCreate(Bundle savedInstanceState) {
    // Additional plugins you've installed go here, diffent order compared with capV3
    registerPlugin(ServiceChecker.class);
    super.onCreate(savedInstanceState);
  }
}

```


## Configuration

In your `android/build.gradle` file add next lines in your `buildscript > repositories` and `buildscript > dependencies` entries.

```java
buildscript{
    repositories {
        ...
        maven { url 'https://developer.huawei.com/repo/' }
    }
    dependencies {
        ...
        classpath 'com.huawei.agconnect:agcp:1.9.0.300'
    }
```

Then, in your `allprojects > repositories` entry add next line

```java
allprojects {
    repositories {
        ...
        maven { url 'https://developer.huawei.com/repo/' }
    }
}
```

In your `android/app/build.gradle` file add next line in your repositories entry

```java
repositories {
    ...
    maven { url 'http://developer.huawei.com/repo/' }
}
```

WARN: If your gradle version is ^7.x, add allowInsecureProtocol flag, so your build gradle should look like:

```java
repositories {
    ...
    maven {
      url 'http://developer.huawei.com/repo/'
      allowInsecureProtocol = true
    }
}
```

> Your Android Gradle plugin must be 4.2.1 or later

## Usage

Capacitor v2.x

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

Capacitor v3+

```typescript
// Must import the package once to make sure the web support initializes
...
import { ServiceChecker } from 'capacitor-plugin-gmshms-checker';
import 'capacitor-plugin-gmshms-checker';

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

## For Google

No more steps are needed. This plugin implements `play-services-base` version `18.1.0`.

You may download the `google-services.json` file and copy it to `android/app/` directory of your capacitor project.

## For Huawei

No more steps are needed. This plugin implements `hms:base` version `6.5.0.300`.
You may download the `agconnect-services.json` file and copy it to `android/app/` directory of your capacitor project.

## Android setup

- `ionic start my-cap-app --capacitor`
- `cd my-cap-app`
- `npm install --save capacitor-plugin-hmsgms-checker`
- `mkdir www && touch www/index.html`
- `npx cap add android`
- `npx cap sync android` (every time you run `npm install`)
- `npx cap open android`
- add `google-services.json` or/and `agconnect-services.json` to your `android/app` folder

Now you should be set to go. Try to run your client using `ionic cap run android --livereload --address=0.0.0.0`.

> Tip: every time you change a native code you may need to clean up the cache (Build > Clean Project | Build > Rebuild Project) and then run the app again.
