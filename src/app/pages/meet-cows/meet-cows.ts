import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meet-cows',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meet-cows.html',
  styleUrl: './meet-cows.css'
})
export class MeetCows {
  cows = [
    { emoji: '🐄', name: 'Clarita', breed: 'Holstein', color: 'Blanco y Negro', funFact: 'Le encanta la música clásica' },
    { emoji: '🐮', name: 'Margarita', breed: 'Jersey', color: 'Marrón', funFact: 'Es la más curiosa de todas' },
    { emoji: '🐄', name: 'Luna', breed: 'Guernsey', color: 'Dorado', funFact: 'Salta cuando está feliz' }
  ];
}