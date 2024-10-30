let monster = {
    name: "Frank the Frankenstein",
    health: 100,
    roar() {
        console.log("ROAR!!!");
    },
    attack() {
        console.log(`You attack ${this.name} for 10 damage!`);
        this.roar();
        monster.health -= 10;
        console.log(`${this.name} has ${this.health} health left!`);
    },
    bolt() {
        console.log(`Bolt of lighning streaks across the sky!`)
        this.health *= 2;
        console.log(`${this.name} has ${this.health} health!`);
    },
}

monster.bolt();

// monster.bolt = () => {
//     console.log(`Bolt of lighning streaks across the sky!`)
//     this.health *= 3;
//     console.log(`${this.name} has ${this.health} health!`);
// }

// monster.bolt();

let witch = {
    name: "Agatha Harkness",
    potions: ["elixir of fear", "love tincture", "healing potion"],
    spells: ["fireball", "lightning bolt", "ice shard"],

    cackle() {
        console.log("Heheheheheheheh!");
    },

    castSpell(spell) {
        console.log(`${this.name} casts ${this.spells[spell]}!`);
        this.cackle();
    },

    drinkPotion(potion) {
        console.log(`${this.name} drinks ${this.potions[potion]}!`);
    }
}

witch.castSpell(0);
witch.drinkPotion(0);

console.log(witch.name)