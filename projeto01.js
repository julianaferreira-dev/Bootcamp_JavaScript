class hero {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    attack() {
        const ataque = this.atacar()
        console.log(`O ${this.tipo} atacou usando ${ataque}!`)
    }

    atacar() {
        switch (this.tipo) {
            case "guerreiro":
                return "espada";
                break
            case "mago":
                return "magia"
                break
            case "monge":
                return "artes marciais"
                break
            case "ninja":
                return "shuriken"
                break
            default:
                return "E.R.R.O."
        }
    }
}

let guerreiro = new hero ("Golden Warrior", 40, "guerreiro")
let mago = new hero ("Dark Mage", 25, "mago")
let monge = new hero ("White Monk", 50, "monge")
let ninja = new hero ("Hidden Ninja", 35, "ninja")

guerreiro.attack()
mago.attack()
monge.attack()
ninja.attack()
