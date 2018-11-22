import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShowNewWordsPage } from './show-new-words.page';

const routes: Routes = [
  {
    path: '',
    component: ShowNewWordsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShowNewWordsPage]
})
export class ShowNewWordsPageModule {}
