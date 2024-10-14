import { Component, OnInit } from '@angular/core';
import { Education, Experience, PersonalInfo, Skill, SocialLink, ViewData } from './models/interfaces';
import { PortfolioDataService } from './services/portfolio-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'portfolio-website';
  socialLinks!:SocialLink;

  constructor(private portfolioDataService:PortfolioDataService){}

  ngOnInit(): void {
    this.portfolioDataService.getData().subscribe((data:ViewData)=>{
      this.socialLinks = data.socialLinks;
    });
  }
}
