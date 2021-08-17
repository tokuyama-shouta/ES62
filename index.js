//ES5 for

let colors = ['red', 'blue', 'green'];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

//forEach
colors.forEach(function(color) {
  console.log(color);
})

//数字の配列を用意
let numbers = [1,2,3,4,5];
//合計を保持する変数を用意する
let sum = 0;
//配列の1つ1つの合計をたす。
numbers.forEach(function(number) {
  sum += number;
});
//合計を表示する
sum;

posts.forEach(function(post){
  savePost(post)
})
images.forEach(function(image){
  areas.push(image.height*image.width);
})

//map

let numbers = [1,2,3];
let doubledNumbers = [];

for (let i = 0; i < numbers.length; i++){
  doubledNumbers.push(numbers[i]*2);
}

let doubled = numbers.map(function(number) {
  return number * 2;
})

doubled;
doubledNumbers;

let cars = [
  {type: '軽自動車',price: '安い'},
  {type: '高級車',price: '高い'}
];
let prices = cars.map(function(car){
  return car.price;
});
prices;

let height = images.map(function(image){
  return image.height;
})

let speeds = trips.map(function(trip){
  return trip.distance/trip.time;
})

let products = [
  { name: 'きゅうり', type: '野菜' },
  { name: 'バナナ', type: 'フルーツ' },
  { name: 'セロリ', type: '野菜' },
  { name: 'オレンジ', type: 'フルーツ' },
];

let filteredProducts = [];

for(let i = 0; i < products.length; i++){
  if(products[i].type === 'フルーツ'){
    filteredProducts.push(products[i]);
  }
}


products.filter(function(product){
  return product.type === 'フルーツ';
});

let products = [
  { name: 'きゅうり', type: '野菜', quabtity: 0, price: 1},
  { name: 'バナナ', type: 'フルーツ',quabtity: 0, price: 1},
  { name: 'セロリ', type: '野菜', quabtity: 0, price: 1},
  { name: 'オレンジ', type: 'フルーツ', quabtity: 0, price: 1},
];

products.filter(function(product){
  return product.type === '野菜' && product.quantity > 0 && product.price < 10;
})

let users = [
  { name: '太郎'},
  { name: '次郎'},
  { name: '三郎'},
];

let user;
for(let i = 0; i < users.length; i++) {
  if(users[i].name === '次郎'){
    user = user[i];
    break;
  }
}

users.find(function(user) {
  return user.name === '次郎';
});

user;

function Car(model){
  this.model = model;
}

let cars = [
  new Car('プリウス'),
  new Car('ノート'),
  new Car('アクア'),
];

cars.find(function(car){
  return car.model == 'アクア';
});

let posts = [
  { id: 1, title: '古い投稿'},
  { id: 2, title: '新しい投稿'},
]

let comment = { postId: 2, content: '良いね!'}

function postForComment(posts, comment) {
  return posts.find(function(post){
    return post.id === comment.postId;
  });
}
postForComment(post, comment);

let computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Campaq', ram: 4 },
  { name: 'Acer', ram: 32 },
];


let allComputersCanRun = true;
let someComputersCanRun = false;

for (let i = 0; i < computers.length; i++){
  let computer = computers[i];

  if(computer.ram < 16) {
    allComputersCanRun = false;
  }else{
    someComputersCanRun = true;
  }
}

allComputersCanRun
someComputersCanRun

computers.every(function(computer) {
  return computer.ram >= 16;
});

conputers.some(function(computer){
  return computer.ram >= 16;
})

let names = [
  'けん',
  'はなこ',
  'そういちろう'
]

names.every(function(name){
  return name.length >= 3;
});
names.some(function(name){
  return name.length >= 3;
});

let numbers = [10,20,30];
let sum = 0;

for (let i = 0; i < numbers.length; i++){
  sum += numbers[i];
}



numbers.reduce(function(sum,number){
  return sum + number;
}, 0);

let primaryColor = [
  { color: 'red'},
  { color: 'yellow'},
  { color: 'blue'}
];

primaryColors.reduce(function(previous,primaryColor){
  previous.push(primaryColor.color)
  return previous;
},[]);

let color = "red";
color;

const name = "太郎";
let title = "app エンジニア";

function getMessage() {
  const year = new Date().getFullYear();
  return `今年は${year}年です。`;
}
getMessage();

const device_id = 4;
const guid = 20;
const username = "pkpk";
const data = `${device_id}${guid}${username}`;

const yearMessage = `今年は${year}年です。`;

const add = (a, b) => {
  return a + b;
}
const add = (a,b) => a + b;
add(1,2);

const double = number => 2 * number;
doubled(8);

const numbers = [1,2,3];

numbers.map(number => 2 * number);

const team = {
  members: ['太郎','花子'],
  teamName: 'スーパーチーム',
  teamSummary: function() {
    return this.members.map((member) => {
      return `${member}は${this.teamName}の所属です`;
    });
  }
}

function createBookShop(inventory) {
  return {
    inventory,
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceFprTitle(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

const inventory = [
  {title: 'ハリーポッター',price: 1000},
  {title: 'JavaScript入門',price: 1500},
]

const bookShop = createBookShop(inventory);
bookShop.inventoryValue();
bookShop.priceFprTitle('ハリーポッター');

function saveFile() {
  $.ajax({ method: 'POST', url, data});
}
const url = 'http://fileupload.com';
const data = { color: 'red'};

saveFile(url, data)

// function makeAjaxRequest(url, method = 'GET'){
//   return method;

//   // ajaxリクエストをするロジックがここにあると想定
// }

// makeAjaxRequest('google.com', null);
// makeAjaxRequest('google.com','POST');

function addNumber(...numbers) {
  return numbers.reduce((sum,number) => {
    return sum + number;
  }, 0);
}

addNumbers(1,2,3,4,5);

const defaultColors = ['赤','緑'];
const userFavoriteColors = ['オレンジ','黄'];
const fallColors = ['茶', '紅葉'];

[ '青', ...fallColors, ...defaultColors, ...userFavoriteColors];

function validateShoppingList(...items) {
  if(items.indexOf('牛乳') < 0){
    return ['牛乳', ...items];
  }
  return items; 
}

validateShoppingList('オレンジ','パンだよ!'); 

const MathLibrary = {
  colculateProduct(...rest){
    return this.multiply(...rest)
  },
  multiply(a,b){
    return a * b;
  }
};
MathLibrary.colculateProduct(2,3);
MathLibrary.multiply(2,3);

let expense = {
  type: '交際費',
  amount: '4500 JPY'
}

const { type,amount } = expense;
type;
amount;

