import { Component, Input, OnInit } from '@angular/core';
import { PersonalInfo } from 'src/app/models/interfaces';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  @Input() personalInfo!:PersonalInfo;

}
