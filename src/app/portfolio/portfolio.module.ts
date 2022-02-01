import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule {
}
