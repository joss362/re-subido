import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"mi-angular","appId":"1:959354951669:web:fc40ef18856387e3dcf2bc","storageBucket":"mi-angular.firebasestorage.app","apiKey":"AIzaSyCErRLW5HzjzuJVcyENXGKV5eRIXHM-VXo","authDomain":"mi-angular.firebaseapp.com","messagingSenderId":"959354951669"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
