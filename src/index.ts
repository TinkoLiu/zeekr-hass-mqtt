import { getStatus } from './services/zeekr.js'
import { mqClient } from './utils/mq.js'
import { hassService } from './services/hass.js'
import { formatDateTime } from './utils/date.js'

async function doUpdate () {
  console.log(`[${formatDateTime(new Date())}] Updating vehicle status...`)
  const status = await getStatus()
  hassService.updateVehicleStatus(status)
}

async function main () {
  try {
    await mqClient.connect()
    hassService.updateDeviceTrackerConfig()
    hassService.updateSensorConfig()
    await doUpdate()
    setInterval(doUpdate, 60 * 1000)
  } catch (error) {
  }
}

main()
