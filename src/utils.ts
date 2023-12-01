export const formatNumber = (value: string | number) => {
  const number = Number(value);

  return Intl.NumberFormat("en-US").format(number);
};

type Falsy = false | 0 | "" | null | undefined;

export const isTruthy = <T>(x: T | Falsy): x is T => !!x;
