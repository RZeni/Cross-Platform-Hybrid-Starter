Hybrid App Starter
================

Designed as a starter app for cross platform hybrid apps. 

-----
## Dependencies
Java JDK
Android SDK
Global Electron
Global Cordova
Development on windows 

-----
## Download/Include
First Download/Clone the repo or get it from npm/bower with
```
 npm install -
 bower install -
```

-----
## Building the Application
to build the web app into an electron wrapper enter the command
```
gulp build-electron
```
to build the web app into a cordova wrapper enter the command
```
gulp build-cordova
```
to build everything
```
gulp build-all
```

-----
## Running App in Development
Running in chrome
```
npm start-web
```
Running in cordova emulator
```
gulp start-cordova
```
Running on mobile device
```
gulp start-cordova device
```
Running App on desktop
```
npm start-electron
```

-----
## Packaging Application
package the cordova movile app
```
gulp package-cordova
```
package the electron desktop app
```
gulp package-electron
```
package web app
```
gulp package-web
```
package all apps
```
gulp package-all
```