import { CanActivateFn } from '@angular/router';

export const testCanChildGuard: CanActivateFn = (route, state) => {
  return true;
};
