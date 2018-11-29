import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { NavController} from '@ionic/angular';
//import { SQLite, SQLiteDatabaseConfig } from '@ionic-native/sqlite';
//import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Component({
  selector: 'app-anagram-generator',
  templateUrl: './anagram-generator.page.html',
  styleUrls: ['./anagram-generator.page.scss'],
})
export class AnagramGeneratorPage implements OnInit {
  anagrams:any;
  @ViewChild('anagramResults') anagramResults:ElementRef;
  //public database: SQLiteObject;
  public invoices: Array<Object>;
  public counter : number = 0;

  constructor(private nav: NavController){}//, private sqlite : SQLite) { }

  goBack(event: Event){
    this.nav.navigateRoot('home');
  }

  ngOnInit() {
    this.anagrams = {};
    this.anagrams.isAllCombinations=false;
    this.anagrams.isConsonantsVowels=false;
    this.anagrams.isLimitedLetters=false;
    this.anagrams.color = "secondary";
  }

  ionViewDidEnter(){
    console.log('view did enter');
    /*this.sqlite.create({name: "dictionary.db", location: "default"}).then((db : SQLiteObject) => {
      this.database = db;
      //this.createTable();
    }, (error) => {
      console.log("ERROR: ", error);
    });
    */
  }

   /*
  public createTable(){
    this.database.executeSql('create table if not exists invoices(name VARCHAR(32))', {})
        .then(() => {
            console.log('Table Invoice created !');

        })
        .catch(e => console.log(e));
   }
  */

  makeAnagrams(){
    console.log("makeAnagrams called.");
    /*
    input = anagram_input.getText().toString();
    is_all_combos = check_all_combos.isChecked();
    is_like_vowels = check_like_vowels.isChecked();
    is_limited_letters = check_limited_letters.isChecked();
    if (is_limited_letters) {
    number_letters = Integer.parseInt(input_number_letters
    .getText().toString());
  }

  String[] acrspl = explode(input);
  int al = input.length();
  if (is_limited_letters) {
  al = number_letters;
}
String vowexp = ".*[aeiou].*";
boolean matvow = false;
String newtex = "";
input = input.toLowerCase(Locale.US);
if (input.matches(vowexp)) {
matvow = true;
}
String[] input_split = explode(input);
String sql_search = "";
String sql_input = input.toUpperCase(Locale.US);
for (int i = 0; i < input_split.length; i++) {
sql_input = input.replaceFirst(input_split[i],
input_split[i].toLowerCase(Locale.US));
}
sql_input.replaceAll("[A-Z]", "");
String[] sql_input_split = explode(sql_input);
for (int i = 0; i < sql_input_split.length; i++) {
sql_search += " AND Word LIKE '%" + input_split[i] + "%'";
}
words_list.clear();
defs_list.clear();
Cursor c_sel = MainLfqActivity.getMiscDb().rawQuery(
"SELECT " + dictionarya.Word + "," + dictionarya.Definition + " FROM " + tables.dictionarya + " WHERE " + dictionarya.Word + " NOT LIKE '%[.,;-_]%'"
+ sql_search + " ORDER BY Word", null);
if (c_sel.moveToFirst()) {
do {
words_list
.add(c_sel.getString(c_sel.getColumnIndex("Word")));
defs_list.add(c_sel.getString(c_sel
.getColumnIndex("Definition")));
} while (c_sel.moveToNext());
}
c_sel.close();
boolean done = false;
String my_word;
String acronym2, spcwor;
String[] acr2spl;
int word_count = 0, vowct, acrind, ct, wl, start;
if (matvow || is_like_vowels) {

for (int inc = 1; inc < 6; inc++) {
for (int w_ct = 0; w_ct < words_list.size(); w_ct++) {
my_word = words_list.get(w_ct);
worspl = explode(my_word.toLowerCase(Locale.US));
wl = my_word.length();
vowct = 0;
ct = 0;
acrind = 0;
spcwor = "";
acronym2 = input;
for (k = 0; k < wl; k++) {
if (k != vowct || ct == al) {
spcwor = spcwor
+ worspl[k].toLowerCase(Locale.US);
}
if (is_all_combos) {
if (acronym2.contains(worspl[vowct]) == false
&& k == vowct && ct != al) {
break;
}
if (acronym2.contains(worspl[vowct]) != false
&& k == vowct && ct != al) {
acr2spl = explode(acronym2);
start = acronym2.indexOf(worspl[vowct]);

acr2spl = spliceArray(acr2spl, start);
acronym2 = arrToString(acr2spl);
if ((vowct + inc) < wl) {
vowct = vowct + inc;
}
ct++;
spcwor = spcwor
+ worspl[k].toUpperCase(Locale.US);
}
}
if (is_all_combos == false) {
if (!worspl[vowct].equals(acrspl[acrind])
&& k == vowct && ct != al) {
break;
}
if (worspl[vowct].equals(acrspl[acrind])
&& k == vowct && ct != al) {
if ((vowct + inc) < wl) {
vowct = vowct + inc;
}
if ((acrind + 1) < al) {
acrind++;
}
ct++;
spcwor = spcwor
+ worspl[k].toUpperCase(Locale.US);
}
}
}
if (ct == al) {
done = true;
word_count++;
newtex += word_count + ")" + spcwor;
if (!defs_list.get(w_ct).equals("")) {
newtex += "(" + defs_list.get(w_ct) + ")<br />";
}
if (defs_list.get(w_ct).equals("")) {
newtex += "<br />";
}
publishProgress(newtex);

}

}// end for each word
}
if (!done) {
publishProgress("RESULTS: SORRY TRY AGAIN");
}

}

if (matvow == false && is_like_vowels == false) {

for (int w_ct = 0; w_ct < words_list.size(); w_ct++) {
my_word = words_list.get(w_ct).toLowerCase(Locale.US);
worspl = explode(my_word);
wl = my_word.length();
if (wl >= al) {
ct = 0;
acrind = 0;
spcwor = "";
acronym2 = input;
for (k = 0; k < wl; k++) {
if (worspl[k].matches(vowexp) != false || ct == al) {
spcwor = spcwor
+ worspl[k].toLowerCase(Locale.US);
}
if (is_all_combos) {
if (acronym2.contains(worspl[k]) != false) {
ct++;
acr2spl = explode(acronym2);
start = acronym2.indexOf(worspl[k]);
acr2spl = spliceArray(acr2spl, start);
acronym2 = arrToString(acr2spl);
spcwor = spcwor
+ worspl[k].toUpperCase(Locale.US);
continue;
}
if (acronym2.contains(worspl[k]) == false
&& worspl[k].matches(vowexp) == false
&& ct != al) {
break;
}
}
if (is_all_combos == false) {
if (!worspl[k].equals(acrspl[acrind])
&& worspl[k].matches(vowexp) == false
&& ct != al) {
break;
}
if (worspl[k].equals(acrspl[acrind])
&& ct != al) {
ct++;
if ((acrind + 1) < al) {
acrind++;
}
spcwor = spcwor
+ worspl[k].toUpperCase(Locale.US);
}
}
}
if (ct == al) {
done = true;
word_count++;
newtex += word_count + ")" + spcwor;
if (!defs_list.get(w_ct).equals("")) {
newtex = newtex + "(" + defs_list.get(w_ct)
+ ")<br />";
}
if (defs_list.get(w_ct).equals("")) {
newtex = newtex + "<br />";
}
publishProgress(newtex);

}

}
}// while for each word

if (!done) {
publishProgress("RESULTS: SORRY TRY AGAIN", "");
}
}

return null;
*/
}

}
