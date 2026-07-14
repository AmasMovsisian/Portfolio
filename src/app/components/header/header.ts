import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Nav } from '../../shared/nav/nav';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    Nav,
    TranslatePipe
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}