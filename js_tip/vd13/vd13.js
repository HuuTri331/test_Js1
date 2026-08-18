const x = {
    name: 'Alice',
    cat: {
        name: "Eric"
    }
};

// thao tác với biến
// console.log("check name=", x.cat.name);
// console.log("check name=", x?.dog?.name);
console.log("check name=", x?.dog?.name ?? "k lay dc gia trị");

// const arr1 = [1, 2, 3];
// thao tác với funtion
const arr1 = null;
const arr2  = arr1?.map(item => item * 2) ??[];

console.log(">>> check arr2 = ", arr2, " arr1 = ", arr1);