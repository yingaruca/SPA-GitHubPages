import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import {MeetCows} from './pages/meet-cows/meet-cows';
import { FunFacts } from './pages/fun-facts/fun-facts';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'galeria', component: GalleryComponent },
  { path: 'vacas', component: MeetCows },
  { path: 'curiosidades', component: FunFacts},
  { path: '**', redirectTo: '/home' }
];