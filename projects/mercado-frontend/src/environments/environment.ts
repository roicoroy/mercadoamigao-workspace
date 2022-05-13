export const environment = {
  production: false,
  // Pfad zum lokalen arbeiten auf der Angular Instanz
  // mit dem API Docker Container
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
