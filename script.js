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
    }
}

monster.bolt();