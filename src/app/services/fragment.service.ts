import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FragmentService {
  private fragmentSource = new BehaviorSubject<string | null>(null);
  fragment$ = this.fragmentSource.asObservable();

  setFragment(fragment: string | null) {
    this.fragmentSource.next(fragment);
  }
}