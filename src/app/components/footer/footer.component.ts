import { Component, Input, OnInit } from '@angular/core';
import { SocialLink } from 'src/app/models/interfaces';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  @Input() socialLinks!:SocialLink;

}
