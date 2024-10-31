// function to create our monsters
function createMonster(name, health, strength, specialAttack) {
    return {
        name: name,
        health: health,
        strength: strength,
        specialAttack: specialAttack,
        attack(target) {
            let damage = this.strength * Math.floor(Math.random() * 10) + 1;
            // the target amount of health would decrease by the amount of strength of the attacking monster
            target.health -= damage;
            console.log(`${this.name} attacks ${target.name} for ${damage} damage!`);
        },
        isDefeated() {
            return this.health <= 0;
        },
    }
}

function randomHealth() {
    return Math.floor((Math.random() * 100) * (Math.random() * 10) + 1) + 1;
}

function randomStrength() {
    return Math.floor((Math.random() * 10) * (Math.random() * 10) + 1) + 1;
}

// our monsters
let monsterA = createMonster("Frank the Frankenstein", randomHealth(), randomStrength(), "stomp");
let monsterB = createMonster("Agatha Harkness", randomHealth(), randomStrength(), "lightning bolt");

// function to display the monster stats
function displayStats(monster) {
    if (monster.health < 0) monster.health = 0;

    console.log(`${monster.name} has ${monster.health} health.`)
}

// function to battle our monsters inside of a loop
function battle(monsterA, monsterB) {
    console.log(`${monsterA.name} vs ${monsterB.name}!`);
    while (!monsterA.isDefeated() && !monsterB.isDefeated()) {
        monsterA.attack(monsterB);
        displayStats(monsterB);
        if (!monsterB.isDefeated()) {
            monsterB.attack(monsterA);
            displayStats(monsterA);
        }
    }

    if (monsterA.isDefeated()) {
        console.log(`${monsterA.name} has been defeated!`);
    } else {
        console.log(`${monsterB.name} has been defeated!`);
    }

    console.log("*** BATTLE OVER ***");
}

// invoke the battle function
battle(monsterA, monsterB);