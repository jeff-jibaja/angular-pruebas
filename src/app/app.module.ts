import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SkillComponent } from './skill/skill.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReviewComponent } from './review/review.component';
import { DataTeamComponent } from './data-team/data-team.component';
import { TeamComponent } from './team/team.component';
import { DataReviewComponent } from './data-review/data-review.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SkillComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    NavTopComponent,
    NavbarComponent,
    ReviewComponent,
    DataTeamComponent,
    TeamComponent,
    DataReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
