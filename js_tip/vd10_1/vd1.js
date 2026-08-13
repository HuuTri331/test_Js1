console.log("hello 1");

const user = {
    name: "tri",
    age: "34",
    address: "hcm"
}

// khai báo cổ điển

// const name = user.name;
// const age  = user.age;
// const address = user.address;

// khai báo nên sử dụng.

const {name, age, address } = user;

console.log("name: ", name, "age = ", age, "address: ", address);

const level = ["internship", "fresher", "junior", "middle", "senior"];

// khai báo cổ điển 

// const a = level [0];
// const b = level [4];

// khai báo nên sử dụng.

const [ ,a, , ,b] = level;

console.log("a = ",a,"b = ", b);