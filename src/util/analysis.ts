const getSumByCategory = (data: TTransaction[]) => {
  data.reduce((acc, cur) => {
    const { category_id, amount } = cur;
    if (acc[category_id]) {
      acc[category_id] += amount;
    } else {
      acc[category_id] = amount;
    }
    return acc;
  }, {} as Record<number, number>);
};
