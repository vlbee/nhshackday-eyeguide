
const titleCase = (string) => {
  const regex = /\w*/g;
  return string.trim().replace(regex, (txt) => { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() })
}

export default titleCase
