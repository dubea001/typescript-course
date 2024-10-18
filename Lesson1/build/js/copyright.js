"use strict";
// PRACTICE EXERCISES START
// CHATGPT EXERCISES
// CONTRUCTOR IN JAVASCRIPT/TYPESCRIPT
class Person {
    constructor(name, age, jobTitle) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    describe() {
        return `Hi, my name is ${this.name}, I am ${this.age} years old and I work as a ${this.jobTitle}.`;
    }
}
const user1 = new Person('Lucky Francis', 24, 'Software Engineer');
const user2 = new Person('Kingsley Francis', 17, 'UI/UX designer');
const user3 = new Person('Seth Francis', 30, 'Data Analyst');
function Person2(name, age, jobTitle) {
    this.name = name;
    this.age = age;
    this.jobTitle = jobTitle;
    this.describe = function () {
        return `Hi, my name is ${this.name}, I am ${this.age} years old and I work as a ${this.jobTitle}.`;
    };
}
// const user = new Person2('yamal', 17, 'footballer')
// console.log(user.describe());
// console.log(user1.describe());
// console.log(user2.describe());
// console.log(user3.describe());
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getCarAge() {
        const currentYear = new Date().getFullYear();
        const age = currentYear - this.year;
        return `${age} years old`;
    }
    describeCar() {
        return `This is a ${this.year} ${this.brand} ${this.model}.`;
    }
}
const newCar = new Car('Toyota', 'Corolla', 2015);
// console.log(newCar.describeCar())
// console.log(newCar.getCarAge())
class Employee {
    constructor(name, position, _salary) {
        this.name = name;
        this.position = position;
        this._salary = _salary;
    }
    getSalary() {
        return this._salary;
    }
    giveRaise(value) {
        this._salary += value;
        return this._salary;
    }
}
const Dubea = new Employee('Lucky Francis', 'junior frontend developer', 50000);
const formatInput = (value) => {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toLocaleString());
    }
};
const mixedArray = [];
mixedArray.push('developer', 1998, 2015, 'designer', 'engineer', 33390);
const processArray = (arr) => {
    arr.map(item => {
        if (typeof item === "string") {
            console.log(`STRING: ${item}`);
        }
        else {
            console.log(`NUMBER: ${item}`);
        }
    });
};
const addToInventory = (inventory, key, value) => {
    return Object.assign(Object.assign({}, inventory), { [key]: (inventory[key] || 0) + value });
};
let inventory = {};
inventory = addToInventory(inventory, 'apple', 5);
// console.log(inventory);
inventory = addToInventory(inventory, 'banana', 3);
// console.log(inventory);
inventory = addToInventory(inventory, 'apple', 2);
const getPersonProperty = (user, value) => {
    return user[value];
};
const per = { name: 'dubea', age: 35, jobTitle: 'Developer' };
const updateSetting = (setting, key, value) => {
    return Object.assign(Object.assign({}, setting), { [key]: value });
};
let appSettings = {};
// appSettings = updateSetting(appSettings, 'theme', 'dark');
// appSettings = updateSetting(appSettings, 'language', 'en');
// appSettings = updateSetting(appSettings, 'customSetting', 'value123');
// console.log(appSettings);
// appSettings = updateSetting(appSettings, 'theme', 'light');
// appSettings = updateSetting(appSettings, 'language', 'esp');
// appSettings = updateSetting(appSettings, 'customSetting', 'test4593');
// console.log(appSettings);
// appSettings = updateSetting(appSettings, 'userPasskey', '7845df326td');
// console.log(appSettings);
// CLAUDE AI EXERCISES
// CONTRUCTOR IN JAVASCRIPT/TYPESCRIPT
class Quiz {
    constructor(quizName) {
        this.quizName = quizName;
        this.questions = [];
    }
    addQuestion(questionText, options, correctAnswer) {
        if (!options.includes(correctAnswer)) {
            throw new Error('Correct answer must be included in the options');
        }
        this.questions.push({ questionText, options, correctAnswer });
    }
    takeQuiz() {
        let score = 0;
        console.log(`welcome to the ${this.quizName} quiz!`);
        for (let index = 0; index < this.questions.length; index++) {
            const question = this.questions[index];
            console.log(`\nQuestion ${index + 1}: ${question.questionText}`);
            question.options.forEach((option, index) => {
                console.log(`${index + 1}. ${option}`);
            });
            const userAnswer = prompt("Enter the number of your answer:");
            if (userAnswer && question.options[parseInt(userAnswer) - 1] === question.correctAnswer) {
                console.log('correct');
                score++;
            }
            else {
                console.log(`incorrect. the correct answer is ${question.correctAnswer}`);
            }
        }
        console.log(`\nQuiz completed! your score: ${score}/${this.questions.length}`);
    }
}
const MyQuiz = new Quiz('Typscript basics');
MyQuiz.addQuestion("What keyword is used to declare a variable in JavaScript?", ["var", "let", "const", "all of the above"], "all of the above");
MyQuiz.addQuestion("Which of these is not a JavaScript data type?", ["number", "boolean", "string", "float"], "float");
MyQuiz.addQuestion("What will '2' + 2 evaluate to in JavaScript?", ["4", "22", "NaN", "TypeError"], "22");
// console.log(MyQuiz);
// MyQuiz.takeQuiz()
class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            return `Deposited ${amount}. New balance: ${this.balance}`;
        }
        else {
            return 'Invalid deposit amount. please enter a positive number';
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return `withdrawn ${amount}. New balance: ${this.balance.toFixed(2)}.`;
        }
        else if (amount <= 0) {
            return 'Invalide withdrawal amount. please enter a valid number';
        }
        else {
            return 'Insufficient balance for this withdrawal';
        }
    }
    getAccountInfo() {
        return `
    account name: ${this.ownerName.toUpperCase()}
    account number: ${this.accountNumber}
    account balance: ${this.balance.toFixed(2)}
     `;
    }
}
// const User1 = new BankAccount(2252376371, 'Lucky Francis', 250000)
// console.log(User1.getAccountInfo())
// console.log(User1.deposit(5000))
// console.log(User1.withdraw(50000))
// console.log(User1)
// User1.deposit(2533360)
// console.log(User1)
// console.log(User1.withdraw(900000));
class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
    toggleReadStatus() {
        this.isRead = !this.isRead;
    }
}
const Book1 = new Book('predictabily irrational', 'daniel oriley', 293, false);
const Book2 = new Book('seeking truth finding jesus', 'nabeel quareshi', 440, true);
// Book1.toggleReadStatus()
// console.log(Book1);
// Book1.toggleReadStatus()
// console.log(Book1);
// Book2.toggleReadStatus()
// console.log(Book2);
// Book2.toggleReadStatus()
// console.log(Book2);
// Book2.toggleReadStatus()
// console.log(Book1);
// console.log(Book2);
// UNION TYPES
const displayId = (id) => {
    if (typeof id === 'number') {
        console.log(`#${id}`);
    }
    else {
        console.log(`ID: ${id}`);
    }
};
const mediaList = [];
mediaList.push({ title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281 }, { title: "1984", author: "George Orwell", pages: 328 }, { title: "Inception", director: "Christopher Nolan", durationInMinutes: 148 }, { title: "The Shawshank Redemption", director: "Frank Darabont", durationInMinutes: 142 });
const displayMediaInfo = (Item) => {
    console.log("Title:", Item.title);
    if ("author" in Item) {
        console.log("type: Books");
        console.log("author", Item.author);
        console.log("pages", Item.pages);
    }
    else {
        console.log("type: Movies");
        console.log("director", Item.director);
        console.log("duration in minutes", Item.durationInMinutes);
    }
};
const getproperty = (user, value) => {
    return user[value];
};
const updateConfig = (config, key, value) => {
    return Object.assign(Object.assign({}, config), { [key]: value });
};
let myConfig = {
    apiUrl: "https://api.example.com",
    timeout: "30000"
};
const updateUser = (user, propsToUpdate) => {
    return Object.assign(Object.assign({}, user), propsToUpdate);
};
const testUser = {
    id: 493,
    name: "Dubea",
    email: "Dubea001@gmail.com",
    address: "new nyanya beside nnpc filling station"
};
// console.log(testUser);
const updateEmail = updateUser(testUser, { email: "dubeastudio@gmail.com" });
// console.log(updateEmail);
const updateName = updateUser(testUser, { name: "stanley" });
// console.log(updateName);
const updateId = updateUser(testUser, { id: 366 });
const defaultSettings = {
    theme: "Light",
    notification: true,
    language: "en",
    fontSize: 24
};
function applyUserPreferences(defaultSettings, userPreference) {
    return Object.assign(Object.assign({}, defaultSettings), userPreference);
}
const publishPost = (post) => {
    if (!post.title.trim() || !post.content.trim() || !post.author.trim() || !post.date.trim()) {
        throw new Error("All fields are required");
    }
    console.log("publishing post...");
    console.log("===============");
    console.log(`title: ${post.title}`);
    console.log(`Author: ${post.author}`);
    console.log(`date: ${post.date}`);
    console.log(`content: ${post.content}`);
    console.log("===============");
    console.log("post published successfully");
};
const completePost = {
    title: "Understanding TypeScript Utility Types",
    content: "TypeScript utility types are powerful tools...",
    author: "John Doe",
    date: "2024-03-20"
};
const emptyFieldsPost = {
    title: "",
    content: "Some content",
    author: "John Doe",
    date: "2024-03-20"
};
function validateShipping(info) {
    const stringFields = ["address", "city", "country"];
    for (const field of stringFields) {
        if (typeof info[field] != "string" || !info[field].trim()) {
            throw new Error(`${field} must be a non empty string`);
        }
    }
    if (typeof info.zipCode !== "number" || isNaN(info.zipCode) || info.zipCode <= 0) {
        throw new Error("zipCode must be a positive number");
    }
    console.log("shipping information is valid....");
    setTimeout(() => {
        console.log("Processing Data....");
    }, 3000);
    setTimeout(() => {
        console.log(`Address: ${info.address}`);
        console.log(`city: ${info.city}`);
        console.log(`country: ${info.country}`);
        console.log(`zipCode: ${info.zipCode}`);
    }, 6000);
    setTimeout(() => {
        console.log("Completed");
    }, 9000);
}
const client1 = {
    address: "new nyanya",
    city: "karu",
    country: "",
    zipCode: 58257626
};
const client3 = {
    address: "123 Main St",
    city: "Anytown",
    country: "USA",
    zipCode: 5
};
// validateShipping(client1)
// validateShipping(client3)
const client2 = {
    address: "new nyanya",
    city: "karu",
    country: "nigeria",
    zipCode: 4588910
};
function freezeConfig(config) {
    return config;
}
const config1 = {
    apiKey: "525hgfjkfcjfvngfvbglhh",
    timeout: 5000,
    baseURL: "https://google.com"
};
function createGameSnapShot(currGameState) {
    return currGameState;
}
const masterUser = {
    score: 13,
    level: 1,
    lives: 25
};
const masterUserCurrentState = createGameSnapShot(masterUser);
let employees = {};
function addEmployee(id, employee) {
    employees[id] = employee;
    return employees;
}
function removeEmployee(id) {
    delete employees[id];
    return employees;
}
function updateEmployee(id, updateInfo) {
    employees[id] = Object.assign(Object.assign({}, employees[id]), updateInfo);
    return employees;
}
const newEmployee = {
    name: "dubea",
    role: "software dev",
    department: "backend"
};
const newEmployee1 = {
    name: "caleb",
    role: "designer",
    department: "ui/ux"
};
const newEmployee2 = {
    name: "elijah",
    role: "web dev",
    department: "frontend"
};
addEmployee("1001", newEmployee);
addEmployee("1002", newEmployee1);
addEmployee("1003", newEmployee2);
console.log(employees);
removeEmployee("1002");
console.log(employees);
updateEmployee("1003", { role: "senior sofware developer" });
console.log(employees);
// PRACTICE EXERCISES END
