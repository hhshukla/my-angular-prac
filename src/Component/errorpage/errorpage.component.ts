import { Component } from '@angular/core';

@Component({
  selector: 'app-errorpage',
  imports: [],
  templateUrl: './errorpage.component.html',
  styleUrl: './errorpage.component.scss',
})
export class ErrorpageComponent {
  imageUrl =
    'https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg?t=st=1746620933~exp=1746624533~hmac=340b9fa96e6683b8e17090e14762a303b1664b4ba91b46944cb2976acf882e82&w=1060';
  text = 'Go to Home';
  link = '/';
}
