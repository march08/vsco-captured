export const formatNumber = (value: string | number) => {
  const number = Number(value);

  return Intl.NumberFormat("en-US").format(number);
};

type Falsy = false | 0 | "" | null | undefined;

export const isTruthy = <T>(x: T | Falsy): x is T => !!x;

export const getImageUrl = (imageId: string) => `https://vsco.co/i/${imageId}`;

export const replaceInnerText = (id: string, value: string) => {
  const el = document.getElementById(id);
  try {
    el.innerText = value;
  } catch (e) {}
};
