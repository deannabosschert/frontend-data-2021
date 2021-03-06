import {
  getData
} from "./modules/getData.js"
import {
  loadingState
} from "./modules/adds/loader.js"
import {
  renderGraph
} from "./modules/renderGraph.js"
import {
  exitNotPossible
} from "./modules/lib/check-exit-possible.js"
import {
  seeArrayLength
} from "./modules/lib/see-array-length.js"
import {
  mapDataPO
} from "./modules/static/map-data-po.js"
import {
  mapDataTV
} from "./modules/static/map-data-tv.js"
import {
  mapDataGR
} from "./modules/static/map-data-gr.js"
import {
  combineData
} from "./modules/combineData.js"
import {
  sortData,
  filterTopTwenty
} from "./modules/sortData.js"
let renderData

(function init() {
  (async () => {
    loadingState('active')
    try {
      const parkingOpen_1 = await getData.parking("parkingOpen")
        .then(data => mapDataPO(data))
        .then(data => exitNotPossible(data))

      const parkingTijdvak_2 = await getData.parking("parkingTijdvak")
        .then(data => mapDataTV(data))

      const gebiedRegeling_3 = await getData.parking("gebiedRegeling")
        .then(data => mapDataGR(data))

      const gebiedLocatie_4 = await getData.parking("gebiedLocatie")
      .then(data => seeArrayLength(data))

      return renderData = await combineData(parkingOpen_1, parkingTijdvak_2, gebiedRegeling_3, gebiedLocatie_4)
        .then(data => sortData(data))
        .then(data => filterTopTwenty(data))
        .then(data => renderGraph.barz(data))
        .then(() => loadingState(''))
        
    } catch (err) {
      console.error(err)
    }
  })()
})()