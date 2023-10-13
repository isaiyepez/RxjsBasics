import { Observable } from "rxjs";

//Observables represent a stream or collection of data that can be 
//delivered over time.

// Push - base approach, the observable has the control, whereas 
// the subscriber simply reacts to the data it receives
// with this subscriber function you decide when and what values you 
// are sending to your subscriber

// The NEXT method is telling the subscriber that we have a new
// value for them (aka pushing or emmiting a value)
// the observable doesn't know or care what the subscriber
// will do with the value

// Observables are lazy, until something actually is subscribing
// to these emmited values, nothing will be run.
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

// Calling SUBSCRIBE on an observable is a way of hooking up an observable to its observer.
// Observers are the public vanilla version of the subscriber that the observable constructor receives.
// when you call the subscribe method, the observable converts the observer into a subscriber
// in order to safely handle things like completion, unsubscribing and error handling.
// Subscribers are just the wrapped, safe version of an observer.
observable.subscribe(
    //OBSERVER HERE
    observer
);

// Observers are objects that contain up to three properties:
// NEXT: represents the happy path function that is invoked when the observable emits a new value. This
// function can be called zero to many times.
// The second callback we can register is ERROR. When an error occurs, this error callback is invoked once
// and is passed the error object.
// The last callback we can provide is when an observable COMPLETES. This can be invoked just one time 
// and it does not receive any values.
