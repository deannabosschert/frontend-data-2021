module.exports = function getData(datasource, variable) { // get data from local file
  return new Promise((resolve, reject) => {
    const colors = datasource.map(item => ({
      [variable]: item[variable]
    }))
    resolve(colors)
  })
}