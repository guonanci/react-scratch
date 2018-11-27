// Nominal Tying
// Useful to model domain concepts that are using primitive data type for it's value

// Model 1: using 'interface'
interface IName extends String { _brand: 'Name' }
const createName = (name: string): IName => {
  // validation of business rules
  return name as any
}

// Method 2: using 'enum'
enum SurnameBrand {}
type Surname = SurnameBrand & string
// interface Surname extends String { _brand: 'Surname' }
const createSurname = (surname: string): Surname => {
  // validation of business rules
  return surname as any
}

type Person = {
  name: IName
  surname: Surname
}

const person: Person = {
  name: createName('Piotr'),
  surname: createSurname('Witek')
}

// Type system will ensure that the domain objects can only contain correct data
// person.name = 'Karol' // error
// person.name = person.surname // error
person.name = createName('Karol') // OK!
// person.surname = 'Mate' // error
// person.surname = person.name // error
person.surname = createSurname('Mate') // OK!

// east casting to supertype
let str: string
str = person.name.toString()
str = person.surname
