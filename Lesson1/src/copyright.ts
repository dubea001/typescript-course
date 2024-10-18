
// PRACTICE EXERCISES START

// CHATGPT EXERCISES

// CONTRUCTOR IN JAVASCRIPT/TYPESCRIPT

class Person {
  constructor(
    public name: string,
    public age: number,
    public jobTitle: string
  ) { }
  describe(): string {
    return `Hi, my name is ${this.name}, I am ${this.age} years old and I work as a ${this.jobTitle}.`
  }
}

const user1 = new Person('Lucky Francis', 24, 'Software Engineer')
const user2 = new Person('Kingsley Francis', 17, 'UI/UX designer')
const user3 = new Person('Seth Francis', 30, 'Data Analyst')

function Person2(this: any, name: string, age: number, jobTitle: string) {
  this.name = name;
  this.age = age;
  this.jobTitle = jobTitle;
  this.describe = function (): string {
    return `Hi, my name is ${this.name}, I am ${this.age} years old and I work as a ${this.jobTitle}.`
  }
}

// const user = new Person2('yamal', 17, 'footballer')
// console.log(user.describe());


// console.log(user1.describe());
// console.log(user2.describe());
// console.log(user3.describe());

class Car {
  constructor(
    public brand: string,
    public model: string,
    public year: number
  ) { }
  getCarAge(): string {
    const currentYear = new Date().getFullYear()
    const age = currentYear - this.year
    return `${age} years old`
  }
  describeCar(): string {
    return `This is a ${this.year} ${this.brand} ${this.model}.`
  }
}

const newCar = new Car('Toyota', 'Corolla', 2015)

// console.log(newCar.describeCar())
// console.log(newCar.getCarAge())


class Employee {
  constructor(
    public name: string,
    public position: string,
    private _salary: number,
  ) { }
  getSalary(): number {
    return this._salary
  }
  giveRaise(value: number): number {
    this._salary += value
    return this._salary
  }
}

const Dubea = new Employee('Lucky Francis', 'junior frontend developer', 50000)
// console.log(Dubea);
// console.log(Dubea.getSalary());
// console.log(Dubea.giveRaise(5000));

// UNION TYPES

type formatProps = string | number

const formatInput = (value: formatProps): void => {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toLocaleString());
  }
}

// formatInput('interpolation')
// formatInput(13856452)

type Mixed = string | number

const mixedArray: Mixed[] = []
mixedArray.push('developer', 1998, 2015, 'designer', 'engineer', 33390)

const processArray = (arr: Mixed[]): void => {
  arr.map(item => {
    if (typeof item === "string") {
      console.log(`STRING: ${item}`)
    } else {
      console.log(`NUMBER: ${item}`)
    }
  })

}

// console.log(mixedArray);
// processArray(mixedArray)



// Index Signature & keyof Assertion

// Exercise 1: Using Index Signatures for Dynamic Object Properties

interface InventoryProp {
  [key: string]: number
}

const addToInventory = (inventory: InventoryProp, key: string, value: number): InventoryProp => {
  return {
    ...inventory,
    [key]: (inventory[key] || 0) + value
  }
}

let inventory: InventoryProp = {}

inventory = addToInventory(inventory, 'apple', 5)
// console.log(inventory);
inventory = addToInventory(inventory, 'banana', 3)
// console.log(inventory);
inventory = addToInventory(inventory, 'apple', 2)
// console.log(inventory);

// Exercise 2: Using keyof for Type-Safe Access

interface PersonInfoProp {
  name: string,
  age: number,
  jobTitle: string
}

const getPersonProperty = (user: PersonInfoProp, value: keyof PersonInfoProp): PersonInfoProp[keyof PersonInfoProp] => {
  return user[value]
}

const per: PersonInfoProp = { name: 'dubea', age: 35, jobTitle: 'Developer' }
// console.log(per);
// console.log(getPersonProperty(per, 'name'));
// console.log(getPersonProperty(per, 'age'));
// console.log(getPersonProperty(per, 'jobTitle'));

// Exercise 3: Index Signature with Optional Properties

interface SettingsProp {
  [key: string]: string;
}

const updateSetting = (setting: SettingsProp, key: string, value: string): SettingsProp => {
  return {
    ...setting,
    [key]: value
  }
}

let appSettings: SettingsProp = {}
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
  private questions: Array<{
    questionText: string;
    options: string[];
    correctAnswer: string;
  }> = []
  constructor(public quizName: string) { }
  addQuestion(questionText: string, options: string[], correctAnswer: string): void {
    if (!options.includes(correctAnswer)) {
      throw new Error('Correct answer must be included in the options')
    }
    this.questions.push({ questionText, options, correctAnswer })
  }
  takeQuiz(): void {
    let score = 0
    console.log(`welcome to the ${this.quizName} quiz!`);
    for (let index = 0; index < this.questions.length; index++) {
      const question = this.questions[index]
      console.log(`\nQuestion ${index + 1}: ${question.questionText}`);

      question.options.forEach((option, index) => {
        console.log(`${index + 1}. ${option}`);
      })

      const userAnswer = prompt("Enter the number of your answer:")

      if (userAnswer && question.options[parseInt(userAnswer) - 1] === question.correctAnswer) {
        console.log('correct');
        score++
      } else {
        console.log(`incorrect. the correct answer is ${question.correctAnswer}`);
      }
    }
    console.log(`\nQuiz completed! your score: ${score}/${this.questions.length}`);

  }
}

const MyQuiz = new Quiz('Typscript basics')

MyQuiz.addQuestion(
  "What keyword is used to declare a variable in JavaScript?",
  ["var", "let", "const", "all of the above"],
  "all of the above"
);

MyQuiz.addQuestion(
  "Which of these is not a JavaScript data type?",
  ["number", "boolean", "string", "float"],
  "float"
);

MyQuiz.addQuestion(
  "What will '2' + 2 evaluate to in JavaScript?",
  ["4", "22", "NaN", "TypeError"],
  "22"
);
// console.log(MyQuiz);

// MyQuiz.takeQuiz()


class BankAccount {
  constructor(
    public accountNumber: number,
    public ownerName: string,
    public balance: number
  ) {
  }
  deposit(amount: number): string {
    if (amount > 0) {
      this.balance += amount
      return `Deposited ${amount}. New balance: ${this.balance}`
    } else {
      return 'Invalid deposit amount. please enter a positive number'
    }
  }
  withdraw(amount: number): string {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount
      return `withdrawn ${amount}. New balance: ${this.balance.toFixed(2)}.`
    } else if (amount <= 0) {
      return 'Invalide withdrawal amount. please enter a valid number'
    } else {
      return 'Insufficient balance for this withdrawal'
    }
  }
  getAccountInfo(): string {
    return `
    account name: ${this.ownerName.toUpperCase()}
    account number: ${this.accountNumber}
    account balance: ${this.balance.toFixed(2)}
     `
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
  constructor(
    public title: string,
    public author: string,
    public pages: number,
    public isRead: boolean
  ) { }
  toggleReadStatus(): void {
    this.isRead = !this.isRead;
  }

}

const Book1 = new Book('predictabily irrational', 'daniel oriley', 293, false)
const Book2 = new Book('seeking truth finding jesus', 'nabeel quareshi', 440, true)


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
const displayId = (id: number | string): void => {
  if (typeof id === 'number') {
    console.log(`#${id}`)
  } else {
    console.log(`ID: ${id}`)
  }
}

// displayId(9131260441)
// displayId('tidvnsr45928')

// type Item = 'Book' | 'Movie'
// type Item = 'Book' | 'Movie'
type Item = Books | Movies

interface Books {
  title: string
  author: string
  pages: number
}
interface Movies {
  title: string
  director: string
  durationInMinutes: number
}

const mediaList: Item[] = []

mediaList.push(
  { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281 },
  { title: "1984", author: "George Orwell", pages: 328 },
  { title: "Inception", director: "Christopher Nolan", durationInMinutes: 148 },
  { title: "The Shawshank Redemption", director: "Frank Darabont", durationInMinutes: 142 }
)


const displayMediaInfo = (Item: Item): void => {
  console.log("Title:", Item.title)

  if ("author" in Item) {
    console.log("type: Books");
    console.log("author", Item.author);
    console.log("pages", Item.pages);
  } else {
    console.log("type: Movies");
    console.log("director", Item.director);
    console.log("duration in minutes", Item.durationInMinutes);
  }
}

// mediaList.map(item => displayMediaInfo(item))


// Index Signature & keyof Assertion

// Exercise 1: Dynamic Property Access

interface UserProps {
  id: number,
  name: string,
  email: string
}

const getproperty = (user: UserProps, value: keyof UserProps): UserProps[keyof UserProps] => {
  return user[value]
}

// const client1: UserProps = {
//   id: 145,
//   name: 'Dubea',
//   email: 'test@dubea.com'
// }

// const clientId = getproperty(client1, 'id')
// const clientName = getproperty(client1, 'name')
// const clientEmail = getproperty(client1, 'email')

// console.log(`client Id: ${clientId}`);
// console.log(`client Name: ${clientName}`);
// console.log(`client Email: ${clientEmail}`);



// ////////////////////////////////////////////////////

//  Exercise 2: Flexible Config Object

type ConfigProps = {
  [key: string]: string
}

const updateConfig = (config: ConfigProps, key: string, value: string): ConfigProps => {
  return {
    ...config,
    [key]: value
  }
}

let myConfig: ConfigProps = {
  apiUrl: "https://api.example.com",
  timeout: "30000"
};

// console.log("Initial config:", myConfig);

// myConfig = updateConfig(myConfig, "apiKey", "abc123");
// console.log("After adding apiKey:", myConfig);

// myConfig = updateConfig(myConfig, "timeout", "60000");
// console.log("After updating timeout:", myConfig);

// myConfig = updateConfig(myConfig, "apiKey", "abc1235687956");
// console.log("After updating apiKey:", myConfig);


// console.log(myConfig.apiKey);


// Utility types

// partial

// exercise 1

interface UserTypesProps {
  id: number,
  name: string,
  email: string,
  address: string
}


const updateUser = (user: UserTypesProps, propsToUpdate: Partial<UserTypesProps>): UserTypesProps => {
  return { ...user, ...propsToUpdate }
}
const testUser: UserTypesProps = {
  id: 493,
  name: "Dubea",
  email: "Dubea001@gmail.com",
  address: "new nyanya beside nnpc filling station"
}

// console.log(testUser);

const updateEmail: UserTypesProps = updateUser(testUser, { email: "dubeastudio@gmail.com" })
// console.log(updateEmail);
const updateName: UserTypesProps = updateUser(testUser, { name: "stanley" })
// console.log(updateName);
const updateId: UserTypesProps = updateUser(testUser, { id: 366 })
// console.log(updateId);

// exercise 2
type Theme = "Light" | "Dark"

interface SettingsProps {
  theme?: Theme,
  notification?: boolean,
  language?: string,
  fontSize?: number
}

const defaultSettings: SettingsProps = {
  theme: "Light",
  notification: true,
  language: "en",
  fontSize: 24

}

function applyUserPreferences (defaultSettings: SettingsProp, userPreference: Partial<SettingsProps>): SettingsProps {
  return { 
  ...defaultSettings,
  ...userPreference 
  };
}


interface BlogPostProps {
  title?: string,
  content?: string,
  author?: string,
  date?: string
}

const publishPost = (post: Required<BlogPostProps>): void => {
  if (!post.title.trim() || !post.content.trim() || !post.author.trim() || !post.date.trim())  {
    throw new Error("All fields are required")
  }
  console.log("publishing post...");
  console.log("===============");
  
  console.log(`title: ${post.title}`);
  console.log(`Author: ${post.author}`);
  console.log(`date: ${post.date}`);
  console.log(`content: ${post.content}`);
  
  console.log("===============");
  console.log("post published successfully");
}

const completePost: Required<BlogPostProps> = {
     title: "Understanding TypeScript Utility Types",
    content: "TypeScript utility types are powerful tools...",
    author: "John Doe",
    date: "2024-03-20"
}
const emptyFieldsPost: Required<BlogPostProps> = {
    title: "",
    content: "Some content",
    author: "John Doe",
    date: "2024-03-20"
  };

  // publishPost(completePost)
  // publishPost(emptyFieldsPost)

  interface ShippingInfoProps {
    address?: string,
    city?: string,
    country?: string,
    zipCode?: number
  }

  function validateShipping(info: Required<ShippingInfoProps>): void {
    const stringFields: (keyof ShippingInfoProps)[] = ["address", "city", "country"]
    for (const field of stringFields) {
      if (typeof info[field] != "string" || !info[field].trim()) {
        throw new Error(`${field} must be a non empty string`);
      }
    }
    if (typeof info.zipCode !== "number" || isNaN(info.zipCode) || info.zipCode <= 0) {
      throw new Error("zipCode must be a positive number")
    }
    console.log("shipping information is valid....");
    setTimeout(() => {
      console.log("Processing Data....");
    }, 3000)
    setTimeout(() => {
      console.log(`Address: ${info.address}`);
      console.log(`city: ${info.city}`);
      console.log(`country: ${info.country}`);
      console.log(`zipCode: ${info.zipCode}`);
    }, 6000)
    setTimeout(() => {
      console.log("Completed");
    }, 9000)
}



  const client1: Required<ShippingInfoProps> = {
    address: "new nyanya",
    city: "karu",
    country: "",
    zipCode: 58257626
    
  } 

   const client3: Required<ShippingInfoProps> = {
    address: "123 Main St",
    city: "Anytown",
    country: "USA",
    zipCode: 5
  };
  
  
  // validateShipping(client1)
  // validateShipping(client3)
  
  
  const client2: Required<ShippingInfoProps> = {
    address: "new nyanya",
    city: "karu",
    country: "nigeria",
    zipCode: 4588910
  } 

  // validateShipping(client2)

  interface ConfigurationProps {
    apiKey: string,
    timeout: number,
    baseURL: string
  }

  function freezeConfig(config: ConfigurationProps): Readonly<ConfigurationProps> {
    return config;
  }

  const config1: ConfigurationProps = {
    apiKey: "525hgfjkfcjfvngfvbglhh",
    timeout: 5000,
    baseURL: "https://google.com"
  }
  // const frozenConfig = freezeConfig(config1)
  // console.log(frozenConfig);
  // frozenConfig.timeout = 6000
  // frozenConfig.apiKey = "fhfgjjgfjggkj"
  // frozenConfig.baseURL = "https://tesla.com"
  // console.log(frozenConfig);

  interface GameStateProp {
    score: number,
    level: number,
    lives: number
  }
  
  function createGameSnapShot(currGameState: GameStateProp): Readonly<GameStateProp> {
    return currGameState
  }

  const masterUser: GameStateProp = {
    score: 13,
    level: 1,
    lives: 25
  }

  const masterUserCurrentState = createGameSnapShot(masterUser)
  // console.log(masterUserCurrentState);
  // console.log(masterUserCurrentState.level);
  // console.log(masterUserCurrentState.lives);
  // console.log(masterUserCurrentState.score);


  interface EmployeeInfo {
    name: string,
    role: string,
    department: string
  }

  type Employees = Record<string, EmployeeInfo>

  let employees: Employees = {}

  function addEmployee(id: string, employee: EmployeeInfo): Employees {
    employees[id] = employee;
    return employees
  }
  function removeEmployee(id: string): Employees {
    delete employees[id]
    return employees
  }
  function updateEmployee(id: string, updateInfo: Partial<EmployeeInfo>): Employees {
    employees[id] = {...employees[id], ...updateInfo}
    return employees

  }

  const newEmployee: EmployeeInfo = {
    name: "dubea",
    role: "software dev",
    department: "backend"
  }
  const newEmployee1: EmployeeInfo = {
    name: "caleb",
    role: "designer",
    department: "ui/ux"
  }
  const newEmployee2: EmployeeInfo = {
    name: "elijah",
    role: "web dev",
    department: "frontend"
  }

  
  addEmployee("1001", newEmployee)
  addEmployee("1002", newEmployee1)
  addEmployee("1003", newEmployee2)
  console.log(employees);

  removeEmployee("1002")
  console.log(employees);

  updateEmployee("1003", {role: "senior sofware developer"})
  console.log(employees);
  
  
  
  
  
  
  




// PRACTICE EXERCISES END
