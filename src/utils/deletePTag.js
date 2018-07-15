const deletePTag = (html) => {
  const regexP = /(<p>)|(<\/p>)/g;
  return html.replace(regexP, '')
}

export default deletePTag