export const capitalizeWord = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const isValidImageURL = (url: string): boolean => {
  const imageExtensions = /\.(jpg|jpeg|png|gif|bmp|webp|svg)$/i;
  return imageExtensions.test(url) || /^https?:\/\/.*$/i.test(url);
};
