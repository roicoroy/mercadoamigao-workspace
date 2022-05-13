// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_BASE_PATH: 'http://localhost:1337/api',
  BASE_PATH: 'http://localhost:1337',
  instrumentationKey: null,
  firebase: {
    projectId: 'mercadoamigao-frontend',
    appId: '1:780324673146:web:db705b2235d5556477cdc3',
    storageBucket: 'mercadoamigao-frontend.appspot.com',
    apiKey: 'AIzaSyCQJ0Ddh9C-L5ZBKFpFyjPeaLz_deyk614',
    authDomain: 'mercadoamigao-frontend.firebaseapp.com',
    messagingSenderId: '780324673146',
    measurementId: 'G-PT2N07XM92',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
