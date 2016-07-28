import $ from 'jquery';
import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';
import {ApplicationBase} from './framework/application-base.js';
import {HomePage} from './pages/home-page.js';
import {CarsPage} from './pages/cars-page.js';
import {DronesPage} from './pages/drones-page.js';


export class App extends ApplicationBase {
  constructor () {
    super('Fleet Manager');
    this.dataService = new FleetDataService();
    this.dataService.loadData(fleet);

    this.addRoute('Home', new HomePage(), true);
    this.addRoute('Cars', new CarsPage());
    this.addRoute('Drones', new DronesPage);
    this.addRoute('Map',null);
  }
}

export let application = new App();
application.show($('body'));
