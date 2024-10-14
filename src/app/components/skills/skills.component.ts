import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/interfaces';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent  {
  @Input() skills!:Skill[];
}
