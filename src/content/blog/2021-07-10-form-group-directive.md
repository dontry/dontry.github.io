---
date: '2021-07-10'
title: FormGroup Directive
excerpt: Using Directive to separate form control manipulation from component.
tags: 
    - ANGULAR
---


```typescript
interface Model {
    firstName: string;
    lastName: string;
    gender: string;
}
```

```html
<div modelFormControlDirective
    [formControl]="modelFormControl">
    <input [formControlName]="'FIRST_NAME'" />
    <input [formControlName]="'LAST_NAME'" />
    <select [formControlName]="'GENDER'" options="options"/>
</div>
```

```typescript
@Component({template: ''})
export class AbstractModelDatatableComponent<T extends Identifiable>
  extends AbstractConnectableComponent {

  @Input() public model: Model;
  public modelFormControl: FormGroup = new FormGroup({});

  public ngOnChanges({ model: modelChanges }: SimpleChanges): void {
    this.modelFormControl.setValue(model);
  }

  public handleFormToStoreUpdate(): void {
    this.modelFormControl.valueChanges.pipe(
      distinctUntilChanged(isEqual),
      takeUntil(this.destroy$),
     ).subscribe(model => {
        // Update form to store
    });  
  }
}
```

```typescript
@Directive({
  selector: '[modelFormControlDirective]',
  providers: [
    {
      provide: ControlContainer,
      useFactory: formGroupDirectiveFactory,
      deps: [ModelFormControlDirective],
    },
  ],
})
export class ModelFormControlDirective extends AbstractModelFormGroupDirective<Model> implements OnInit {

  private readonly firstNameFromControl: FormControl = new FormControl(null);
  private readonly lastNameFromControl: FormControl = new FormControl(null);
  private readonly genderFromControl: FormControl = new FormControl(null);

  constructor(
    ngControl: NgControl,
    private readonly clearErrorService: ClearErrorService,
  ) {
    super(ngControl);
  }

  public ngOnInit(): void {
    super.ngOnInit();
    // add reactive form control manipulation
  }

  protected initControls(): void {
    this.formGroup.addControl('FIRST_NAME', this.firstNameFromControl);
    this.formGroup.addControl('LAST_NAME', this.lastNameFromControl);
    this.formGroup.addControl('GENDER', this.genderFormControl);
  }

  protected fromModelToFormGroup({ paidFrom }: Model): void {
    this.setControlValueAndProperties(this.paidFromControl, paidFrom);
  }

  protected fromFormGroupToModel(formGroupValue: any): Partial<Model> {
    return {
      firstName: asDatatableFieldModel(formGroupValue['FIRST_NAME]),
      lastName: asDatatableFieldModel(formGroupValue['FIRST_NAME]),
      gender: asDatatableFieldModel(formGroupValue['GENDER]),
    };
  }
}
```
