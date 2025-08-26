import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "angular-todo-app-b66c9", appId: "1:898978253936:web:c31454c4493b2f500c38b5", storageBucket: "angular-todo-app-b66c9.firebasestorage.app", apiKey: "AIzaSyB69TRTlg7wd34iiF6cG9PdClZkcDCPEys", authDomain: "angular-todo-app-b66c9.firebaseapp.com", messagingSenderId: "898978253936", measurementId: "G-KHBHGC4JY4" })), provideFirestore(() => getFirestore())
  ]
};
