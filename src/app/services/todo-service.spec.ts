import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideFirebaseApp(() =>
          initializeApp({
            projectId: 'angular-todo-app-b66c9',
            appId: '1:898978253936:web:c31454c4493b2f500c38b5',
            storageBucket: 'angular-todo-app-b66c9.firebasestorage.app',
            apiKey: 'AIzaSyB69TRTlg7wd34iiF6cG9PdClZkcDCPEys',
            authDomain: 'angular-todo-app-b66c9.firebaseapp.com',
            messagingSenderId: '898978253936',
          })
        ),
        provideFirestore(() => getFirestore()),
      ],
    });
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
