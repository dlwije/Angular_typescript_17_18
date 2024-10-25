import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);


/*Standalone application initiation process*/

// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
// import { HeaderComponent } from './app/header/header.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
// We can do this way, but this is not the way we should do. this should be like hierarchical way. parent child way.
// For that, we add this inside of another component.
// bootstrapApplication(HeaderComponent).catch((err) => console.error(err));
