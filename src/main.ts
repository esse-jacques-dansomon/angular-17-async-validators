import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  styles: `p {
    font-family: Lato;
  }
  
  .example-form {
    min-width: 150px;
    max-width: 500px;
    width: 100%;
  }
  
  .example-full-width {
    width: 100%;
  }
  
  .button-container {
    display: flex;
    justify-content: flex-end;
  }`,
  template: `
  <p>Using Custom Async Validators</p>

<div class="container" [formGroup]="registrationForm">
  <mat-form-field class="example-full-width">
    <mat-label>Name</mat-label>
    <input matInput placeholder="Ex. John Doe" formControlName="name" />
  </mat-form-field>

  <mat-form-field class="example-full-width">
    <mat-label>Username</mat-label>
    <input matInput placeholder="Ex. Batman" formControlName="username" />
  </mat-form-field>

  <div class="button-container">
    <button
      mat-raised-button
      color="primary"
      [disabled]="!registrationForm.valid"
    >
      Submit
    </button>
  </div>
</div>
  `,
})
export class App {
  constructor(private fb: FormBuilder) {}

  registrationForm = this.fb.group({
    name: [null, [Validators.minLength(3), Validators.required]],
    username: [null, [Validators.minLength(3), Validators.required]],
  });
}

bootstrapApplication(App, {
  providers: [],
}).catch((err) => console.error(err));
