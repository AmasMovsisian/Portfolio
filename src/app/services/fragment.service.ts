import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FragmentService {
  /**
   * Internal BehaviorSubject holding the current fragment value.
   */
  private fragmentSource = new BehaviorSubject<string | null>(null);

  /**
   * Observable stream of the current fragment.
   */
  fragment$ = this.fragmentSource.asObservable();

  /**
   * Updates the fragment value and emits it to subscribers.
   * @param fragment - The fragment string or null to clear.
   */
  setFragment(fragment: string | null) {
    this.fragmentSource.next(fragment);
  }
}