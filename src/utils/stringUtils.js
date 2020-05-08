export function getTitleFromPath(path) {
  return path.slice(path.lastIndexOf("/") + 1).replace(/-/gi, " ");
}

export function removeQueryParamsFromText(path) {
  return path.slice(0, path.lastIndexOf("?"));
}

export function getCleanTitleFromPath(path) {
    return removeQueryParamsFromText( getTitleFromPath(path) );
}
