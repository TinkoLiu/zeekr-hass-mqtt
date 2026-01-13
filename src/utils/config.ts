import 'dotenv/config'

export const appConfig = {
  appKey: process.env.ZEEKR_APP_KEY ?? '',
  userId: process.env.ZEEKR_USER_ID ?? '',
  accessToken: process.env.ZEEKR_ACCESS_TOKEN ?? '',
  vin: process.env.ZEEKR_VIN ?? '',
  mqtt: {
    broker: process.env.MQTT_BROKER_URL ?? 'mqtt://localhost:1883',
    username: process.env.MQTT_USERNAME ?? '',
    password: process.env.MQTT_PASSWORD ?? '',
  }
}
