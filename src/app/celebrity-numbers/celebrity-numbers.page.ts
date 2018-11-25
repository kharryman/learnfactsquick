import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-celebrity-numbers',
  templateUrl: './celebrity-numbers.page.html',
  styleUrls: ['./celebrity-numbers.page.scss'],
})
export class CelebrityNumbersPage implements OnInit {
  celebrityNumbers:any;
  celebrities:any;
  isAllCelebrities:Boolean;
  isAbreviateCelebrities:Boolean;
  namenums:any;

  constructor(private nav: NavController, private alertCtrl: AlertController) { }

  goBack(event: Event){
    this.nav.navigateRoot('home');
  }

  ngOnInit() {
    this.celebrities = {};
    this.celebrities.color = "secondary";
    this.isAllClebrities=false;
    this.isAbreviateCelebrities=false;
    this.namenums =["Antonio>(Agitating, an Iraqi actor, was Prince Tariq in 2005 movie Dreamer Inspired by a True Story, jailed in Iraq war)>Albadran>(Arabs):Agitating>(Antonio)>Arabs>(Albadran)", "Anne>(Abandoning)>Boleyn>(Babies):Abandoning>(Anne)>Babies>(Boleyn)", "Alice>(Acting)>Cooper>(Creepy):Acting>(Alice)>Creepy>(Cooper)", "Albert>(Articulation, an actor, artist, producer, poet and rapper, born in Bronx, is black and Puerto Rican)>Daniels>(Drumming):Articulation>(Albert)>Drumming>(rapping, Daniels)", "Albert>(Applying)>Einstein>(Equations):Applying>(Albert)>Equations>(Einstein)", "Aretha-Louise>(Aloud,named for 2 aunts, born in Memphis, TN, 3rd of 4 children)>Franklin>(Fluctuating):Aloud>(Aretha)>Fluctuating>(Franklin)", "Ava>(Around)>Gardner>(Gables):Around>(Ava, born in NC , youngest of 7 children, famous for The Killer, in The Hucksters with Clark Gable, in The Barefoot Contessa with Humphrey Bogart)>Gables>(Gardner)", "Audrey>(Amsterdam, born in Brussels, Belgium, studied ballet, a fashion icon, died from appendiceal cancer)>Hepburn>(Hopping):Amsterdam>(Audrey)>Hopping>(Hepburn)", "Akinori>(Air, is an infielder now with the Tohoku Rakuten Golden Eagles of the Japanese Pacific League, was with the Tampa Rays)>Iwamura-Jr>(Impelling):Air>(Akinori)>Impelling>(Iwamura)", "Angelina>(Acting)>Jolie>(Judiciously):Acting>(Angelina)>Judiciously>(Jolie)", "Blythe>(Beaten, born in 1985 in New York, played in Girl Next Door, about girl beaten to death by aunt)>Auffarth>(Around):Beaten>(Blythe)>Around>(Auffarth)", "Bobbi>(Busting, born in NC was Kiki in sitcom House of Payne)>Baker>(Blacks, wrote thesis on how black preaching is not black culture):Busting>(Bobbi, in movie Madea Goes to Jail)>Blacks>(Baker)", "Bill>(Bathing)>Clinton>(Calvins):Bathing>(Bill)>Calvins>(Clinton)", "Bette>(Bearing)>Davis>(Deterministically, payed unsympathetic characters):Bearing>(Bette, had breast cancer)>Deterministically>(Davis)", "Bill>(Baseball)>George Evans>(Evaluator):Baseball>(Bill, was youngest umpire at 22 in 1906)>Evaluator>(Bill Evans)", "Benjamin>(Building)>Franklin>(Furnaces):Building>(Benjamin)>Furnaces>(Franklin)", "Bill>(Broadcasting)>Gates>(Gigabytes):Broadcasting>(Bill)>Gigabytes>(Gates)", "Buddy>(Buoyantly)>Holly>(Halting):Buoyantly>(Buddy, died in plane crash 1 and a half years after performing)>Halting>(Holly)", "Burl>(Burly, 1909-1995 a US actor, folk music singer, comedian)>Ives>(Inhaling):Burly>(died of oral cancer from cigars at age 86)>Inhaling>(Ives)", "Bjorn>(Bibliographying)>Johnson>(Jousiting):Bibliographying>(Bjorn, Choreographs fighting scenes)>Jousting>(Johnson)", "Camille>(Crashing)>Anderson>(Assemblages):Crashing>(Camille, was in movie Wedding Crashers with Owen Wilson)>Assemblages>(Anderson)", "Coby>(Catching)>Bryant>(Basketballs):Catching>(Coby)>Basketballs>(Bryant)", "Christopher>(Cruising)>Colombus>(Carribean):Cruising>(Christopher)>Carribean>(Colombus)", "Charles>(Checking)>Dickens>(Development):Checking>(Charles)>Development>(Dickens)", "Clint>(Cigar)>Eastwood>(Eating):Cigar>(Clint)>Eating>(Eastwood)", "Corey>(Colloseums)>Fischer>(Flying):Colloseums>(Corey, as officer Hines in Brewster McCloud)>Flying>(Fischer)", "Clark>(Chasing)>Gable>(Gales):Chasing>(Clark, in movie Gone with the Wind)>Gales>(Gable)", "Curt>(Chess)>Hansen>(Hurtling):Chess>(Curt, 2nd best Danish chess champion)>Hurlting>(Hansen)", "Chris>(Chatting)>Isaac>(Infatuations):Chatting>(Chris, has own talk show for 4 years 2001-2004)>Infatuations>(Isaak)", "Christopher>(Conducting)>Jones>(Journeys):Conducting>(Christopher, was captain of the Mayflower)>Journeys>(Jones)", "Dan>(Drumming)>Akyroid>(Amusement):Drumming>(Dan)>Amusment>(Akyroyd)", "David>(Dramatizing)>Burns>(Boogeying):Dramatizing>(David, played in Music Man 1959)>Boogying>(Burns)", "Davy>(Deer)>Crocket>(Catching):Deer>(Davy, died in Alamo, rejected A Jacksons Indian removal, was Tenessee HR Rep)>Catching>(Crocket)", "Danny>(Despoiling)>Devito>(Deniro):Despoiling>(Danny)>Deniro>(Devito)", "Duke>(Debonairly)>Ellington>(Ensembling):Debonairly>(Duke)>Ensembling>(Ellington)", "Don>(Delivering, was a boxer, beat Tank Abbot, Ken Shamrock, Gary Goodridge, and Gilbert Yvel)>Frye>(Fights):Delivering>(Don)>Fights>(Frye)", "Danny>(Decidedly)>Glover>(Geriatric):Decidedly>(Danny)>Geriatric>(Glover, relating to the old)", "David>(Driving)>Hasselhoff>(Hastily):Driving>(David, Knight Rider)>Hastily>(Hasselhoff)", "Daryl>(Discharging)>Irvine>(Inflammation):Discharging>(Daryl, was a replacement pitcher for the Red Sox)>Inflammation>(Irvine)", "Dwane>(Desintegrating)>Johnson>(Jaggeds):Desintegrating>(Dwane)>Jaggeds>(Johnson)", "Eva>(Educating)>Arden>(Administration):Educating>(Eva, was Rydell school principal in Grease I and II)>Administration>(Arden)", "Eric>(Engineering)>Bana>(Barbarians):Engineering>(was the Hulk directed by Ang Lee in 2003)>Barbarians>(Bana)", "Eric>(Electrifying)>Clapton>(Cream):Electrifying>(Eric, Brittish played in Yardbirds and Cream)>Cream>(Clapton)", "Ellen>(Engaging)>Degeneres>(Dames):Engaging>(Ellen)>Dames>(Degeneres)", "Emilio>(Eying)>Estevez>(Eagles):Eying>(Emilio)>Eagles>(Estevez)", "Ella>(Expanding)>Fitzgerald>(Frequencies):Expanding>(Ella, had vocal range that spanned 3 frequencies)>Frequencies>(Fitzgerald)", "Evan>(Entertaining, made TV show with Terry Bradshaw)>Golden>(Giants):Entertaining>(Evan, producer of Today in America with Terry Bradshaw)>Giants>(Golden)", "Eddie-Van>(Electrifying)>Halen>(Holland):Electrifying>(Eddie, born in Holland)>Holland>(Halen)", "Ed>(Eyra, a tropical wildcat, he replaced Ty Cobbs of Detroit Tigers)>Irvin>(Interchanging):Eyra>(long-bodied long-tailed tropical US wildcat, Ed, replaced Ty Cobbs of Detroit Tigers)>Interchanging>(Irvin)", "Elizabeth>(Exemplifying, model)>Jagger>(Jaggedness, daughter of McJagger)):Exemplifying>(Elizabeth, model and daughter of Mick Jagger born in 1984)>Jaggedness>(Jagger)", "Fred>(Forever, 76 yrs in Broadway)>Astaire>(Acting):Forever>(Fred, a Broadway actor for 76 years)>Acting>(Astaire)", "Floyd>(Feigning)>Buckley>(Boatswains):Feigning>(Floyd,voice popeye on radio)>Boatswains>(Buckley, officer on a merchant ship who controls seamen)", "Frank>(Frankly 1901-1960)>Cooper>(Championing):Frankly>(Frank, 1901-1961 known to play strong silent heroes)>Championing>(Cooper)", "Frank>(Formerly)>Delfino>(Dwarfing):Formerly>(Frank, was in Planet of Apes, Willy Wonka, The Odd Couple with wife was stand in on Brady Bunch, he was a midget)>Dwarfing>(Delfino)", "Femi>(Flashing, in If Looks Could Kill)>Emiola>(Evil):Flashing>(Femi, in If Looks Could Kill, promotion for Toyota Camrys, has Filipinan mother and Nigerian father, both chemists)>Evil>(Emiola)", "Farrah>(Fabulously, in Charlie's Angels, advertised hair products)>Fawcett>(Fluffy):Fabulously>(Farrah)>Fluffy>(Fawcett)", "Francis>(Fixing)>Galton>(Genomes):Fixing>(Francis, was cousin of Charles Darwin, est eugenics or selective breeding esp of humans)>Genomes>(Galton)", "Frankie>(Funny, a gay UK comic in Sgt Peppers movie)>Howerd>(Homosexually):Funny>(Frankie, a gay UK comic man in Sgt Peppers Lonely Hearts Club band movie)>Homosexually>(Howerd, name means to be different)", "Frankie>(Following, of Sicilian, Italian origin, on many TV shows)>Ingrassia>(Italians):Following>(Frankie, of Sicilian Italian origin, on many TV shows)>Italians>(Ingrassia)", "Fran>(Frollicking, in 1963 Pink Panther movie)>Jeffries>(Jaguars):Frollicking>(Fran, was in 1963 Pink Panther movie)>Jaguars>(Jeffries)", "Gillian>(Grovelling, Scully in X files)>Anderson>(Arcane):Grovelling>(Gillian, was agent Scully in X-files)>Arcane>(Anderson)", "George>(Governing)>Bush>(Bullishly):Governing>(George)>Bullishly>(Bush)", "Gary>(Grueling, did over 100 movies)>Cooper>(Cowboys):Grueling>(Gary, did over 100 movies)>Cowboys>(Cooper)", "Glenn>(Gold, won 3 gold medals in 1956-1960, coached by Larry Snyder who coached Jesse Owens)>Davis>(Dashing):Gold>(Glenn, won 3 gold medals in 1956-1960, coached by Larry Snyder who also coached Jesse Owens)>Dashing>(Davis)", "George>(Guarding)>Eliot>(Estrogen):Guarding>(George, really shes called Mary, wrote Middlemarch)>Estrogen>(Eliot)", "Gustave>(Guilessly)>Flaubert>(Fornicating):Guilessly>(Gustave, a moustache Frenchman writer who never married but died at age 58 from venereal disease)>Fornicating>(Flaubert)", "Galileo>(Guessing)>Galilee>(Geophysics):Guessing>(Galileo)>Geophysics>(Galilee)", "Goldie>(Guiding)>Hawn>(Heterodox):Guiding>(Goldie, is a Jewish Buddhist, father descendant of Edward Rutelage, youngest signer of Dec of Ind)>Heterodox>(Hawn)", "Garth>(Guarding, 3rd baseman of Blue Jays, born in Arcata CA)>Iorg>(Isoceles):Guarding>(Garth, 3rd baseman of Toronto Blue Jays, born in Arcata, CA)>Isoceles>(Iorg=3)", "Gerry>(Gorilla, voice of Betty Rubble)>Johnson>(Jawing):Gorilla>(Gerry, was voice of Betty Rubble in final seasons of Flinstones)>Jawing>(Jerry)", "Hank>(Hersheys)>Aaron>(Astounding):Hersheys>(Hank, beat Babe Ruths record with 755 home runs, playing for Braves and Brewers)>Astounding>(Aaron)", "Humphrey>(Humans, in Cassablanca)>Bogart>(Bettering):Humans>(Humphrey, hero in Casablanca, city in Morocco 1942 Vichy France)>Bettering>(Bogart)", "Harriet>(Hydrating)>Creighton>(Crossovers):Hydrating>(Harriet, a botanist with Barbara McClintock discovered genetics of chromosomes)>Crossovers>(Creighton)", "Hugh>(Hastened, footballer of Scotland, retired in early 30s)>Davidson>(Dropkicks):Hastened>(Hugh, footballer of Scotland, retired)>Dropkicks>(Davidson)", "Hunter>(Horse, was QB for Cowboys, Chargers, Raiders and Broncos in early 60s)>Enis>(Ejecting):Horse>(Hunter, was QB for Dallas Texans in 60, Chargers in 61, Raiders in 62, and Broncos in 62)>Ejecting>(Enis)", "Harrison>(Hunting)>Ford>(Freaks):Hunting>(Harrison)>Freaks>(Ford)", "Humphrey>(Homed-in, UK navigator in 1583 found 1st UK colony in Newfoundland)>Gilbert>(Great Britain):Homed-in>(Humphrey, English navigator in 1583 set up 1st English colony in Newfoundland)>GreatBritain>(Gilbert)", "Heinrich>(Harmonicizing)>Hertz>(Hertz 1857-1894):Harmonicizing>(Heinrich, German physicist, 1st to make artificial electromagnetic waves 1857-1894)>Hertz>(Hertz)", "Henrik>(Honestly, Norwegian playwright, 2nd best to Shakespeare)>Ibsen>(Inscribing):Honestly>(Henrik, a Norwegian playwright, 2nd in ability to Shakespear)>Inscribing>(Ibsen)", "Herrick>(Hypothermically, cryogenic worker, discovered heavy isotopes of oxygen)>Johnston>(Joinging):Hypothermically>(Herrick, US man who founded heavy isotopes of oxygen and worked hard in cryogenics)>Joining>(Johnston)", "Ivy>(Intoxicating, pitcher for the Yankees in 31-38,Red Sox 32-33,Browns 34-36, Indians 47)>Andrews>(Arms):Intoxicating>(Ivy, a pitcher called poison ivy for the Yankees in 31-38,Red Sox 32-33,Browns 34-36, Indians 47)>Arms>(Andrews)", "Ibn>(Insistently)>Battuta>(Bestriding):Insistently>(Ibn)>Bestriding>(Battuta)", "Isis>(Impersonated, played younger Whoopi in SIster Act)>Carmen>(Jones, Choirists):Impersonated>(Isis, played younger version of Whoopi Goldberg in Sister Act, and as young Guinan in Star Trek epsisode, Rascals)>Choirist>(Carmen)", "Irene>(Immorally, played in silent films, violated Mann Act with Ray Owens)>Dalton>(Died):Immoraly>(Irene, was a US actress in silent films, violated Mann act by prostitution with Ray Owens, millionaire son of Mike Owens inventor of bottle machine, she died suddenly at 33 yrs age)>Died>(Dalton)", "Ike>(Frederick George, Indigenously, was outfielder 4 seasons for Indians in 25-27, and WHite Sox in 31)>Eichrodt>(Elemental):Indigenously>(played outfielder 4 seasons for Indians 25-27 and White Sox in 31)>Elemental", "Ira>(James Pete, Impacting, played 13 seasons as batter and outfielder in American and NL with Tigers, 17-23, Red Sox 23-29, Washington Senators 29, and Pirates 29-30 with a high bat average and number of runs and catches)>Flagstead>(Frontier):Impacting>(Ira, played 13 seasons as batter and outfielder in American and NL with Tigers, 17-23, Red Sox 23-29, Washington Senators 29, and Pirates 29-30 with a high bat average and number of runs and catches)>Frontier>(Flagstead)", "Indira>(Isoceles, was 3rd PM of India, only child of Jawaharlal Nehru, assassinated after Op Blue against Amritsar Sikhs)>Gandhi>(Garroted):Isoceles>(was 3rd PM of India, only child of Jawaharlal Nehru, assassinated after Op Blue against Amritsar Sikhs)>Garroted>(Gandhi)", "Ike>(Inverting, a pinch hitter or replacement batter for Mets in 74 then traded to CA Angels 75-79, had a strong arm and .207 bat aver)>Hampton>(Heavily):Inverting>(Ike, was a pinch hitter or replacement batter for Mets in 74 then traded to CA Angels 75-79, had a strong arm and .207 bat average)>Heavily>(Hampton)", "Isabel>(Impersonating, a US actress who played the Schoolmistress, retired in 36 and married Will H Thompson until he died in 23, made 33 productions in 50 yrs)>Irving>(Intellectuals):Impersonating>(Isabel, a US actress who played the Schoolmistress, retired in 36 and married Will H Thompson until he died in 23, made 33 productions in 50 yrs)>Intellectuals>(Irving)", "Ivyann-Schwan>(Immaturely, Ivyann-Schwan, was in Miracle on 34th, Sound of Music, Parenthood, Problem Child 2, and Bill Nye Science Guy, JC Pennys and Kellogs commercials)>Jones>(Jingling):Immaturely>(Ivyann-Schwan, was in Miracle on 34th, Sound of Music, Parenthood, Problem Child 2, and Bill Nye Science Guy, JC Pennys and Kellogs commercials)>Jingling>(Jones)", "Jane>(Jotting, a writer 1775-1810 who wrote novels about landed gentry and womens dependence to man, posthumously famous)>Austen>(Actualities):Jotting>(Jane, a writer 1775-1810 who wrote novels about landed gentry and womens dependence to man, posthumously famous)>Actualities>(Austen)", "Jack>(Jerking, Jack 1894-1974, a Jewish violinist comedian known for his timing, played on CBS radio)>Benny>(Bowstrings):Jerking>(Jack 1894-1974, a Jewish violinist comedian known for his timing, played on CBS radio)>Bowstrings>(Benny)", "James>(Journeying)>Cook>(Ceaselessly):Journeying>(James)>Ceaselessly>(Cook)", "James>(Jockeying, was in John Steinbecks East of Eden and Rebel Without a Cause, died in a car crash age 24)>Dean>(Destruction):Jockeying>(James, was in John Steinbecks East of Eden and Rebel Without a Cause, died in a car crash age 24)>Destruction>(Dean)", "Jacob>(Junoesqueing, suggestive of a statue, 1880-1959 English born in US noted for busts and large controversial works)>Epstein>(Exotically):Junoesqueing>(suggestive of a statue, Jacob, 1880-1959 English born in US noted for busts and large controversial works)>Exotically>(Epstein)", "Jane>(Judging, actor, writer, fitness instructor, descendant of Lady Jane Seymore, Henry VIIIs 3rd wife)>Fonda>(Fitness):Judging>(Jane, actor, writer, fitness instructor, descendant of Lady Jane Seymore, Henry VIIIs 3rd wife)>Fitness>(Fonda)", "Judy>(Jadedly, born Frances Ethel Gumm, was in Wiz of Oz and Judgement at Nuremberg, had 5 marriages, execs told her she was unattractive and she owed 100000s in back taxes so she was an alcoholic and overdosed on drugs at age 47)>Garland>(Gone):Jadedly>(Judy, born Frances Ethel Gumm, was in Wiz of Oz and Judgement at Nuremberg, had 5 marriages, execs told her she was unattractive and she owed 100000s in back taxes so she was an alcoholic and overdosed on drugs at age 47)>Gone>(Garland)", "Jimmy>(Jamming)>Hendrix>(Hippocritically):Jamming>(Jimmy)>Hippocritically>(Hendrix)", "Judas>(Jesus)>Iscariot>(Insidiating or lie in ambush for):Jesus>(Judas)>Insidiating>(lie in ambush for, Iscariot)", "Jon-Bon>(Journeying)>Jovi>(Jaggedly):Journeying>(Jon)>Jaggedly>(Jovi)"];
  }

  getCelebrityNumbers(){
    console.log("getCelebrityNumbers called.");
    var eveyear = null;
    var text = "";
    if (eveyear!=null)
    {
      var nums=eveyear.split(";");
      var abbcelnam=true;
    }
    if (eveyear==null)
    {
      var studynumcel=this.isAllClebrities;//document.getElementById("studynumcel").checked;//study celebrity numbers
      var abbcelnam=this.isAbreviateCelebrities;//document.getElementById("abbcelnam").checked;//abbreviate celebrity name
      if (studynumcel==false)
      {
        var numsspl=this.celebrityNumbers;
        if(numsspl==null){
          let myAlert = this.alertCtrl.create({
            title: 'Input Error',
            subTitle: 'Must enter a string of numbers',
            buttons: ['Dismiss']
          });
          //myAlert.present();
          return;
        }
        var nums=numsspl.split(";");
      }
      if (studynumcel==true)
      {
        var nums=new Array();
        nums.push("1111121213131414151516161717181819191010212122222323242425252626272728282929202031313232333334343535363637373838393930304141424243434444454546464747484849494040515152525353545455555656575758585959505061616262636364646565666667676868696960607171727273737474757576767777787879797070818182828383848485858686878788888989808091919292939394949595969697979898999990900101020203030404050506060707080809090000");
      }
      var bold=true;
      var und=false;
      var numfont="12pt";
      text += "<p style=\"font-size:" + font + "\"" +"&nbsp;" + "style=\"font-family:times new roman\">";
      if (bold==true && und!=true)
      {
        text += "<b>";
      }
      if (und==true && bold!=true)
      {
        text += "<u>";
      }
      if (bold==true && und==true)
      {
        text += "<u><b>";
      }
      for (i=0;i<nums.length;i++)
      {
        var k=i+1;
        var k=k.toString();
        var ct=1;
        var numssplspl=nums[i].split("");
        var len=numssplspl.length;
        var disnumtex="NUMBER ";
        if (studynumcel==false){text += disnumtex.bold().big() + k.bold().big() + ": ";}
        for (j=0;j<len;j++)
        {
          text += numssplspl[j].bold().big();
          if (ct==4)
          {
            if (j!=(len-1))
            {
              text += "-";
            }
            var ct=0;
          }
          ct++;
        }
        text += "<br />";
      }
      text += "<br />" + "<br />";
    }
    var onlynums=/[0-9]/;
    for (i=0;i<nums.length;i++)
    {
      if (nums[i].match(onlynums)==null)
      {
        throw alert("MUST ENTER ONLY NUMBERS." + nums[i]);
      }
      if(nums[i].length<2)
      {
        throw alert("MUST ENTER A LENGTH OF 2 OR MORE.");
      }
    }
    var retarr=new Array();
    for (z=0;z<nums.length;z++)
    {
      var y=z+1;
      var y=y.toString();
      if (eveyear==null && studynumcel==false){text += disnumtex.bold().big() + y.bold().big() + ":<br />";}
      var numspl=nums[z].split("");
      var len=numspl.length;
      var rem=len-(4*Math.floor(len/4));
      var ind="";
      var x=Math.ceil(len/2);
      var textele="";
      if (rem==0)
      {
        var alt=0;
        for(i=0;i<x;i++)//for every 2 numbers
        {
          var ind="";//indicator
          var pos="";//position
          var db=i*2;
          var dbp=(i*2)+1;
          var pos=pos.concat(numspl[db]);
          var pos=pos.concat(numspl[dbp]);
          if (numspl[db]!=0 && numspl[db]!=1)
          {
            var ind=ind.concat(numspl[db]-1);
          }
          if (numspl[db]==0)
          {
            var ind=ind.concat(9);
          }
          if (numspl[dbp]!=0)
          {
            var ind=ind.concat(numspl[dbp]-1);
          }
          if (numspl[dbp]==0)
          {
            var ind=ind.concat(9);
          }
          var namenumsspl=this.namenums[ind].split(":");
          if (alt==0)
          {
            if (eveyear==null)
            {
              text += "<b>";
            }
            var names=namenumsspl[0].split(">");
            if (abbcelnam==true)
            {
              var sav1a=names[0];
              var sav1b=names[2];
            }
            if (abbcelnam==false)
            {
              var sav1a=names[0].concat(names[1]);
              var sav1b=names[2].concat(names[3]);
            }
            var spos=pos;
            var alt=1;
            continue;
          }
          if (alt==1)
          {
            var actions=namenumsspl[1].split(">");
            if (abbcelnam==true)
            {
              var sav2a=actions[0];
              var sav2b=actions[2];
              if (eveyear!=null)
              {
                var textele=textele.concat(sav1a," ",sav1b," ",sav2a," ",sav2b," ");
              }
              if (eveyear==null)
              {
                text += spos + pos + ":</b>" + "<br />" + sav1a + "&nbsp;" + sav1b + "&nbsp;" + sav2a + "&nbsp;" + sav2b + "<br />";
              }
            }
            if (abbcelnam==false)
            {
              var sav2a=actions[0].concat(actions[1]);
              var sav2b=actions[2].concat(actions[3]);
              if (eveyear==null)
              {
                text += spos + pos + ":</b>" + "<br />" + sav1a + "<br />" + sav1b + "<br />" + sav2a + "<br />" + sav2b + "<br />";
              }
            }
            var alt=0;
            continue;
          }
        }//end for loop
        retarr.push(textele);
      }//end if rem is 0
      if (rem==1 || rem==3)
      {
        var alt=0;
        for(i=0;i<x;i++)
        {
          var last=x-1;
          var prev=x-2;
          var ind="";
          var pos="";
          if (i!=last)
          {
            var db=i*2;
            var dbp=(i*2)+1;
          }
          if (i==last)
          {
            var db=len-2;
            var dbp=len-1;
          }
          var pos=pos.concat(numspl[db]);
          var pos=pos.concat(numspl[dbp]);
          if (numspl[db]!=0 && numspl[db]!=1)
          {
            var ind=ind.concat(numspl[db]-1);
          }
          if (numspl[db]==0)
          {
            var ind=ind.concat(9);
          }
          if (numspl[dbp]!=0)
          {
            var ind=ind.concat(numspl[dbp]-1);
          }
          if (numspl[dbp]==0)
          {
            var ind=ind.concat(9);
          }
          var namenumsspl=this.namenums[ind].split(":");
          if (i<last)
          {
            if (alt==0)
            {
              var names=namenumsspl[0].split(">");
              if (abbcelnam==true)
              {
                var sav1a=names[0];
                var sav1b=names[2];
              }
              if (abbcelnam==false)
              {
                var sav1a=names[0].concat(names[1]);
                var sav1b=names[2].concat(names[3]);
              }
              var spos=pos;
              var alt=1;
              continue;
            }
            if (alt==1)
            {
              var actions=namenumsspl[1].split(">");
              if (abbcelnam==true)
              {
                var sav2a=actions[0];
                var sav2b=actions[2];
              }
              if (abbcelnam==false)
              {
                var sav2a=actions[0].concat(actions[1]);
                var sav2b=actions[2].concat(actions[3]);
              }
              if (i!=prev)
              {
                if (abbcelnam==true)
                {
                  if (eveyear!=null)
                  {
                    var textele=textele.concat(sav1a," ",sav1b," ",sav2a," ",sav2b," ");
                  }
                  if (eveyear==null)
                  {
                    text += spos + pos + ":</b>" + "<br />" + sav1a + "&nbsp;" + sav1b + "&nbsp;" + sav2a + "&nbsp;" + sav2b + "<br />";
                  }
                }
                if (abbcelnam==false)
                {
                  if (eveyear==null)
                  {
                    text += spos + pos + ":</b>" + "<br />" + sav1a + "<br />" + sav1b + "<br />" + sav2a + "<br />" + sav2b + "<br />";
                  }
                }
              }
              if (i==prev)
              {
                var actions=namenumsspl[1].split(">");
                if (abbcelnam==true)
                {
                  var ssav2a=actions[0];
                  var ssav2b=actions[2];
                }
                if (abbcelnam==false)
                {
                  var ssav2a=actions[0].concat(actions[1]);
                  var ssav2b=actions[2].concat(actions[3]);
                }
                var sspos=pos;
              }
              var alt=0;
              continue;
            }
          }
          if (i==last && rem==3)
          {
            var actions=namenumsspl[1].split(">");
            if (abbcelnam==true)
            {
              var sav2a=actions[0];
              var sav2b=actions[2];
              if (eveyear!=null)
              {
                var textele=textele.concat(sav1a," ",sav1b," ",sav2a," ",sav2b," ");
              }
              if (eveyear==null)
              {
                spos + pos + ":</b>" + "<br />" + sav1a + "&nbsp;" + sav1b + "&nbsp;" + sav2a + "&nbsp;" + sav2b + "<br />";
              }
            }
            if (abbcelnam==false)
            {
              var sav2a=actions[0].concat(actions[1]);
              var sav2b=actions[2].concat(actions[3]);
              if (eveyear==null)
              {
                text += spos + pos + ":</b>" + "<br />" + sav1a + "<br />" + sav1b + "<br />" + sav2a + "<br />" + sav2b + "<br />";
              }
            }
          }
          if (i==last && rem==1)
          {
            var actions=namenumsspl[1].split(">");
            if (abbcelnam==true)
            {
              var sav2a=actions[0];
              var sav2b=actions[2];
              if (eveyear!=null)
              {
                var textele=textele.concat(sav1a," ",sav1b," ",ssav2a," ",ssav2b," ",sav2a," ",sav2b);
              }
              if (eveyear==null)
              {
                text += spos + sspos + pos + ":</b>" + "<br />" + sav1a + "&nbsp;" + sav1b + "&nbsp;" + ssav2a + "&nbsp;" + ssav2b + "&nbsp;" + sav2a + "&nbsp;" + sav2b;
              }
            }
            if (abbcelnam==false)
            {
              var sav2a=actions[0].concat(actions[1]);
              var sav2b=actions[2].concat(actions[3]);
              if (eveyear==null)
              {
                text += spos + sspos + pos + ":</b>" + "<br />" + sav1a + "<br />" + sav1b + "<br />" + ssav2a + "<br />" + ssav2b + "<br />" + sav2a + "<br />" + sav2b + "<br />";
              }
            }
          }
        }//end for loop
        retarr.push(textele);
      }
      if (rem==2)
      {
        var alt=0;
        for(i=0;i<x;i++)
        {
          var last=x-1;
          var prev=x-2;
          var ind="";
          var pos="";
          var db=i*2;
          var dbp=(i*2)+1;
          var pos=pos.concat(numspl[db]);
          var pos=pos.concat(numspl[dbp]);
          if (numspl[db]!=0 && numspl[db]!=1)
          {
            var ind=ind.concat(numspl[db]-1);
          }
          if (numspl[db]==0)
          {
            var ind=ind.concat(9);
          }
          if (numspl[dbp]!=0)
          {
            var ind=ind.concat(numspl[dbp]-1);
          }
          if (numspl[dbp]==0)
          {
            var ind=ind.concat(9);
          }
          var namenumsspl=this.namenums[ind].split(":");
          if (i<last && alt==0)
          {
            var spos=pos;
            var names=namenumsspl[0].split(">");
            if (abbcelnam==true)
            {
              var sav1a=names[0];
              var sav1b=names[2];
            }
            if (abbcelnam==false)
            {
              var sav1a=names[0].concat(names[1]);
              var sav1b=names[2].concat(names[3]);
            }
            var alt=1;
            continue;
          }
          if (i<last && alt==1)
          {
            var alt=0;
            var actions=namenumsspl[1].split(">");
            if (abbcelnam==true)
            {
              var sav2a=actions[0];
              var sav2b=actions[2];
            }
            if (abbcelnam==false)
            {
              var sav2a=actions[0].concat(actions[1]);
              var sav2b=actions[2].concat(actions[3]);
            }
            if (i!=prev)
            {
              if (abbcelnam==true)
              {
                if (eveyear!=null)
                {
                  var textele=textele.concat(sav1a," ",sav1b," ",sav2a," ",sav2b," ");
                }
                if (eveyear==null)
                {
                  text += spos + pos + ":</b>" + "<br />" + sav1a + "&nbsp;" + sav1b + "&nbsp;" + sav2a + "&nbsp;" + sav2b + "<br />";
                }
              }
              if (abbcelnam==false)
              {
                if (eveyear==null)
                {
                  text += spos + pos + ":</b>" + "<br />" + sav1a + "<br />" + sav1b + "<br />" + sav2a + "<br />" + sav2b + "<br />";
                }
              }
            }
            if (i==prev)
            {
              var actions=namenumsspl[1].split(">");
              if (abbcelnam==true)
              {
                var ssav2a=actions[0];
                var ssav2b=actions[2];
              }
              if (abbcelnam==false)
              {
                var ssav2a=actions[0].concat(actions[1]);
                var ssav2b=actions[2].concat(actions[3]);
              }
              var sspos=pos;
            }
            continue;
          }
          if (i==last)
          {
            var actions=namenumsspl[1].split(">");
            if (abbcelnam==true)
            {
              var sav2a=actions[0];
              var sav2b=actions[2];
              if (eveyear!=null)
              {
                var textele=textele.concat(sav1a," ",sav1b," ",ssav2a," ",ssav2b," ",sav2a," ",sav2b," ");
              }
              if (eveyear==null)
              {
                text += spos + sspos + pos + ":</b>" + "<br />" + sav1a + "&nbsp;" + sav1b + "&nbsp;" + ssav2a + "&nbsp;" + ssav2b + "&nbsp;" + sav2a + "&nbsp;" + sav2b + "<br />";
              }
            }
            if (abbcelnam==false)
            {
              var sav2a=actions[0].concat(actions[1]);
              var sav2b=actions[2].concat(actions[3]);
              if (eveyear==null)
              {
                text += spos + sspos + pos + ":</b>" + "<br />" + sav1a + "<br />" + sav1b + "<br />" + ssav2a + "<br />" + ssav2b + "<br />" + sav2a + "<br />" + sav2b + "<br />";
              }
            }
          }
        }//end loop
        retarr.push(textele);
      }//end if rem is 2
      if (eveyear==null){text += "<br />";}
    }//end num list loop
    if (eveyear==null)
    {
      if (bold==true && und!=true)
      {
        text += "</b>";
      }
      if (und==true && bold!=true)
      {
        text += "</u>";
      }
      if (bold==true && und==true)
      {
        text += "</u></b>";
      }
      text += "</p>";
    }
    if (eveyear!=null)
    {
      return retarr;
    }else{
      console.log("Text = " + text);
    }
  }

}
