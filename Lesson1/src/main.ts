// LESSON 9 STARTS
// UTILITY TYPES

// PARTIAL

interface AssignmentProps {
  studentId: string,
  title: string,
  grade: number,
  verified?: boolean
}

const updateAssignment = (assign: AssignmentProps, propsToUpdate: Partial<AssignmentProps>): AssignmentProps => {
  return {...assign, ...propsToUpdate}
}

const student1: AssignmentProps = {
  studentId: "grgth1695",
  title: "final project",
  grade: 0,
}
// console.log(student1);

// console.log(updateAssignment(student1, {grade: 90, verified: true}));
const assignGraded: AssignmentProps = updateAssignment(student1, {grade: 786})

// REQUIRED AND READONLY

const recordAssignment = (assign: Required<AssignmentProps>): AssignmentProps => {
  return assign
}

const assignVerified: Readonly<AssignmentProps> = {...assignGraded, verified: true}


const hexColorMap: Record<string, string> = {
  red: "fff0000",
  green: "00ff00",
  blue: "0000ff",
}

// console.log(hexColorMap);

type Students = "Sara" | "gilmor" | "hindershiel"
type Gender = "male" | "female"
type LetterGrade = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrade> = {
  Sara: "C",
  gilmor: "A",
  hindershiel: "D"
}

// console.log(finalGrades);

interface Grades {
  biology: number,
  physics: number,
  chemistry: number
}

const gradeData: Record<Students, Grades> = {
  Sara: {biology: 60, physics: 74, chemistry: 33},
  gilmor: {biology: 51, physics: 44, chemistry: 83},
  hindershiel: {biology: 80, physics: 39, chemistry: 23},
}

// console.log(gradeData);
// console.log(gradeData.gilmor.chemistry);

type AssignResult = Pick<AssignmentProps, "studentId" | "grade">

const score: AssignResult = {
  studentId: "htfsfbnuug152",
  grade: 55,
}

// console.log(score);

type AssignPreview = Omit<AssignmentProps, "grade" | "verified">

const preview: AssignPreview = {
  studentId: "gtfdf5567924",
  title: "second year project"
}

// console.log(preview.studentId);
// console.log(preview.title);
// console.log(preview);


// Exclude and Extract

type adjustedGrades = Exclude<LetterGrade, "U" | "C">
type highGrades = Extract<LetterGrade, "A" | "B">

// NonNullable

type AllPossibleGrades =  "dave" | "dubea" | "daniel" | null
 | undefined

type NamesOnly = NonNullable<AllPossibleGrades>

// ReturnType

// type newAssign = {
//   title: string,
//   points: number

// }

const createNewAssign = (title: string, points: number) => {
  return {title, points}
}

const assign1: newAssign = createNewAssign("typescript tutorial", 88)

// console.log(assign1);

type newAssign = ReturnType<typeof createNewAssign>

const tsAssign: newAssign = createNewAssign("utility patent", 97)
// console.log(tsAssign);

// Parameters

type AssignParams = Parameters<typeof createNewAssign>
const assignArg: AssignParams = ["generics", 450]

const newestAssign: newAssign = createNewAssign(...assignArg)

// console.log(newestAssign);


// Awaited - helps us with the returnType of a promise

interface UserProps {
  id: number,
  name: string,
  username: string,
  email: string
}

const fetchUsers = async (): Promise<UserProps[]> => {
  const data = await fetch('https://jsonplaceholder.typicode.com/users').then(response => {
    return response.json()
  }).catch(err => {
    if (err instanceof Error) console.log(err.message);
  })
  return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(user => console.log(user))










// LESSON 9 ENDS
// LESSON 8 STARTS
// GENERICS

// // const stringEcho = (arg: string): string => arg
// const echo = <T>(arg: T): T => arg

// const isObj = <T>(arg: T): boolean => {
//   return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
// }

// const isTrue =  <T>(val: T): {val: T, is: boolean} => {
//   if (Array.isArray(val) && !val.length || isObj(val) && !Object.keys(val as keyof T).length) {
//     return {val, is: false}
//   }
//   return {val, is: !!val}
// }

// // console.log(isTrue(false));
// // console.log(isTrue(0));
// // console.log(isTrue(true));
// // console.log(isTrue(1));
// // console.log(isTrue('dave'));
// // console.log(isTrue(''));
// // console.log(isTrue(null));
// // console.log(isTrue(undefined));
// // console.log(isTrue({}));
// // console.log(isTrue({name: 'elis'}));
// // console.log(isTrue([]));
// // console.log(isTrue([1, 2, 3]));
// // console.log(isTrue(NaN));
// // console.log(isTrue(-0));

// interface checkBoolValueProps<T> {
//   value: T,
//   is: boolean
// }


// const checkBooleanValue =  <T>(val: T): checkBoolValueProps<T> => {
//   if (Array.isArray(val) && !val.length || isObj(val) && !Object.keys(val as keyof T).length) {
//     return {value: val, is: false}
//   }
//   return {value: val, is: !!val}
// }

// interface HasId {
//   id: number
// }

// const processUser = <T extends HasId>(user: T): T => {
//   return user
// }

// // console.log(processUser({id: 1, name: "dubea"}));
// // console.log(processUser({ name: "davin"}));

// const getUserProperty = <T extends HasId, K extends keyof T> (users: T[], key: K): T[K][] => {
//   return users.map(user => user[key]) 
// }

// const userArray = [
//   {
//   "id": 1,
//   "firstname": "John",
//   "lastname": "Doe",
//   "email": "johndoe@example.com",
//   "birthDate": "1973-01-22",
//   "login": {
//     "uuid": "1a0eed01-9430-4d68-901f-c0d4c1c3bf22",
//     "username": "johndoe",
//     "password": "jsonplaceholder.org",
//     "md5": "c1328472c5794a25723600f71c1b4586",
//     "sha1": "35544a31cc19bd6520af116554873167117f4d94",
//     "registered": "2023-01-10T10:03:20.022Z"
//   },
//   "address": {
//     "street": "123 Main Street",
//     "suite": "Apt. 4",
//     "city": "Anytown",
//     "zipcode": "12345-6789",
//     "geo": {
//       "lat": "42.1234",
//       "lng": "-71.2345"
//     }
//   },
//   "phone": "(555) 555-1234",
//   "website": "www.johndoe.com",
//   "company": {
//     "name": "ABC Company",
//     "catchPhrase": "Innovative solutions for all your needs",
//     "bs": "Marketing"
//   }
// },
// {
//   "id": 2,
//   "firstname": "Jane",
//   "lastname": "Smith",
//   "email": "janesmith@example.com",
//   "birthDate": "1983-02-22",
//   "login": {
//     "uuid": "2a0eed02-9430-4d68-901f-c0d4c1c3bf22",
//     "username": "janesmith",
//     "password": "jsonplaceholder.org",
//     "md5": "c1328472c5794a25723600f71c1b4586",
//     "sha1": "35544a31cc19bd6520af116554873167117f4d94",
//     "registered": "2022-06-10T12:45:20.022Z"
//   },
//   "address": {
//     "street": "456 Oak Street",
//     "suite": "Suite 200",
//     "city": "Anytown",
//     "zipcode": "12345-6789",
//     "geo": {
//       "lat": "42.3456",
//       "lng": "-71.6789"
//     }
//   },
//   "phone": "(555) 555-5678",
//   "website": "www.janesmith.com",
//   "company": {
//     "name": "XYZ Corporation",
//     "catchPhrase": "Leading the way in innovation",
//     "bs": "Finance"
//   }
// }
// ]

// // console.log(getUserProperty(userArray, "login"));
// // console.log(getUserProperty(userArray, "website"));
// // console.log(getUserProperty(userArray, "phone"));


// class StateObject<T> {
//   private data: T
//   constructor(value: T) {
//     this.data = value
//   }
//   get state(): T {
//     return this.data
//   }
//   set state(value: T) {
//     this.data = value
//   }
// }

// const store = new StateObject(55)
// const store2 = new StateObject("daniel")
// store2.state = "gtinder"
// // console.log(store.state);
// // store.state = "Dani"
// console.log(store.state);

// const test = new StateObject<(string|number|boolean)[]>([155])

// test.state = (['dubea', 545, true, 99])
// console.log(test.state);


// // store.state = true
// console.log(store2.state);
// store.state = 91
// console.log(store.state);



// // console.log(isObj(false));
// // console.log(isObj(4452));
// // console.log(isObj('str'));
// // console.log(isObj({name: 'dubea', age: 22}));
// // console.log(isObj(null));
// // console.log(isObj(undefined));






// LESSON 8 ENDS








// LESSON 7 STARTS



// Index Signature & keyof Assertion

// interface TransactionObject {
//   [index: string]: number
// }
// interface TransactionObject {
//   [index: string]: number
//   pizza: number,
//   books: number,
//   job: number
// }

// const todayTransaction: TransactionObject = {
//   pizza: -10,
//   books: -5,
//   job: 50,
// }

// // console.log(todayTransaction.pizza);
// // console.log(todayTransaction['pizza']);

// let prop: string = 'pizza'
// // console.log(todayTransaction[prop]);

// const todaysNet = (transactions: TransactionObject): number => {
//   let total = 0
//   for (const transaction in transactions) {
//     total += transactions[transaction]
//   }

//   return total
// }

// // console.log(todaysNet(todayTransaction));

// // todayTransaction.pizza = 45

// interface StudentProp {
//   // [key: string]: string | number | number[] |undefined
//   name: string,
//   GPA: number,
//   classes?: number[]
// }
// const student: StudentProp = {
//   name: "Dubea",
//   GPA: 3.5,
//   classes: [100, 200]
// }

// // console.log(student);

// for (const key in student) {
//   // console.log(`${key}: ${student[key as keyof StudentProp]}`);
  
// }

// Object.keys(student).map(key => {
//   // console.log(`${key}: ${student[key as keyof typeof student]}`);
  
// })

// const logStudentKey = (student: StudentProp, key: keyof StudentProp): void => {
//   // console.log(`Student ${key}: ${student[key]}`);
  
// }

// // logStudentKey(student, 'name')
// // logStudentKey(student, 'GPA')
// // logStudentKey(student, 'classes')

// // /////////////////////////////////////////////////////////////////////////

// type Streams = 'salary' | 'bonus' | 'sidehustle'

// type Incomes = Record<Streams, number | string>


// const monthlyIncomes: Incomes = {
//   salary: 500,
//   bonus: 100,
//   sidehustle: 250
// }

// for (const revenue in monthlyIncomes) {
//   // console.log(`${monthlyIncomes[revenue as keyof Incomes]}`);
// }




// LESSON 7 ENDS



// LESSON 6 STARTS

// CLASSES IN TYPESCRIPT

// const logMsg = (message: any): void => {
//     console.log(`${typeof message}: ${message}`);
// };

// class Coder {
//     constructor(
//         public readonly name: string,
//         public music: string,
//         private age: number,
//         protected lang: string = 'typescript'
//     ) {
//         this.name = name;
//         this.music = music;
//         this.age = age;
//         this.lang = lang;
//     }

//     public getAge() {
//         return this.age;
//     }
// }

// // const Dubea = new Coder('dubea', 'rap', 24, 'javascript');

// // logMsg(Dubea.getAge());
// // logMsg(Dubea.name);
// // logMsg(Dubea.music);

// class WebDev extends Coder {
//     constructor(
//         public computer: string,
//         name: string,
//         music: string,
//         age: number
//     ) {
//       super(name, music, age)
//       this.computer = computer
//     }
//     public reviewUser() {
//       return `${this.name} is ${this.getAge()} and writes program in ${this.lang} and uses a ${this.computer}`
//     }
// }

// const Dubea = new WebDev('mac', 'Dubea', 'Rap', 24)

// // console.log(Dubea.reviewUser());


// const Tizzy = new WebDev('windows', 'Tizzy', 'R&B', 25)
// // console.log(Tizzy.reviewUser());
// /////////////////////////////////////////////////////////////////////////

// interface Musician {
//   name: string
//   instrument: string
//   play(action: string): string
// }

// class Guitarist implements Musician {
//   name: string
//   instrument: string;
//   constructor(name: string, instrument: string) {
//     this.name = name
//     this.instrument = instrument
//   }
//   play(action: string) {
//     return `${this.name} ${action} the ${this.instrument}`
//   }
// }

// const Enzo = new Guitarist('Enzo Maresca', 'Piano', )
// // console.log(Enzo.play('Stroke'))

// /////////////////////////////////////////////////////////////////////////

// class Peeps {
//   static count: number = 0

//   static getCount(): number {
//     return Peeps.count
//   }
//   public id: number

//   constructor(public name: string) {
//     this.name = name
//     this.id = ++Peeps.count
//   }
// }

// const Caleb = new Peeps('Caleb')
// const Joshua = new Peeps('Joshua')
// const Elijah = new Peeps('Elijah')
// const Isti = new Peeps('Isti')

// // logMsg(Peeps.count)
// // logMsg(Caleb.id)
// // logMsg(Joshua.id)
// // logMsg(Isti.id)
// // logMsg(Elijah.id)

// class Bands {
//   private dataState: string[]

//   constructor() {
//     this.dataState = []
//   }
//   public get data(): string[] {
//     return this.dataState
//   }
//   public set data(value: string[]) {
//     if (Array.isArray(value) && value.every(element => typeof element === 'string')) {
//       this.dataState = value
//       return
//     } else throw new Error('Param is not an array of strings')
//   }
// }

// const MyBands = new Bands()

// MyBands.data = ['dubea', 'tizzy', 'cabo']
// logMsg(MyBands.data)
// console.log(MyBands.data);
// MyBands.data = [...MyBands.data, 'elis']
// console.log(MyBands.data);
// MyBands.data = ['isti', 'geto', 'dubea']
// console.log(MyBands.data);


// LESSON 6 ENDS




// LESSON 5 STARTS

// const logMsg = (message: any): void => {
//   console.log(`${typeof message}: ${message}`)
// }

// type One = string
// type Two = string | number
// type Three = 'hello'

// let a: One = 'world'
// let b = a as Two
// let c = a as Three

// let d = <One>'Today'
// let e = <number | boolean>(39 + 3)

// const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
//   if (c === 'add') return a + b
//   return '' + a + b
// }

// let strValue: string = addOrConcat(4, 3, 'concat') as string
// let numValue: number = addOrConcat(4, 3, 'add') as number

// // logMsg(strValue)
// // logMsg(numValue)

// const image = document.querySelector('img') as HTMLImageElement
// const image1 = document.getElementById('#img') as HTMLImageElement
// const image2 = <HTMLImageElement>document.querySelector('#img2')

// image.src
// image1.src
// image2.src

// logMsg(image)
// logMsg(image1)
// logMsg(image2)

// LESSON 5 ENDS

// LESSON 4 STARTS
// TYPE ALIASES

// type stringOrNumber = string | number
// type stringOrNumberArray = (string | number)[]

// type ClubProps = {
//   name?: string;
//   isActive: boolean;
//   trophies: stringOrNumberArray
// }

// type UserId = stringOrNumber

// // LITERAL TYPES
// let myName: 'Dubea'
// let userName: 'dubea' | 'lucky' | 'francis'

// // userName = 'francis'
// // console.log(userName)
// // userName = 'dubea'
// // console.log(userName)

// //  functions
// const add = (a: number, b: number): number => {
//   return a + b
// }

// const logMsg = (message: any): void => {
//   console.log(message)
// }

// // logMsg('hello world')
// // logMsg(add(14, 4))
// // logMsg(true)

// function subtract(c: number, d: number): number {
//   return c - d
// }

// type MathFunction = (a: number, b: number) => number
// // interface MathFunction {
// //   (a: number, b: number): number
// // }

// let multiply: MathFunction = function (c, d) {
//   return c * d
// }
// // logMsg(multiply(2, 8))

// // optional parameters
// const addTotal = (a: number, b: number, c?: number): number => {
//   if (typeof c !== 'undefined') {
//     return a + b + c
//   }
//   return a + b
// }
// const sumTotal = (a: number, b: number, c: number = 5): number => {
//   return a + b + c
// }
// // logMsg(addTotal(4, 9, 6))
// // logMsg(addTotal(4, 9))
// // logMsg(sumTotal(6, 1))
// // logMsg(sumTotal(6, 4, 3))

// // Rest Parameters
// const total = (a: number, ...nums: number[]): number => {
//   return a + nums.reduce((p, c) => p + c)
// }
// // logMsg(total(5, 2, 4))

// const createError = (errMsg: string): never => {
//   throw new Error(errMsg)
// }
// // logMsg(createError('failed to load server'))

// const infinite = () => {
//   let i: number = 1
//   while (true) {
//     i++
//     if (i > 100) break
//   }
// }

// const isNumber = (value: any): boolean => {
//   return typeof value === 'number' ? true : false
// }
// const isString = (value: any): boolean => {
//   return typeof value === 'string' ? true : false
// }

// const numOrStr = (value: number | string): string => {
//   if (isString(value)) return 'string'
//   if (isNumber(value)) return 'number'
//   return createError('this will never happen')

// }

// logMsg(numOrStr(39))
// logMsg(numOrStr('undefined'))

// LESSON 4 ENDS

// LESSON 3 STARTS
// let stringArray = ["one", "two", "three"]
// let ballArray = ["messi", "ronaldo", 2024]
// let mixedData = ["EV", false, 1930]

// stringArray[0] = "six";
// stringArray.push("seven")

// let test = []
// let teams: string[] = []
// teams.push('liverpool')
// teams.push('barcelona')
// console.log(teams)

// let tuple: [string, number, boolean] = ["test", 55, true]
// let mixed = ['john', 33, false]

// mixed = tuple

// let myObject: object
// myObject = []

// interface ClubProps {
//   name?: string;
//   isActive: boolean;
//   trophies: (string | number)[]
// }

// let team1: ClubProps = {
//   name: 'liverpool',
//   isActive: true,
//   trophies: [2024, 2019, 2020, "championsleague"]
// }
// let team2: ClubProps = {
//   name: 'bolton',
//   isActive: false,
//   trophies: [2024, 2020, "relegated"]
// }
// console.log(team1)
// console.log(team2)

// const welcomeClub = (club: ClubProps) => {
//   if (club.name) {
//     return `welcome back to the champions leauge ${club.name.toUpperCase()}`
//   }
//   return `hello guest`
// }
// console.log(welcomeClub(team1))
// console.log(welcomeClub(team2))

// enum Grade {
//   U = 4,
//   D,
//   C,
//   B,
//   A,
// }

// console.log(Grade.U)
// console.log(Grade.C)

// LESSON 3 ENDS
