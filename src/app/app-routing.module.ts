import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'Help', loadChildren: './help/help.module#HelpPageModule' },
  { path: 'Acrostics', loadChildren: './acrostics/acrostics.module#AcrosticsPageModule' },
  { path: 'Alphabet', loadChildren: './alphabet/alphabet.module#AlphabetPageModule' },
  { path: 'Dictionary', loadChildren: './dictionary/dictionary.module#DictionaryPageModule' },
  { path: 'Events', loadChildren: './events/events.module#EventsPageModule' },
  { path: 'Mnemonics', loadChildren: './mnemonics/mnemonics.module#MnemonicsPageModule' },
  { path: 'Numbers', loadChildren: './numbers/numbers.module#NumbersPageModule' },
  { path: 'Tables', loadChildren: './tables/tables.module#TablesPageModule' },
  { path: 'EditNewWords', loadChildren: './edit-new-words/edit-new-words.module#EditNewWordsPageModule' },
  { path: 'AcrosticsTables', loadChildren: './acrostics-tables/acrostics-tables.module#AcrosticsTablesPageModule' },
  { path: 'ShowNewWords', loadChildren: './show-new-words/show-new-words.module#ShowNewWordsPageModule' },
  { path: 'ShowMnemonics', loadChildren: './show-mnemonics/show-mnemonics.module#ShowMnemonicsPageModule' },
  { path: 'ShowNumbers', loadChildren: './show-numbers/show-numbers.module#ShowNumbersPageModule' },
  { path: 'Timeline', loadChildren: './timeline/timeline.module#TimelinePageModule' },
  { path: 'MajorSystem', loadChildren: './major-system/major-system.module#MajorSystemPageModule' },
  { path: 'CelebrityNumbers', loadChildren: './celebrity-numbers/celebrity-numbers.module#CelebrityNumbersPageModule' },
  { path: 'AnagramGenerator', loadChildren: './anagram-generator/anagram-generator.module#AnagramGeneratorPageModule' },
  { path: 'MnemonicGenerator', loadChildren: './mnemonic-generator/mnemonic-generator.module#MnemonicGeneratorPageModule' },
  { path: 'ShowDictionary', loadChildren: './show-dictionary/show-dictionary.module#ShowDictionaryPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
