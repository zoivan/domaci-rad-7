//Zadatak-1
var time = process.argv[2]

console.log(time);

debugger;

switch(time) {
    case "ZORA":
    case "PRIJEPODNE":
    case "JUTRO":
        console.log("Dobro jutro");
        break;
    case "POPODNE":
    case "POSLIJEPODNE":
        console.log("Dobar dan");
        break;
    case "PREDVECER":
    case "NOĆ":
        console.log("Dobra vecer");
        break;
        default:
        console.log("Koje je to doba dana?") 
}

//Zadatak-2
var brojGodina = +process.argv[2];
console.log(+process.argv[2]);
if (isNaN(brojGodina) || brojGodina < 0) {
    console.log(`Pogresan unos!`);
} else
 (brojGodina < 18 ? console.log(`Korisnik je MALOLJETAN`) : console.log(`Korisnik je PUNOLJETAN`));

 //Zadatak-3

 var broj = +process.argv.slice(2)[0];
(isNaN(broj) || broj < 0) ? console.log(`Vas sretni broj je `, 7) : console.log(`Vas sretni broj je ${broj}`);

 var randomNo = Math.floor(Math.random() * 10);
 broj === randomNo ? console.log("Jackpot!") : console.log("Vise srece drugi put!");
