import { Component, Input, OnInit } from '@angular/core';
import { SocialLink } from 'src/app/models/interfaces';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  @Input() socialLinks!:SocialLink;

  name:string = "Abdul Moiz Raza Bhutta";
}
