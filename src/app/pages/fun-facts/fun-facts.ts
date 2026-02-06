// src/app/pages/fun-facts/fun-facts.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fun-facts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fun-facts.html',
  styleUrl: './fun-facts.css'
})
export class FunFacts {
  cowFacts = [
    { icon: '👀', title: 'Visión Panorámica', description: 'Las vacas pueden ver casi 360 grados a su alrededor' },
    { icon: '💤', title: 'Sueño Ligero', description: 'Duermen solo unas 4 horas al día' },
    { icon: '👯', title: 'Mejores Amigas', description: 'Las vacas tienen mejores amigas y se estresan si se separan' },
    { icon: '🎵', title: 'Amantes de la Música', description: 'Producen más leche cuando escuchan música relajante' }
  ];
}