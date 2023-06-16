export function getCroppedString(words: string): string {
  return words.length > 10 ? `${words.slice(0, 10)}...` : words;
}
