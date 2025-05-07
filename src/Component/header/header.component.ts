import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../theme.service'; // Ensure the correct path to ThemeService

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'], // Corrected to styleUrls (plural)
})
export class HeaderComponent {
  mobileMenuOpen = false;
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
  data = {
    logo: {
      src: '../../assets/images/67061df890aa3a22852e80da_logo.png',
      alt: 'Website Logo',
      url: '/',
    },
    links: [
      {
        text: 'About',
        url: '/about',
      },
      {
        text: 'Schedule',
        url: '/schedule',
      },
      {
        text: 'Speakers',
        url: '/speakers',
      },
      {
        text: 'Sponsers',
        url: '/sponsers',
      },

      {
        text: 'FAQ',
        url: '/faq',
      },
    ],
    buttons: [
      {
        text: 'Sign Up',
        url: '/signup',
        style: 'primary',
      },
      {
        text: 'Login',
        url: '/login',
        style: 'secondary',
      },
    ],
  };
  // Inject the ThemeService
  constructor(private themeService: ThemeService) {}
  // Ensure switchTheme is fully implemented
  switchTheme(theme: string) {
    if (theme === 'light' || theme === 'dark') {
      this.themeService.setTheme(theme);
    } else {
      console.error('Unsupported theme: ', theme);
    }
  }
}
