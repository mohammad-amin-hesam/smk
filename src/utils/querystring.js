export const parseQuery= (input = '') => {
  const query = new URLSearchParams(input)

  let data = {}

  for (let params of query.entries()) {
    data[params[0]] = params[1]
  }
  return data
}