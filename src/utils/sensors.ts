export const deviceTrackerConfig = (vin:string) => {
  return JSON.stringify({
    name: '车辆位置',
    unique_id: `zeekr_${vin}_tracker`,
    state_topic: `homeassistant/device_tracker/zeekr_${vin}/state`,
    json_attributes_topic: `homeassistant/device_tracker/zeekr_${vin}/state`,
    payload_home: 'home',
    payload_not_home: 'not_home',
    source_type: 'gps',
    icon: 'mdi:car',
    device: {
      identifiers: [`zeekr_${vin}`],
      name: '极氪',
      manufacturer: 'Zeekr'
    }
  })
}

export const sensorConfigs = (vin:string) => {
  return {
    temperature: {
      name: '车内温度',
      state_topic: `homeassistant/sensor/zeekr_${vin}/state`,
      value_template: '{{ value_json.temperature }}',
      unit_of_measurement: '°C',
      unique_id: `zeekr_${vin}_temperature`,
      device: {
        identifiers: [`zeekr_${vin}`],
        name: '极氪',
        manufacturer: 'Zeekr'
      }
    },
    exterior_temperature: {
      name: '车外温度',
      state_topic: `homeassistant/sensor/zeekr_${vin}/state`,
      value_template: '{{ value_json.exterior_temperature }}',
      unit_of_measurement: '°C',
      unique_id: `zeekr_${vin}_exterior_temperature`,
      device: {
        identifiers: [`zeekr_${vin}`]
      }
    },
    battery: {
      name: '电池电量',
      state_topic: `homeassistant/sensor/zeekr_${vin}/state`,
      value_template: '{{ value_json.battery }}',
      unit_of_measurement: '%',
      unique_id: `zeekr_${vin}_battery`,
      device: {
        identifiers: [`zeekr_${vin}`]
      }
    },
    pm25: {
      name: '车内PM2.5',
      state_topic: `homeassistant/sensor/zeekr_${vin}/state`,
      value_template: '{{ value_json.pm25 }}',
      unit_of_measurement: 'μg/m³',
      unique_id: `zeekr_${vin}_pm25`,
      device: {
        identifiers: [`zeekr_${vin}`]
      }
    },
    mileage: {
      name: '总里程',
      state_topic: `homeassistant/sensor/zeekr_${vin}/state`,
      value_template: '{{ value_json.mileage }}',
      unit_of_measurement: 'km',
      unique_id: `zeekr_${vin}_mileage`,
      device: {
        identifiers: [`zeekr_${vin}`]
      }
    },
    range: {
      name: '续航里程',
      state_topic: `homeassistant/sensor/zeekr_${vin}/state`,
      value_template: '{{ value_json.range }}',
      unit_of_measurement: 'km',
      unique_id: `zeekr_${vin}_range`,
      device: {
        identifiers: [`zeekr_${vin}`]
      }
    },
    charging_time: {
      name: '充满时间',
      state_topic: `homeassistant/sensor/zeekr_${vin}/state`,
      value_template: '{{ value_json.charging_time }}',
      unit_of_measurement: 'h',
      unique_id: `zeekr_${vin}_charging_time`,
      device: {
        identifiers: [`zeekr_${vin}`]
      }
    },
    altitude: {
      name: 'GPS 海拔高度',
      state_topic: `homeassistant/sensor/zeekr_${vin}/state`,
      value_template: '{{ value_json.altitude }}',
      unit_of_measurement: 'm',
      unique_id: `zeekr_${vin}_altitude`,
      device: {
        identifiers: [`zeekr_${vin}`]
      }
    },
    location: {
      name: '车辆位置',
      state_topic: `homeassistant/sensor/zeekr_${vin}/state`,
      value_template: '{{ value_json.latitude }},{{ value_json.longitude }}',
      unique_id: `zeekr_${vin}_location`,
      device: {
        identifiers: [`zeekr_${vin}`]
      }
    },
    usage_mode: {
      name: '使用模式',
      state_topic: `homeassistant/sensor/zeekr_${vin}/state`,
      value_template: '{{ value_json.usage_mode }}',
      unique_id: `zeekr_${vin}_usage_mode`,
      device: {
        identifiers: [`zeekr_${vin}`]
      }
    },
    current_speed: {
      name: '当前车速',
      state_topic: `homeassistant/sensor/zeekr_${vin}/state`,
      value_template: '{{ value_json.current_speed }}',
      unit_of_measurement: 'km/h',
      unique_id: `zeekr_${vin}_current_speed`,
      device: {
        identifiers: [`zeekr_${vin}`]
      }
    },
    e_brake_status: {
      name: '电子手刹状态',
      state_topic: `homeassistant/sensor/zeekr_${vin}/state`,
      value_template: '{{ value_json.e_brake_status }}',
      unique_id: `zeekr_${vin}_e_brake_status`,
      device: {
        identifiers: [`zeekr_${vin}`]
      }
    },
    gear_status: {
      name: '挡位状态',
      state_topic: `homeassistant/sensor/zeekr_${vin}/state`,
      value_template: '{{ value_json.gear_status }}',
      unique_id: `zeekr_${vin}_gear_status`,
      device: {
        identifiers: [`zeekr_${vin}`]
      }
    },
    avg_power_consumption: {
      name: '近期平均能耗',
      state_topic: `homeassistant/sensor/zeekr_${vin}/state`,
      value_template: '{{ value_json.avg_power_consumption }}',
      unit_of_measurement: 'kWh/100km',
      unique_id: `zeekr_${vin}_avg_power_consumption`,
      device: {
        identifiers: [`zeekr_${vin}`]
      }
    },
    engine_status: {
      name: '电机状态',
      state_topic: `homeassistant/sensor/zeekr_${vin}/state`,
      value_template: '{{ value_json.engine_status }}',
      unique_id: `zeekr_${vin}_engine_status`,
      device: {
        identifiers: [`zeekr_${vin}`]
      }
    },
    trunk_lock_status: {
      name: '后备箱锁状态',
      state_topic: `homeassistant/sensor/zeekr_${vin}/state`,
      value_template: '{{ value_json.trunk_lock_status }}',
      unique_id: `zeekr_${vin}_trunk_lock_status`,
      device: {
        identifiers: [`zeekr_${vin}`]
      }
    }
  }
}
