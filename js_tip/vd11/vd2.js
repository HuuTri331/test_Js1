const arr1 = [1,[2,1,5],3];

// const arr2 = arr1.push(6);

// arr1.push(5);
// const arr2  = arr1; 

// cách viết tối giản khi muốn thêm vào mag(array).
// Lưu ý: nên sử dụng với những array có cấu trúc đơn giản.
const arr2 = [0,...arr1,5];

 console.log(">>> check array 1 = ", arr1, "check array 2 = ", arr2);