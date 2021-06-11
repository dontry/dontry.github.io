---
date: '2021-06-11'
title: 'A better way to connect to NGRX store'
excerpt: 'The state from NGRX store is an observable stream. It is a little bit tricky to access it. This post provides a better way to handle it. '
tags:
  - ANGULAR
  - NGRX
---

As shown in the [NGRX documentation example](https://ngrx.io/guide/store#tutorial), in order to access the NGRX state, we have to create an observable and assign a selector to it. Due to the nature of observable, *async pipe* is required to apply to the observable in the HTML template. This is quite cumbersome in general. 

```javascript
export class MyCounterComponent {

  public count$: Observable<number>;
 
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }
}
```

```html
<div>Current Count: {{ count$ | async }}</div>
```

In a bid to turning the observable into regular variable. We can assign the state to a variable in the subscription.

```javascript 
export class MyCounterComponent {

  public count: number;
  public count$: Observable<number>;

  private countSubscription: Subscription;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
    this.countSubscription = this.count$.subscribe(count => {
      this.count = count;
    })
  }

  public ngOnDestroy() {
    this.countSubscription.unsubscribe();
  }
}
```

However, the above code doesn't look very nice. Once the component has a few more selectors, it could easily become a mess. 
 
Can we come up with an approach so that we can connect the NGRX state with ease? Yes, we can! 

We create a `AbstractConnectableComponent` to automate the observable subscription steps.  This improved approach does not need to create the observable properties. The connectable component iterates through the connected properties and assigns the selected NGRX state to them. It is easy to unsubscribe the observables too. Once the observable `destroy$` emits in `ngOnDestroy()` lifecycle hook, the subscriptions will be destroyed. Plus, since these connected public properties are just regular variables, we don't need the *async pipe* in the HTML template any more. All in all, this is a clever approach to connect NGRX store just with a little bit abstraction.

```javascript 
export class MyCounterComponent extends AbstractConnectableComponent  {

  public count: number;

  constructor(private store: Store<{ count: number }>) {
    this.connect<MyCounterComponent>({
      count: this.store.select('count'),
    })
  }

}
```

 ```javascript
 @Component({ template: '' })
export class AbstractConnectableComponent implements OnDestroy {

  protected destroy$: Subject<void> = new Subject();

  public ngOnDestroy(): void {
    this.destroy$.next();
  }

  protected connect<T extends AbstractConnectableComponent>(data: ConnectableData<T>): void { 
    Object.entries(data).forEach(([key, value$]) => {
      value$.pipe(
        takeUntil(this.destroy$),
      ).subscribe(val => {
        this[key] = val;
        this.cdr.detectChanges();
      });
    });
  }
}
 ```

