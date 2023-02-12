/**
 * Splits the string by last occurrence of the given splitter
 */
export const splitByLastOccurrence = (
  inputString: string,
  splitter: string
) => {
  const indexOfLastSplitter = inputString.lastIndexOf(splitter);
  const prefix = inputString.substring(0, indexOfLastSplitter);
  const suffix = inputString.substring(indexOfLastSplitter + 1);
  return [prefix, suffix] as const;
};
export const getIdFromSwapiURL = (url: string) => {
  let temp = url;
  if (temp[temp.length - 1] === "/") {
    temp = temp.slice(0, -1);
  }

  return splitByLastOccurrence(temp, "/")[1];
};
