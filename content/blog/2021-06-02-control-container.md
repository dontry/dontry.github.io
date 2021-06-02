---
date: '2021-06-02'
title: 'Angular ControlContainer'
excerpt: 'ControlContainer solves the issue how the parent form accesses or controls and child form when they reside in different components. '
tags:
  - Angular
---

A common nested form usually looks like this. Here *profileForm* contains a nested form *address* FormGroup. If *profileForm* needs to get access the *address* FormGroup, we can simply do this: `profileForm.get('address')`.

```javascript
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });
}
```
```html
<form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
  <label>
    First Name:
    <input type="text" formControlName="firstName" required>
  </label>
  <label>
    Last Name:
    <input type="text" formControlName="lastName">
  </label>
  <div formGroupName="address">
    <h3>Address</h3>
    <label>
      Street:
      <input type="text" formControlName="street">
    </label>
    <label>
      City:
      <input type="text" formControlName="city">
    </label>
    <label>
      State:
      <input type="text" formControlName="state">
    </label>
    <label>
      Zip Code:
      <input type="text" formControlName="zip">
    </label>
  </div>
  <div formArrayName="aliases">
    <h3>Aliases</h3> <button (click)="addAlias()">Add Alias</button>

    <div *ngFor="let alias of aliases.controls; let i=index">
      <!-- The repeated alias template -->
      <label>
        Alias:
        <input type="text" [formControlName]="i">
      </label>
    </div>
  </div>
  <button type="submit" [disabled]="!profileForm.valid">Submit</button>
</form>
```

However, if we want to create a reusable or sophisticated component for *address* formGroup. How can the parent form *profileForm* access or control it? That's how `ControlContainer` comes into play. 

The injected `ControlContainer` looks up the component tree and finds the parent form.
It allows us to access the parent form across components. From there we can use the `formControlName` for our `FormControls` as expected.


```javascript
// Profile form (parent form)
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
}
```

```javascript
// Address Form (child form)
import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-address',
  template: `
  <form  *ngIf="ogFormGroup" [formGroup]="addressForm">
    <h5>Address:</h5>
    <div class="form-group">
      <label for="name">Street Name</label>
      <input formControlName="street" />
    </div>
    <div class="form-group">
      <label for="name">City</label>
      <input formControlName="city" />
    </div>
    <div class="form-group">
      <label for="name">State</label>
      <input formControlName="state" />
    </div>
    <div class="form-group">
      <label for="name">Zip</label>
      <input formControlName="zip" />
    </div>
  </form>
  `,
  styleUrls: ['./address.component.less']
})
export class AddressComponent implements OnInit {
  public parentForm;
  public addressForm;
  constructor(public controlContainer: ControlContainer) {
  }

  ngOnInit() {
    this.addressForm = new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    });
    this.parentForm = this.controlContainer.control;
    this.parentForm.setControl('address', this.addressForm);
    this.addressForm.setParent(this.parentForm);
  }
}
```