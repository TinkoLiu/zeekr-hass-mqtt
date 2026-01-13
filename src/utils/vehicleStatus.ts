// Position interface
export interface Position {
  altitude: string;
  posCanBeTrusted: string;
  latitude: string;
  carLocatorStatUploadEn: string;
  marsCoordinates: string;
  longitude: string;
}

// Basic Vehicle Status interface
export interface BasicVehicleStatus {
  usageMode: string;
  engineStatus: string;
  position: Position;
  carMode: string;
  speed: string;
  speedValidity: string;
  direction: string;
}

// Notification interface
export interface Notification {
  notifForEmgyCallStatus: string;
}

// EG (Emergency) interface
export interface EG {
  enableRunning: string;
  blocked: {
    status: string;
  };
  panicStatus: string;
}

// Park Time interface
export interface ParkTime {
  status: string;
}

// Theft Notification interface
export interface TheftNotification {
  time: string;
  activated: string;
}

// Configuration interface
export interface Configuration {
  propulsionType: string;
  fuelType: string;
  vin: string;
}

// Main Battery Status interface
export interface MainBatteryStatus {
  stateOfCharge: string;
  chargeLevel: string;
  energyLevel: string;
  stateOfHealth: string;
  powerLevel: string;
  voltage: string;
}

// Maintenance Status interface
export interface MaintenanceStatus {
  tyreTempWarningPassengerRear: string;
  daysToService: string;
  engineHrsToService: string;
  odometer: string;
  brakeFluidLevelStatus: string;
  tyreTempDriverRear: string;
  tyreTempWarningPassenger: string;
  tyreTempWarningDriverRear: string;
  mainBatteryStatus: MainBatteryStatus;
  tyreTempDriver: string;
  tyreTempPassengerRear: string;
  tyrePreWarningDriver: string;
  distanceToService: string;
  tyrePreWarningPassengerRear: string;
  tyreTempWarningDriver: string;
  tyreStatusPassengerRear: string;
  tyreStatusPassenger: string;
  tyreStatusDriverRear: string;
  serviceWarningStatus: string;
  tyreStatusDriver: string;
  tyreTempPassenger: string;
  tyrePreWarningDriverRear: string;
  tyrePreWarningPassenger: string;
  washerFluidLevelStatus: string;
}

// Electric Vehicle Status interface
export interface ElectricVehicleStatus {
  disChargeUAct: string;
  disChargeSts: string;
  wptFineAlignt: string;
  chargeLidAcStatus: string;
  distanceToEmptyOnBatteryOnly: string;
  distanceToEmptyOnBattery100Soc: string;
  chargeSts: string;
  averPowerConsumption: string;
  chargerState: string;
  timeToTargetDisCharged: string;
  distanceToEmptyOnBattery20Soc: string;
  disChargeConnectStatus: string;
  chargeLidDcAcStatus: string;
  dcChargeSts: string;
  ptReady: string;
  chargeLevel: string;
  statusOfChargerConnection: string;
  dcDcActvd: string;
  indPowerConsumption: string;
  dcDcConnectStatus: string;
  disChargeIAct: string;
  dcChargeIAct: string;
  chargeUAct: string;
  bookChargeSts: string;
  dcChargePileIAct: string;
  chargeIAct: string;
  timeToFullyCharged: string;
  dcChargePileUAct: string;
}

// Driving Behaviour Status interface
export interface DrivingBehaviourStatus {
  gearAutoStatus: string;
  gearManualStatus: string;
  engineSpeed: string;
}

// Running Status interface
export interface RunningStatus {
  ahbc: string;
  goodbye: string;
  homeSafe: string;
  cornrgLi: string;
  frntFog: string;
  stopLi: string;
  tripMeter1: string;
  approach: string;
  tripMeter2: string;
  indFuelConsumption: string;
  hiBeam: string;
  engineCoolantLevelStatus: string;
  fuelEnLevel: string;
  loBeam: string;
  ltgShow: string;
  welcome: string;
  drl: string;
  fuelLevelPct: string;
  ahl: string;
  fuelEnCns: string;
  trunIndrLe: string;
  trunIndrRi: string;
  afs: string;
  dbl: string;
  avgSpeed: string;
  reverseLi: string;
  hwl: string;
  reFog: string;
  flash: string;
  fuelEnCnsFild: string;
}

// Trailer Status interface
export interface TrailerStatus {
  trailerTurningLampSts: string;
  trailerFogLampSts: string;
  trailerBreakLampSts: string;
  trailerReversingLampSts: string;
  trailerPosLampSts: string;
}

// Climate Status interface
export interface ClimateStatus {
  drvHeatSts: string;
  temperatureUpdateTime: string;
  winPosDriver: string;
  rrVentDetail: string;
  cabinTempReductionStatus: string;
  rlVentSts: string;
  passVentSts: string;
  interiorTemp: string;
  passVentDetail: string;
  sunroofPos: string;
  cdsClimateActive: string;
  sunroofOpenStatus: string;
  rrHeatingDetail: string;
  winStatusPassenger: string;
  fragActive: boolean;
  winStatusDriver: string;
  drvVentSts: string;
  winStatusPassengerRear: string;
  sunCurtainRearOpenStatus: string;
  preClimateActive: boolean;
  winCloseReminder: string;
  rlHeatingDetail: string;
  winPosPassengerRear: string;
  curtainPos: string;
  rlVentDetail: string;
  curtainOpenStatus: string;
  climateOverHeatProActive: string;
  rrVentSts: string;
  rrHeatingSts: string;
  winPosPassenger: string;
  steerWhlHeatingSts: string;
  drvVentDetail: string;
  winPosDriverRear: string;
  exteriorTemp: string;
  rlHeatingSts: string;
  winStatusDriverRear: string;
  defrost: string;
  drvHeatDetail: string;
  passHeatingDetail: string;
  airBlowerActive: string;
  sunCurtainRearPos: string;
  passHeatingSts: string;
}

// Vehicle Alarm interface
export interface VehicleAlarm {
  alrmSt: string;
  alrmTrgSrc: string;
}

// Driving Safety Status interface
export interface DrivingSafetyStatus {
  doorLockStatusDriverRear: string;
  srsCrashStatus: string;
  doorOpenStatusPassengerRear: string;
  doorPosPassengerRear: string;
  doorOpenStatusDriver: string;
  seatBeltStatusPassenger: string;
  doorPosDriver: string;
  seatBeltStatusThPassengerRear: string;
  electricParkBrakeStatus: string;
  doorLockStatusDriver: string;
  seatBeltStatusThDriverRear: string;
  tankFlapStatus: string;
  seatBeltStatusPassengerRear: string;
  doorOpenStatusPassenger: string;
  doorPosPassenger: string;
  vehicleAlarm: VehicleAlarm;
  doorPosDriverRear: string;
  centralLockingStatus: string;
  seatBeltStatusDriver: string;
  doorLockStatusPassenger: string;
  seatBeltStatusMidRear: string;
  trunkLockStatus: string;
  seatBeltStatusDriverRear: string;
  engineHoodOpenStatus: string;
  doorOpenStatusDriverRear: string;
  doorLockStatusPassengerRear: string;
  trunkOpenStatus: string;
}

// Pollution Status interface
export interface PollutionStatus {
  interiorPM25: string;
  interiorSecondPM25Level: string;
  interiorPM25Level: string;
  relHumSts: string;
  exteriorPM25Level: string;
}

// Additional Vehicle Status interface
export interface AdditionalVehicleStatus {
  maintenanceStatus: MaintenanceStatus;
  electricVehicleStatus: ElectricVehicleStatus;
  chargeHvSts: string;
  drivingBehaviourStatus: DrivingBehaviourStatus;
  runningStatus: RunningStatus;
  trailerStatus: TrailerStatus;
  climateStatus: ClimateStatus;
  drivingSafetyStatus: DrivingSafetyStatus;
  pollutionStatus: PollutionStatus;
}

// Sim Info interface
export interface SimInfo {
  iccId: string | null;
  imsi: string | null;
  msisdn: string | null;
}

// Network Access Status interface
export interface NetworkAccessStatus {
  mobileNetwork: string | null;
  simInfo: SimInfo;
}

// Backup Battery interface
export interface BackupBattery {
  stateOfCharge: string | null;
  stateOfHealth: string | null;
  voltage: string | null;
}

// TEM Status interface (Telematics/Device Status)
export interface TEMStatus {
  swVersion: string | null;
  serialNumber: string | null;
  powerSource: string | null;
  networkAccessStatus: NetworkAccessStatus;
  mcuVersion: string | null;
  mpuVersion: string | null;
  backupBattery: BackupBattery;
  hwVersion: string | null;
  powerMode: string | null;
  healthStatus: string | null;
  sleepCycleNextWakeupTime: string | null;
  imei: string | null;
  state: string | null;
  connectivityStatus: string | null;
}

// Main Vehicle Status interface
export interface VehicleStatus {
  basicVehicleStatus: BasicVehicleStatus;
  notification: Notification;
  eg: EG;
  parkTime: ParkTime;
  theftNotification: TheftNotification;
  configuration: Configuration;
  updateTime: string;
  additionalVehicleStatus: AdditionalVehicleStatus;
  temStatus: TEMStatus;
}

export interface VehicleStatusResponse {
  code: string;
  data: {
    vehicleStatus: VehicleStatus;
    result: {
      serviceResult: {
        error: string | null;
        operationResult: number;
      }
      sessionId: string;
    }
  }
  success: boolean;
  hint: string | null;
  httpStatus: string | null;
  sessionId: string | null;
  message: string | null;
}
