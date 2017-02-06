import { Injectable } from '@angular/core';

export class Crisis {
  constructor(public id: number, public name: string) {}
}

const CRISES: Crisis[] = [
  new Crisis(1, 'Dragon'),
  new Crisis(2, 'Sky Falls'),
  new Crisis(3, 'Asteroid'),
  new Crisis(4, 'Something stupid')
]

const FETCH_LATENCY = 500;

@Injectable()
export class CrisisService {
  getCrises() {
    return new Promise<Crisis[]>(resolve => {
      setTimeout(() => { resolve(CRISES); }, FETCH_LATENCY);
    });
  }
  getCrisis(id: number | string) {
    return this.getCrises()
      .then(crises => crises.find(crisis => crisis.id === +id));
  }
}