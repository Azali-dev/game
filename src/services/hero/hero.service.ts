// Initializes the `hero` service on path `/hero`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Hero } from './hero.class';
import hooks from './hero.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'hero': Hero & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/hero', new Hero());

  // Get our initialized service so that we can register hooks
  const service = app.service('hero');

  service.hooks(hooks);
}
