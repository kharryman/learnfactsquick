import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShowMnemonicsPage } from './show-mnemonics.page';

const routes: Routes = [
  {
    path: '',
    component: ShowMnemonicsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShowMnemonicsPage]
})
export class ShowMnemonicsPageModule {}
