import {
  storeData
} from "./storeData.js"


const API = {
  get: (source) => {
    // const query = queries.api.parkingOpen
    // const appToken = 'SAA7itayRYqrmMoM3qmGRtbR5'
    // const parkingopenurl = `https://opendata.rdw.nl/resource/${query}.json?&$$app_token=${appToken}`
    return new Promise((resolve, reject) => {
      d3.json(source)
        // .then(res => storeData.set(res, source))
        .then(data => {
          resolve(data)
        })
        .catch(err => {
          reject(console.log(err))
        })
    })
  },
  local: () => {
    const data = storeData.get(source)
    console.log(data)
    return data
  }
}

export {
  API
}