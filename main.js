// task 1 1.	

//Дано масив [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7]; Знайти максимальне значення масиву.

const ARR = [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7];

console.log(Math.max(...ARR));

// task 2 

// 2.	Дано масив [“test”, 12, undefined, null, -5, “javascript”, “1”, false, true, 0 , “!”]. 
//Створити новий масив де будуть тільки Стрінгові значення.

const ARR1 = ["test", 12, undefined, null, -5, "javascript", "1", false, true, 0 , "!"];

let sortedArr = ARR1.filter( e => typeof(e) === 'string');

console.log(sortedArr)

// task 3 

// 3.	Дано колекцію - [{name: "Yura", age: 55, hobby: ["football", "ski", "hiking"], type: "Admin"}, {name: "Yulian", age: 28, hobby: ["films", "games", "hiking"], type: "user"}, {name: "Taras", age: 38, hobby: ["hunting", "TV", "javascript"], type: "user"}] –
// Вивести всіх юзерів з типом user. Вивести юзерів які мають хоббі hiking. 
//Додати можливість додати нове поле для всіх юзерів – job (true/false);

const USERS = [
    {name: "Yura", age: 55, hobby: ["football", "ski", "hiking"], type: "Admin"}, 
    {name: "Yulian", age: 28, hobby: ["films", "games", "hiking"], type: "user"}, 
    {name: "Taras", age: 38, hobby: ["hunting", "TV", "javascript"], type: "user"}
]

let sortedUsers = USERS.filter ( e=> e.type == 'user');

console.log(sortedUsers)
for (let i = 0; i < sortedUsers.length; i++) {
console.log(`${sortedUsers[i].name} - це юзер`)
}

let sorted2Users = USERS.filter ( e=> e.hobby && e.hobby.indexOf('hiking') !== -1 );
for (let i = 0; i < sorted2Users.length; i++) {
console.log(`${sorted2Users[i].name} - цей юзер любить піші прогулянки`)};


for (let i = 0; i < USERS.length; i++) {
   if (confirm(`${USERS[i].name}, Ви хочете вказати про те, чи Ви працюєте?`)) {
       let working = confirm("Ви на даний час працюєте десь?");
       USERS[i]['job'] = working;   
   }
}

console.log(USERS);

// task 4 


//4.	Додати на сторінку івент який буде викидати алерт як тільки ми захочемо скопіювати текст 
//з сторінки(додайте 1 рядок будь якого тексту) і сповіщати що це інтелектуальна власність власника.

document.addEventListener("copy", () => {
alert('це інтелектуальна власність власника')
})

//task 5 

//5.	https://restcountries.eu/rest/v2/all – АПІ endpoint для країн. Вивести нумерований список 
//з іменами всіх країн та її столицею на сторінку, назву країни зробити великими буквами. 

let listCountries = document.createElement('ol');

listCountries.classList.add = ('text');



const URL = "https://restcountries.eu/rest/v2/all";

function createList(country){
for (let i = 0; i < country.length; i++) {
    let li = document.createElement('li');

    li.innerHTML = country.name;
    listCountries.append(li);
}
}


fetch(URL).then(response => (response.json()))
.then(createList);


//..............................................





