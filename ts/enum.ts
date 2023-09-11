enum OrderStatus {
    Create = 1,
    Paid = 3,
    Finish = 5,
}
enum Country {
    China = "China",
    US = "America",
    UK = "England"
}
let testInt = 1
console.log(testInt == OrderStatus.Create)
console.log("England" == Country.UK)
let from: string = Country.US
console.log(from == Country.UK)
// This comparison appears to be unintentional because the types 'Country.US' and 'Country.UK' have no overlap.
// console.log(Country.US == Country.UK)