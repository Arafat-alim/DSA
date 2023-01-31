const a = [
  {
    id: 1,
    data: [1, 2, 3],
  },
  {
    id: 1,
    data: [3],
  },
  {
    id: 1,
    data: [4, 5, 6],
  },
  {
    id: 1,
    data: [7, 8, 9],
  },
];

const ans = a
  .map((item) => item.data)
  .flat()
  .reduce((acc, curr) => acc + curr);
console.log(ans); // 48
