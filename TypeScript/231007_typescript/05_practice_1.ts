function arrElement<T>(arr: T[], index: number): T | boolean {
  if (index < 0 || index >= arr.length) {
    return false;
  }
  return arr[index];
}

console.log(arrElement<string>(["a"], 1));

console.log(arrElement<string>(["a"], 0));
