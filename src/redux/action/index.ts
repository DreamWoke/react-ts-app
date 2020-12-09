export const addCount = (count: number) => {
  return {
    type: "addCount",
    count,
  }
}

export const reduce = (count: number) => {
  return {
    type: "reduceCount",
    count,
  }
}
