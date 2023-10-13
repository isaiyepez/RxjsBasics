import { Observable } from "rxjs";

const observer = {
    next: value => console.log('next', value),
    error: error => console.log('error', error),
    complete: () => console.log('complete!')
};

//Observable that emmits or pushes the value "Hello" to their subscribers
const observable = new Observable(subscriber => {
    //Here we are just emmiting one value but observers can deliver any number of values
    //over any period of time
    subscriber.next('Hello'); 
    subscriber.next('World');
    //Here we are telling the subscriber that we are done. This prevents any
    //future values from being delivered and runs any cleanup logic if required
    subscriber.complete();
    //The next values will be ignored.
    subscriber.next('Hello');
    subscriber.next('World');
})

observable.subscribe(
    //OBSERVER HERE
    observer
);