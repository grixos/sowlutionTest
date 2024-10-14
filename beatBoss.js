const fs = require('fs');

const csvFile = fs.readFileSync('C:\\Users\\georg\\Downloads\\prediction.csv', 'utf-8');

const rows = csvFile.trim().split('\n');
function probabilityToBeatBoss(CardSuit, AnimalName, Fruit) { 
    let matches = 0;  
    let wins = 0;    

    for (let i = 1; i < rows.length; i++) {  
        const [playerSuit, playerAnimal, playerFruit, result] = rows[i].split(',');  
        if (playerSuit.toLowerCase() === CardSuit.toLowerCase() ) {
            matches++; 
            if (result.toLowerCase() === 'true') { 
                wins++;
            }
        }
        if (playerAnimal.toLowerCase() === AnimalName.toLowerCase() ) {
            matches++; 
            if (result.toLowerCase() === 'true') { 
                wins++;
            }
        }
        if (playerFruit.toLowerCase() === Fruit.toLowerCase() ) {
            matches++; 
            if (result.toLowerCase() === 'true') { 
                wins++;
            }
        }
    }

    if (matches === 0) {
        return 0;
    }

    const probability = (wins / matches) * 100;
    return probability;
}

const suit = "Hearts";
const animal = "Lion";
const fruit = "Mango";

const probability = probabilityToBeatBoss(suit, animal, fruit);
console.log(`${probability.toFixed(2)}%`);