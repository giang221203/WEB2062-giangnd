const restaurant = {
    name: 'Classico italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categorise:['italian','Pizzeria','Vegetarian','Organic'],
    starterMenu: ['Focaccia','Bruschetta','Garlic Bread','Caprese Salad'],
    mainMenu: ['Pizza','Pasta','Risotto'],
    order: function(starterIndex,mainIndex){
        return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
    },
};
const arr = [2,3,4];
const a = [0];
const b = [1];
const c = [2];
const [x , y, z] = arr;
console.log(x,y,z);
console.log(arr);
let [main,,secondary] = restaurant.categorise;
console.log(main,secondary);
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main,secondary);
[main,secondary]= [secondary,main];
console.log(main,secondary);

console.log(restaurant.order(2,0));
const [starter,mainCourse]  = restaurant.order(2,0);
console.log(starter,mainCourse);

const nested = [2, 4, [5,6]];
// const [i, ,j] = nested;
// console.log(i,j);
const [i, ,[j,k]]  = nested;
console.log(i,j,k);

const [p = 1, q = 1 ,r = 1] = [8 , 9];
console.log(p,q,r);