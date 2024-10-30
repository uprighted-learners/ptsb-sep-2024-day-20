// function to create our monsters
function createMonster(name, health, strength, specialAttack) {
    return {
        name: name,
        health: health,
        strength: strength,
        specialAttack: specialAttack,
        attack(target) {
            // the target amount of health would decrease by the amount of strength of the attacking monster
            target.health -= this.strength;
            console.log(`${this.name} attacks ${target.name} for ${this.strength} damage!`);
        },
    }
}

// our monsters
let monsterA = createMonster("Frank the Frankenstein", 150, 15, "stomp");
let monsterB = createMonster("Agatha Harkness", 212, 9, "lightning bolt");

// monsterA attacks monsterB
monsterA.attack(monsterB);

// monsterB attacks monsterA
monsterB.attack(monsterA);


// function to display the monster stats
function displayStats(monster) {
    console.log(`${monster.name} has ${monster.health} health.`)
}

displayStats(monsterA);
displayStats(monsterB);

// monsterA attacks monsterB
monsterA.attack(monsterB);

// monsterB attacks monsterA
monsterB.attack(monsterA);

displayStats(monsterA);
displayStats(monsterB);