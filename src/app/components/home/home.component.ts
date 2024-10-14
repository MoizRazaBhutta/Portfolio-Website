import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Education, Experience, PersonalInfo, Skill, SocialLink, ViewData } from 'src/app/models/interfaces';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {

  socialLinks!:SocialLink;
  personalInfo!:PersonalInfo;
  experience!: Experience[];
  education!:Education[];
  skills!:Skill[];
  subscription!:Subscription;

  constructor(private portfolioDataService:PortfolioDataService){}

  ngOnInit(): void {
    this.subscription = this.portfolioDataService.getData().subscribe((data:ViewData)=>{
      this.socialLinks = data.socialLinks;
      this.personalInfo = data.personalInfo;
      this.experience = data.experience;
      this.education = data.education;
      this.skills = data.skills;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
