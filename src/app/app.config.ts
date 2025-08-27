import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideNativeDateAdapter } from '@angular/material/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'your-project-id',
        appId: 'your-app-id',
        storageBucket: 'your-storage-bucket',
        apiKey: 'your-api-key',
        authDomain: 'your-api-key',
        messagingSenderId: 'your-messaging-sender-id',
      })
    ),
    provideFirestore(() => getFirestore()),
    provideNativeDateAdapter(),
  ],
};
