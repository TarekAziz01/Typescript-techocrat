// Reference type --> Object

const user: {
    readonly company: string // type -->literal types
    firstName: string
    middleName?:string //optional type
    lastName: string
    isMarried: boolean
} = {
    company: "Programming Hero",
    firstName: "Tarek",
    lastName: "Aziz",
    isMarried: false
}
