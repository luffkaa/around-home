export const handleGroupBy = 
  <T, K extends keyof any>(
    items: T[],
    getKey: (item: T) => K
) => {
  return items.reduce(
    (previous, current) => {
      const group = getKey(current);
      if (!previous[group]) previous[group] = []
      previous[group].push(current);
      return previous;
    }, {} as Record<K, T[]>
  );
};

