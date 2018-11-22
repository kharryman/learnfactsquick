import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnagramGeneratorPage } from './anagram-generator.page';

const routes: Routes = [
  {
    path: '',
    component: AnagramGeneratorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AnagramGeneratorPage]
})
export class AnagramGeneratorPageModule {}
