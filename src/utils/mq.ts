import mqtt from 'mqtt'
import { appConfig } from './config.js'

class MqClient {
  private client: mqtt.MqttClient

  constructor () {
    this.client = mqtt.connect(appConfig.mqtt.broker, {
      username: appConfig.mqtt.username,
      password: appConfig.mqtt.password,
      reconnectPeriod: 5000,
      connectTimeout: 10000,
      clientId: `zeekr-hass-mqtt-${appConfig.vin}`,
      manualConnect: true,
    })
  }

  async connect () {
    this.client.connect()
    return new Promise<void>((resolve, reject) => {
      this.client.on('connect', () => {
        resolve()
      })
      this.client.on('error', (error) => {
        reject(error)
      })
    })
  }

  publish (topic: string, message: string) {
    this.client.publish(topic, message, { qos: 1 }, (error) => {
      if (error) {
        console.error(`Failed to publish message to topic ${topic}:`, error)
      }
    })
  }

  subscribe (topic: string) {
    this.client.subscribe(topic, { qos: 1 }, (error, granted) => {
      if (error) {
        console.error(`Failed to subscribe to topic ${topic}:`, error)
      }
    })
  }

  onMessage (callback: (topic: string, message: string) => void) {
    this.client.on('message', (topic, message) => {
      callback(topic, message.toString())
    })
  }
}

export const mqClient = new MqClient()
