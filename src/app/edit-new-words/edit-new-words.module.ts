import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditNewWordsPage } from './edit-new-words.page';

const routes: Routes = [
  {
    path: '',
    component: EditNewWordsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditNewWordsPage]
})
export class EditNewWordsPageModule {}
