import { Injectable } from '@angular/core';

@Injectable()
export class Debounce {
  // tslint:disable-next-line
  debounce(func: any, wait: any, immediate: any) {
    let timeout: any; // tslint:disable-line
    return function(): void {
      const context = this,
        args = arguments;
      const later = () => {
        timeout = null;
        if (!immediate) {
          func.apply(context, args);
        }
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) {
        func.apply(context, args);
      }
    };
  }
}
