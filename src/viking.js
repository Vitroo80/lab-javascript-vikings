// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }
    receiveDamage(damage) {
        this.health -= damage

        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return "A Saxon has died in combat"
        }
    }

}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }

    vikingAttack(){
        let vikingr = Math.floor(Math.random()*this.vikingArmy.length)
        let chosenV = this.vikingArmy[vikingr]
        let saxonr = Math.floor(Math.random()*this.saxonArmy.length)
        let chosenS = this.saxonArmy[saxonr]
        let saxonDanoTomado = chosenS.receiveDamage(chosenV.attack())
        if (chosenS.health<=0){
            this.saxonArmy.splice(saxonr,1)
        }
        return saxonDanoTomado

    }

    saxonAttack(){
        let vikingr = Math.floor(Math.random()*this.vikingArmy.length)
        let chosenV = this.vikingArmy[vikingr]
        let saxonr = Math.floor(Math.random()*this.saxonArmy.length)
        let chosenS = this.saxonArmy[saxonr]
        let vikingDanoTomado = chosenV.receiveDamage(chosenS.attack())
        if (chosenV.health<=0){
            this.vikingArmy.splice(vikingr,1)
        }
        return vikingDanoTomado

    }
    showStatus(){
        if (!this.saxonArmy.length) {
            return 'Vikings have won the war of the century!';
          } else if (!this.vikingArmy.length) {
            return 'Saxons have fought for their lives and survived another day...';
          } else {
            return 'Vikings and Saxons are still in the thick of battle.';
          }

    }

}
