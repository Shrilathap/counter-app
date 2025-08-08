import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../state/app.state';
import { selectCount } from '../state/counter/counter.selector';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter/counter.action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  count$:Observable<number>;
  constructor(private store:Store<AppState>,){
    this.count$ = this.store.select(selectCount);
  }

   increment(): void {
    this.store.dispatch(increment())
  }

  decrement(): void {
       this.store.dispatch(decrement())

  }

  reset(): void {
        this.store.dispatch(reset())

  }

}
