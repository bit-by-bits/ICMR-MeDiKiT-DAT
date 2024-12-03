export function capitalizeWord(str: string): string {
  return str[0].toUpperCase() + str.slice(1);
}

export function isValidImageURL(url: string): boolean {
  const imageExtensions = /\.(jpg|jpeg|png|gif|bmp|webp|svg)$/i;
  return imageExtensions.test(url) || /^(https?:\/\/.*)/.test(url);
}
