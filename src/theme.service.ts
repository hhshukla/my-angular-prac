import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<string>('dark'); // default theme
  theme$ = this.themeSubject.asObservable();

  // Removed duplicate setTheme method

  private applyTheme(theme: string) {
    const themeLink = document.getElementById('theme-link') as HTMLLinkElement;
    if (theme === 'dark') {
      themeLink.href = 'assets/styles/dark-theme.css';
    } else {
      themeLink.href = 'assets/styles/light-theme.css';
    }
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(theme);
  }

  setTheme(theme: string) {
    this.themeSubject.next(theme);
    this.applyTheme(theme);
  }

  // On service initialization, load the saved theme from localStorage
  // constructor() {
  //   const savedTheme = localStorage.getItem('theme') || 'light';
  //   this.setTheme(savedTheme);
  // }
}
