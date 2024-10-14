import { Component, Input, OnInit } from '@angular/core';
import { Education, Experience } from 'src/app/models/interfaces';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent  {
  @Input() education!:Education[];
  @Input() experience!:Experience[];
}
