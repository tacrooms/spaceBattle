console.log('window is loaded');

// Objects

const myShip = {
    hull: 20,
    firepower: 5,
    accuracy: .7,
    attack(target) {
        let ranNum = Math.random();
        console.log(`Accuracy threshold is ${ranNum}`);
        if (ranNum < this.accuracy) {
            alert('It's a direct hit!! Well done Capitan!');
            target.hull = target.hull - this.firepower;
            console.log(`alien has ${target.hull} hull points left.`);
            if (target.hull <= 0) {
                alert('Alien ship is destroyed you have saved the Universe from complete destruction!!');

            }
        } else {
            console.log(`you missed!`);
        }
    }
}
const alien = {
    hull: Math.round((Math.random() * (6 - 3)) + 3),
    firepower: Math.round((Math.random() * (4 - 2)) + 2),
    accuracy: (Math.random() * (.8 - .6)) + .6, 
    attack(target) {
        let ranNum = Math.random();
        console.log(`Accuracy threshold is ${ranNum}`);
        if (ranNum < this.accuracy) {
            console.log(`You've been hit!`);
            target.hull = target.hull - this.firepower;
            console.log(`myShip has ${target.hull} hull points left.`);
            if (target.hull <= 0) {
                console.log('The NovaChaser has been DESTROYED!');

            }
        } else {
            console.log(`You dodged the attack!`);
        }
    }
}

const battle = (player, alienShips) => {
    while (player.isAlive && alienShips.isAlive) {
        player.attack(alienShips);
        if (alienShips.isAlive) {
            alienShips.attack(myShip);
        }
    }
} 

//    const myShip = {
//        name: 'NovaChaser',
//        hull: 20,
//        firePower: 5,
//        accuracy: .7,
//        alive: true,
//        attack(target){
//            let ranNum = Math.random()

//        }

//    }
//    class alienShips {
//        constructor(hull,firepower,accuracy){
//            this.hull=hull;
//            this.firepower=firepower;
//            this.accuracy=accuracy;
//        }
//    }
//    var alien1 = new alienShips((Math.floor(Math.random()*6)+3),(Math.floor(Math.random()*4)+2),(Math.floor(Math.random()*.8)+.6))
//    var alien2 = new alienShips((Math.floor(Math.random()*6)+3),(Math.floor(Math.random()*4)+2),(Math.floor(Math.random()*.8)+.6))
//    var alien3 = new alienShips((Math.floor(Math.random()*6)+3),(Math.floor(Math.random()*4)+2),(Math.floor(Math.random()*.8)+.6))
//    var alien4 = new alienShips((Math.floor(Math.random()*6)+3),(Math.floor(Math.random()*4)+2),(Math.floor(Math.random()*.8)+.6))
//    var alien5 = new alienShips((Math.floor(Math.random()*6)+3),(Math.floor(Math.random()*4)+2),(Math.floor(Math.random()*.8)+.6))
//    var alien6 = new alienShips((Math.floor(Math.random()*6)+3),(Math.floor(Math.random()*4)+2),(Math.floor(Math.random()*.8)+.6))
   


// var underAttack =()=>{
//     alert('The Planet it Under Attack!! What will you do Captain?')
// } 

