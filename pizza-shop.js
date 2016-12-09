class PizzaShop {
  constructor(name){
      this.name            = name;
      this.orders          = [];
      this.processingOrder = false;
  }

  takeOrder(person, foods){
    this.orders.push({ person: person, foods: foods });
    console.log(`Taking order for ${person.name}`)
    this._cook();
  }

  _cook(){
    if (!this.processingOrder){
      this.processingOrder = true;
      let orderInterval = setInterval(()=> {
        if (this.orders.length > 0){
          let order = this.orders.shift();

          console.log(`Cooking order for ${order.person.name}`);
          order.foods.forEach( food => console.log(`Cooking ${food}`));

          this.processingOrder = false
        } else {
          clearInterval(orderInterval);
          this.processingOrder = false;
          return;
        }

      }, 5000)
    }
  }
}

class Person {
  constructor(name){
    this.name = name;
  }
}

const myShop     = new PizzaShop("Ironhack Pizza");
const ironhacker1 = new Person("Ironhacker 1");
const ironhacker2 = new Person("Ironhacker 2");
const ironhacker3 = new Person("Ironhacker 3");
const ironhacker4 = new Person("Ironhacker 4");

myShop.takeOrder(ironhacker1, ["Pizza"]);
myShop.takeOrder(ironhacker2, ["Pizza, Ice Cream"]);
myShop.takeOrder(ironhacker3, ["Pasta", "Salad"]);
setTimeout(_=> {
  myShop.takeOrder(ironhacker4, ["Ice Cream"]);

}, 6000)
