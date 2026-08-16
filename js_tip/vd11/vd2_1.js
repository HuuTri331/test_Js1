const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const clonedObj = { ...obj1 };
// { foo: "bar", x: 42 }

const mergedObj = { ...obj1, ...obj2 };
// { foo: "baz", x: 42, y: 13 }

console.log(">>> check mergedObj 1 = ", clonedObj, "check mergedObj 2 = ", mergedObj);

// vd1: về object trong thực tế.
// const first_person = {
//     name: "Jack",
//     age: 24,
// }

// const second_person = { ...first_person };

// second_person.age = 25;

// console.log(first_person.age); // output: 24
// console.log(second_person.age); // output: 25

//Ví dụ 2: (not ok - sử dụng nested object)
const first_person = {
    name: "Jack",
    age: 24,
    address: {
        apartment: "A",
        city: "London"
    }
};

const second_person = { ...first_person };

second_person.age = 25;
second_person.address.apartment = "N";
console.log(first_person); // output: N
console.log(second_person); // output: N