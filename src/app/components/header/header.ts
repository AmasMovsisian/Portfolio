import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Nav } from '../../shared/nav/nav';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    Nav,
    TranslatePipe,
    RouterLink
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}