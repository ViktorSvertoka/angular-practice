import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoList } from './todo-list.component';
import { TodoCreate } from '../todo-create/todo-create';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { TodoService } from '../../services/todo-service';
import { ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

describe('TodoList', () => {
  let component: TodoList;
  let fixture: ComponentFixture<TodoList>;
  let mockTodoService: jasmine.SpyObj<TodoService>;
  let mockBottomSheetRef: jasmine.SpyObj<MatBottomSheetRef<TodoCreate>>;

  beforeEach(async () => {
    mockTodoService = jasmine.createSpyObj('TodoService', ['createItem', 'getItems']);
    mockTodoService.createItem.and.returnValue(Promise.resolve());
    mockTodoService.getItems.and.returnValue(of([{}]));
    mockBottomSheetRef = jasmine.createSpyObj('MatBottomSheetRef', ['dismiss']);

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, TodoCreate],
      providers: [
        provideNativeDateAdapter(),
        provideAnimationsAsync(),
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
        { provide: TodoService, useValue: mockTodoService },
        { provide: MatBottomSheetRef, useValue: mockBottomSheetRef },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
