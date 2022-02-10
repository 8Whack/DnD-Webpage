const express = require('express');
const cors = require('cors');
const app = express();

// require('dotenv').config();
// const {CONNECTION_STRING} = process.env;
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize(CONNECTION_STRING, {
//     dialect: 'postgres',
//     dialectOptions: {
//         ssl: {
//             rejectUnauthorized: false
//         }
//     }
//   })

app.use(cors());
app.use(express.json());

savedChar = [{
    name: "G'resh Jakanto",
    charClass: 'Level 9 Bloodhunter',
    background: 'Haunted One',
    race: 'Tiefling Male',
    alignment: 'Chaotic Neutral',
    experience: 'Milestone',
    str: '14',
    dex: '12',
    con: '15',
    int: '13',
    wis: '14',
    cha: '10',
    strMod: '+2',
    dexMod: '+1',
    conMod: '+2',
    intMod: '+1',
    wisMod: '+2',
    chaMod: '+0',
    insp: true,
    prof: '4',
    passPercept: '12',
    strSavProf: true,
    dexSavProf: false,
    conSavProf: false,
    intSavProf: true,
    wisSavProf: true,
    chaSavProf: false,
    strSav: '6',
    dexSav: '1',
    conSav: '2',
    intSav: '5',
    wisSav: '6',
    chaSav: '0',
    acroProf: false,
    AHProf: false,
    arcProf: true,
    athProf: true,
    decProf: false,
    hisProf: false,
    insProf: false,
    intProf: false,
    invProf: false,
    medProf: false,
    natProf: false,
    percProf: false,
    perfProf: false,
    persProf: false,
    relProf: false,
    sliProf: false,
    steProf: false,
    surProf: true,
    acro: '1',
    AH: '2',
    arc: '5',
    ath: '6',
    dec: '0',
    his: '1',
    ins: '2',
    intel: '0',
    inv: '1',
    med: '2',
    nat: '1',
    perc: '2',
    perf: '0',
    pers: '0',
    rel: '1',
    sli: '1',
    ste: '1',
    sur: '6',
    armor: '11',
    init: '1',
    speed: '30',
    hp: '81',
    tempHP: '5',
    hitDice: '9 d10',
    suc1: true,
    suc2: true,
    suc3: false,
    fail1: true,
    fail2: false,
    fail3: false,
    attacks: '\n' +
      '                    \n' +
      '                <li>Dagger: Hit/DC = +6, Damage = 1d4+2</li><li>Greatsword: Hit/DC = +6, Damage = 2d6+2</li><li>Unarmed Strike: Hit/DC = +6, Damage = 3</li>',
    spells: '\n' +
      '                   \n' +
      '                <li>Eldritch Blast: Max Level: Cantrip</li><li>Hellish Rebuke: Max Level: 1<input type="checkbox"><input type="checkbox"></li><li>Scorching Ray: Max Level: 2<input type="checkbox"><input type="checkbox"></li>',
    equipment: '\n' +
      '                    \n' +
      '                <li><input class="skills" type="number">Ring of Spell Turning</li><li><input class="skills" type="number">Armor of Force Resistance</li><li><input class="skills" type="number">Demonology Books</li><li><input class="skills" type="number">Holy Symbol</li><li><input class="skills" type="number">Rope, 50ft</li>',
    personality: '\n' +
      '                    \n' +
      '                <li>Somber</li><li>Quick to Anger</li><li>Insolent</li><li>Cocky</li><li>Always willing to fight </li>',
    ideals: '\n' +
      '                    \n' +
      '                <li>Monsters are Evil</li><li>Evil should be Purged</li>',
    bonds: '\n' +
      '                    \n' +
      '                <li>Revenge for Lost Lover</li><li>Sworn to serve Vaius, the Demon King</li>',
    flaws: '\n' +
      '                    \n' +
      '                <li>Stubborn</li><li>Sees the worst in others</li>',
    profAndLang: '\n' +
      '                    \n' +
      "                <li>Light &amp; Medium Armor</li><li>Shields</li><li>Firearms, Martial &amp; Simple Weapons</li><li>Alchemist's Supplies</li>",
    featAndTrait: '\n' +
      '                    \n' +
      '                <li>Hellish Resistance</li><li>Infernal Legacy</li><li>Darkvision</li>'
  }, {
    name: 'Xyndr Qsp',
    charClass: 'Level 3 Warlock',
    background: 'Urchin',
    race: 'Male Satyr',
    alignment: 'Chaotic Evil',
    experience: '1200',
    str: '13',
    dex: '15',
    con: '12',
    int: '8',
    wis: '10',
    cha: '17',
    strMod: '+1',
    dexMod: '+2',
    conMod: '+1',
    intMod: '-1',
    wisMod: '+0',
    chaMod: '+3',
    insp: false,
    prof: '2',
    passPercept: '10',
    strSavProf: false,
    dexSavProf: false,
    conSavProf: false,
    intSavProf: false,
    wisSavProf: true,
    chaSavProf: true,
    strSav: '1',
    dexSav: '2',
    conSav: '1',
    intSav: '-1',
    wisSav: '1',
    chaSav: '5',
    acroProf: true,
    AHProf: false,
    arcProf: true,
    athProf: false,
    decProf: true,
    hisProf: false,
    insProf: false,
    intProf: true,
    invProf: false,
    medProf: false,
    natProf: false,
    percProf: false,
    perfProf: true,
    persProf: true,
    relProf: false,
    sliProf: false,
    steProf: false,
    surProf: false,
    acro: '4',
    AH: '0',
    arc: '1',
    ath: '1',
    dec: '5',
    his: '-1',
    ins: '0',
    intel: '5',
    inv: '-1',
    med: '0',
    nat: '-1',
    perc: '0',
    perf: '5',
    pers: '5',
    rel: '-1',
    sli: '2',
    ste: '2',
    sur: '0',
    armor: '17',
    init: '2',
    speed: '35',
    hp: '21',
    tempHP: '0',
    hitDice: '3 d8',
    suc1: true,
    suc2: false,
    suc3: false,
    fail1: true,
    fail2: true,
    fail3: true,
    attacks: '\n' +
      '                    \n' +
      '                <li class="static"><button class="right">x</button>Rapier: Hit/DC = +5, Damage = 1d8+3</li><li class="static"><button class="right">x</button>Dagger: Hit/DC = +4, Damage = 1d4+2</li><li class="static"><button class="right">x</button>Boomerang: Hit/DC = +4, Damage = 1d4+2</li>',
    spells: '\n' +
      '                   \n' +
      '                <li class="static"><button class="right">x</button>Armor of Shadows: Max Level: 1 </li><li class="static"><button class="right">x</button>Eldritch Blast: Max Level: Cantrip</li><li class="static"><button class="right">x</button>Branding Smite: Max Level: 2<input type="checkbox"><input type="checkbox"></li><li class="static"><button class="right">x</button>Hellish Rebuke: Max Level: 1<input type="checkbox"><input type="checkbox"></li><li class="static"><button class="right">x</button>Shatter: Max Level: 2<input type="checkbox"><input type="checkbox"></li><li class="static"><button class="right">x</button>Shield: Max Level: 1<input type="checkbox"><input type="checkbox"></li><li class="static"><button class="right">x</button>Chill Touch: Max Level: Cantrip</li>',
    equipment: '\n' +
      '                    \n' +
      '                <li class="static"><button class="right">x</button><input class="skills" type="number">Boomerang</li><li class="static"><button class="right">x</button><input class="skills" type="number">Crossbow</li><li class="static"><button class="right">x</button><input class="skills" type="number">Dagger</li><li class="static"><button class="right">x</button><input class="skills" type="number">Hammer</li><li class="static"><button class="right">x</button><input class="skills" type="number">Piton</li><li class="static"><button class="right">x</button><input class="skills" type="number">Rope</li><li class="static"><button class="right">x</button><input class="skills" type="number">Tinder Box</li><li class="static"><button class="right">x</button><input class="skills" type="number">Waterskin</li><li class="static"><button class="right">x</button><input class="skills" type="number">Leather Armor</li><li class="static"><button class="right">x</button><input class="skills" type="number">Rapier</li>',
    personality: '\n' +
      '                    \n' +
      '                <li class="static">Depressed<button class="right">x</button></li><li class="static">Loner<button class="right">x</button></li><li class="static">Desperate<button class="right">x</button></li><li class="static">Motivated<button class="right">x</button></li>',
    ideals: '\n' +
      '                    \n' +
      '                <li class="static"><button class="right">x</button>All for One</li>',
    bonds: '\n' +
      '                    \n' +
      '                <li class="static"><button class="right">x</button>Patron-Sworn</li>',
    flaws: '\n' +
      '                    \n' +
      '                <li class="static"><button class="right">x</button>Too Many to List</li>',
    profAndLang: '\n' +
      '                    \n' +
      '                <li class="static"><button class="right">x</button>Abyssal</li><li class="static"><button class="right">x</button>Infernal</li><li class="static"><button class="right">x</button>Light and Medium Armor</li><li class="static"><button class="right">x</button>Shields</li><li class="static"><button class="right">x</button>Martial and Simple Weapons</li><li class="static"><button class="right">x</button>Disguise Kit</li><li class="static"><button class="right">x</button>Pan Flute</li><li class="static"><button class="right">x</button>Sylvan</li>',
    featAndTrait: '\n' +
      '                    \n' +
      `                <li class="static"><button class="right">x</button>Hexblade's Curse</li><li class="static"><button class="right">x</button>Hex Warrior</li><li class="static"><button class="right">x</button>Eldritch Invocations</li><li class="static"><button class="right">x</button>Fey</li><li class="static"><button class="right">x</button>Magic Resistance</li><li class="static"><button class="right">x</button>Mirthful Leaps</li><li class="static"><button class="right">x</button>Reveler</li>`
  }]

app.post('/api/save/', (req, res)=>{
    console.log(req.body)
    savedChar.push(req.body)
    console.log(savedChar)
    res.status(200).send(savedChar)
    })


app.get('/api/example/', (req, res)=>{
    let randomIndex = Math.floor(Math.random() * savedChar.length);
  let randomChar = savedChar[randomIndex];
    res.status(200).send(randomChar)
})

// app.post('/seed', ()=>{
//     sequelize.query(`
            
//             drop table if exists exampleChars;

//             create table exampleChars (
//                 char_id serial primary key, 
//                 name varchar
//             );`
//             )
    




app.listen(4000, ()=> console.log('server running on 4000'))