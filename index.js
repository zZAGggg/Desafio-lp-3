class hero{
    constructor(name, age, type)
    {
        this.name = name
        this.age = age
        this.type = type
    }
    attack()
    {
        if(this.type == "mago" || this.type == "Mago"){

            ataque = "magia"
        }else if(this.type == "guerreiro" || this.type == "Guerreiro")
            {
                ataque = "espada"
            }else if(this.type == "monge" || this.type == "Monge")
            {
                ataque = "artes marciais"
            }else if(this.type == "ninja" || this.type == "Ninja")
            {
                ataque = "shuriken"
            }
        console.log(`O ${this.type} atacou usando ${ataque}`)
    }
}

let ataque 

let heroi1 = new hero("Juninho", "19" , "guerreiro")
heroi1.attack()

let heroi2 = new hero("Jorge", "32", "Monge")
heroi2.attack()

let heroi3 = new hero("Cleiton", "22", "Mago")
heroi3.attack()

let heroi4 = new hero("João", "18", "ninja")
heroi4.attack()