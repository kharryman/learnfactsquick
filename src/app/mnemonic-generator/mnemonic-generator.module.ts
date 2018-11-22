import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MnemonicGeneratorPage } from './mnemonic-generator.page';

const routes: Routes = [
  {
    path: '',
    component: MnemonicGeneratorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MnemonicGeneratorPage]
})
export class MnemonicGeneratorPageModule {}
