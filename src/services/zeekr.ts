import { zeekrGotInstance } from '../utils/got.js'
import { appConfig } from '../utils/config.js'
import { VehicleStatus, VehicleStatusResponse } from '../utils/vehicleStatus.js'
export async function getStatusState () {
  const response = await zeekrGotInstance.get(`remote-control/vehicle/status/state/${appConfig.vin}`, {
    searchParams: {
      userId: appConfig.userId,
    },
  })
  return JSON.parse(response.body)
}

export async function getStatus (): Promise<VehicleStatus> {
  const response = await zeekrGotInstance.get(`remote-control/vehicle/status/${appConfig.vin}`, {
    searchParams: `latest=&target=&userId=${appConfig.userId}`,
  }).json<VehicleStatusResponse>()
  return response.data.vehicleStatus
}

// export async function updateToken () {
//   const response = await zeekrGotInstance.put('auth/account/session/secure', {
//     json: {
//       refreshToken: 'OENBNkZBN0ZDQjc4QzYwREFGQUVGNzJBRTI2NzYwMjE=',
//     }
//   })
//   console.log(response.body)
//   return JSON.parse(response.body)
// }
