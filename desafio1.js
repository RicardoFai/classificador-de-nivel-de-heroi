let herois = [
    { nome: "Sanji", xp: 800},
    {nome: "Zoro", xp: 1500},
    {nome: "Luffy", xp: 10500}
];


for (let i = 0; i < herois.length; i++){
    let hero = herois[i];
    let nivel = "";
    
    if (hero.xp <= 1000) {
         nivel = "Ferro";
    } else if (hero.xp >= 1001 && hero.xp <= 2000) {
         nivel = "Bronze";
    } else if (hero.xp >= 2001 && hero.xp <= 5000) {
         nivel = "Prata";
    } else if (hero.xp >= 5001 && hero.xp <= 7000) {
         nivel = "Ouro";
    } else if (hero.xp >= 7001 && hero.xp <= 8000) {
         nivel = "Platina"
    } else if (hero.xp >= 8001 && hero.xp <= 9000) {
         nivel = "Ascendente";
    } else if (hero.xp >= 9001 && hero.xp <= 10000) {
         nivel = "Imortal";
    } else {
         nivel = "Radiante";
    }
    console.log(`O Herói de nome **${hero.nome}** está no nível de **${nivel}**`);
    
}