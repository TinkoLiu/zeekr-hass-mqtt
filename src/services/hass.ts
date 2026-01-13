import { appConfig } from '../utils/config.js'
import { mqClient } from '../utils/mq.js'
import { deviceTrackerConfig, sensorConfigs } from '../utils/sensors.js'
import { VehicleStatus } from '../utils/vehicleStatus.js'

class HassService {
  private vehicleStatus?: VehicleStatus

  private get vin () {
    return appConfig.vin
  }

  private get identifier () {
    return `zeekr_${this.vin}`
  }

  private sendLocationUpdate () {
    const locationData = {
      latitude: Number((parseInt(this.vehicleStatus?.basicVehicleStatus.position.latitude ?? '0') / (60 * 60 * 1000)).toFixed(7)),
      longitude: Number((parseInt(this.vehicleStatus?.basicVehicleStatus.position.longitude ?? '0') / (60 * 60 * 1000)).toFixed(7)),
      gps_accuracy: 5,
      altitude: this.vehicleStatus?.basicVehicleStatus.position.altitude,
      speed: this.vehicleStatus?.basicVehicleStatus.speed,
      course: this.vehicleStatus?.basicVehicleStatus.direction,
      battery: parseInt(this.vehicleStatus?.additionalVehicleStatus.maintenanceStatus.mainBatteryStatus.chargeLevel ?? '0')
    }
    const locationTopic = `homeassistant/device_tracker/${this.identifier}/state`
    mqClient.publish(locationTopic, JSON.stringify(locationData))
  }

  private sendSensorUpdate () {
    const sensorData = {
      temperature: this.vehicleStatus?.additionalVehicleStatus?.climateStatus.interiorTemp,
      exterior_temperature: this.vehicleStatus?.additionalVehicleStatus?.climateStatus.exteriorTemp,
      battery: this.vehicleStatus?.additionalVehicleStatus?.maintenanceStatus.mainBatteryStatus.chargeLevel,
      pm25: this.vehicleStatus?.additionalVehicleStatus?.pollutionStatus.interiorPM25Level,
      mileage: parseInt(this.vehicleStatus?.additionalVehicleStatus?.maintenanceStatus.odometer ?? '0'),
      range: this.vehicleStatus?.additionalVehicleStatus?.electricVehicleStatus.distanceToEmptyOnBatteryOnly,
      latitude: (parseInt(this.vehicleStatus?.basicVehicleStatus.position.latitude ?? '0') / (60 * 60 * 1000)).toFixed(6),
      longitude: (parseInt(this.vehicleStatus?.basicVehicleStatus.position.longitude ?? '0') / (60 * 60 * 1000)).toFixed(6),
      altitude: this.vehicleStatus?.basicVehicleStatus.position.altitude,
      charging_time: this.vehicleStatus?.additionalVehicleStatus?.electricVehicleStatus.timeToFullyCharged === '2047' ? 0 : ((parseFloat(this.vehicleStatus?.additionalVehicleStatus?.electricVehicleStatus.timeToFullyCharged ?? '0') / 60).toFixed(1)),

      usage_mode: this.vehicleStatus?.basicVehicleStatus?.usageMode,
      current_speed: this.vehicleStatus?.basicVehicleStatus?.speed,
      e_brake_status: this.vehicleStatus?.additionalVehicleStatus?.drivingSafetyStatus?.electricParkBrakeStatus,
      gear_status: this.vehicleStatus?.additionalVehicleStatus?.drivingBehaviourStatus?.gearAutoStatus,
      avg_power_consumption: this.vehicleStatus?.additionalVehicleStatus?.electricVehicleStatus?.averPowerConsumption,

      engine_status: this.vehicleStatus?.basicVehicleStatus?.engineStatus,
      trunk_lock_status: this.vehicleStatus?.additionalVehicleStatus?.drivingSafetyStatus?.trunkLockStatus
    }

    const stateTopic = `homeassistant/sensor/${this.identifier}/state`
    mqClient.publish(stateTopic, JSON.stringify(sensorData))
  }

  updateDeviceTrackerConfig () {
    const trackerConfigTopic = `homeassistant/device_tracker/${this.identifier}/config`
    mqClient.publish(trackerConfigTopic, deviceTrackerConfig(this.vin))
  }

  updateSensorConfig () {
    for (const [sensorName, config] of Object.entries(sensorConfigs(this.vin))) {
      const configTopic = `homeassistant/sensor/${this.identifier}/${sensorName}/config`
      mqClient.publish(configTopic, JSON.stringify(config))
    }
  }

  updateVehicleStatus (status: VehicleStatus) {
    this.vehicleStatus = status
    this.updateDeviceTrackerConfig()
    this.updateSensorConfig()
    this.sendLocationUpdate()
    this.sendSensorUpdate()
  }
}

export const hassService = new HassService()
