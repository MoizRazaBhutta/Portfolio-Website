import { Injectable } from '@angular/core';
import { Education, Experience, PersonalInfo, Skill, SocialLink, ViewData } from '../models/interfaces';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {
  //Mocking API calls
  personalInfo:PersonalInfo = {
    name: 'Abdul Moiz Raza Bhutta',
    age: 26,
    email: 'moiz_bhutta@hotmail.com',
    phone: '289-893-5573',
    address: '10 Armitage, Cres, Ajax, ON L1T 4G6, Canada',
    description:`Over 3 years of Software Development experience with HTML5, CSS3, JavaScript, TypeScript, C#, SQL.
Proficiency in developing and maintaining Angular and ASP.NET with Razor pages applications, showcasing strong debugging and troubleshooting technical skills with optimized application performance ensuring high-quality user experience.
Hands-on experience with integration of RESTful APIs backend services and Version Control Systems like Git.
Collaborated with cross-functional teams to lead complex frontend projects, with the ability to manage multiple tasks and projects simultaneously.
Exposure to Agile Methodology, CI/CD processes, Unit testing, and end-to-end testing.
Proficient in problem-solving with strong communication and collaboration abilities.
Currently enrolled in the .NET Cloud Developer Bridging program at Humber College expanding technical skills in Microsoft SQL Server, Azure, Visual Studio, C#, and .NET.`
  };

  socialLinks:SocialLink = {
    linkedin: 'https://www.linkedin.com/in/moiz-raza-78304b77/',
    github: 'https://github.com/MoizRazaBhutta',
    facebook: 'https://www.facebook.com/moizraza101/',
    instagram: 'https://www.instagram.com/moiz_raza/',
  };

  skills:Skill[] = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 90 },
    { name: 'Angular', level: 90 },
    { name: 'Cypress', level: 85},
    { name: 'C#', level: 80 },
    { name: 'Dotnet', level: 80 },
    { name: 'CI/CD', level: 70 },
  ];

  experience:Experience[] = [
    { title: '.NET Developer', company: 'FGF Brands', duration: '2024-Present' },
    { title: 'Angular Developer', company: 'Tech Brainz', duration: '2023-2023' },
    { title: 'Angular Developer', company: 'OneSchool', duration: '2021-2023' },
  ];

  education:Education[] = [
    { degree: 'Full Stack .NET Program', school: 'Humber College', year: '2024' },
    { degree: 'Bachelors in Electronic Engineering', school: 'NED University', year: '2020' },
  ];

  getData():Observable<ViewData>{
    return of({
      personalInfo:this.personalInfo,
      socialLinks:this.socialLinks,
      skills:this.skills,
      experience:this.experience,
      education:this.education,
    });
  }
}
