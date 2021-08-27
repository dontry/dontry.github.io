---
date: 2021-08-21
title: Validation Error Tracker for Form Fields
excerpt: A service that collects validation error globally.
tags: 
 - ANGULAR
---

Angular provides form control APIs to collect the validation errors within a form group. 
However, it is tricky to gather validation errors across multiple form groups in a general way. What we do is to create a global registry service. Each new form element component will be registered under the registry service. This approach makes it for us to track all validation errors on one single page.

```typescript
@Injectable()
export class FormElementRegistryService {

  private readonly registry: Array<AbstractFormElementComponent> = new Set< AbstractFormElementComponent>();

  public register(formElementComponent: AbstractFormElementComponent): void {
    this.registry.add(formElementComponent);
  }

  public unregister(formElementComponent: AbstractFormElementComponent): void {
    this.registry.remove(formElementComponent);
  }

  public getFormElementErrors(): Array<FormElementError> {
    return Array.from(this.registry.values())
      .reduce((formComponentErrors, formElementComponent) => {
        const isValidationError = !!formElementComponent.control?.invalid;

        if (isValidationError) {
          const controlErrors = formElementComponent.control.errors ?? {};
          const validationError = {
            fieldName: formElementComponent.fieldName,
            errors: Object.keys(controlErrors).map(key => ({ [key]: controlErrors[key] })),
          };
          return [...formComponentErrors, validationError];
        } else {
          return formComponentErrors;
        }
      }, []);
  }
}
```

```typescript
@Directive()
export abstract class AbstractFormElementComponent implements ControlValueAccessor, OnInit, OnDestroy {

  public control: AbstractControl = new FormControl();
 
  constructor(
    protected cdr: ChangeDetectorRef,
    @Optional() private readonly formElementRegistryService: FormElementRegistryService,
    @Optional() @Self() protected ngControl: NgControl,
  ) {
    if (ngControl) {
      ngControl.valueAccessor = this;
    }
  }

  public ngOnInit(): void {
      this.control = this.ngControl.control;

    // register the component in initialization
      if (this.formElementRegistryService) {
        this.formElementRegistryService.register(this);
      }
    }

  public ngOnDestroy(): void {
      this.control = this.ngControl.control;

      if (this.formElementRegistryService) {
        this.formElementRegistryService.unregister(this);
      }
    }
}
```
