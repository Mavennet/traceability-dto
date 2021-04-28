export enum JSON_TYPE {
  VERIFIABLE_CREDENTIAL = 'VerifiableCredential',
  CRUDE_OIL_PRODUCT = 'CrudeOilProduct',
  NATURAL_GAS_PRODUCT = 'NaturalGasProduct',
  PLACE = 'Place',
  GEO_COORDINATES = 'GeoCoordinates',
  POSTAL_ADDRESS = 'PostalAddress',
  PARCEL_DELIVERY = 'ParcelDelivery',
  PRODUCT = 'Product',
  ORGANIZATION = 'Organization',
  OBSERVATION = 'Observation',
  MEASURED_VALUE = 'MeasuredValue',
  QUANTITATIVE_VALUE = 'QuantitativeValue',
  MECHANICAL_PROPERTY = 'MechanicalProperty',
  CHEMICAL_PROPERTY = 'ChemicalProperty',
  GAS_PROPERTY = 'GasProperty',
  INBOND = 'Inbond',
  BILL_OF_LADING = 'BillOfLading',
  OG_BILL_OF_LADING = 'OGBillOfLading',
  ED25519_SIGNATURE_2018 = 'Ed25519Signature2018',

  QP_IN_BOND_EVENT_CREDENTIAL = 'QPInBondEventCredential'
}

export enum MECHANICAL_PROPERTY_TYPE {
  API_GRAVITY = 'apiGravity',
  VISCOSITY_AT_10C = 'viscosityAt10C',
  VISCOSITY_AT_20C = 'viscosityAt20C',
  VISCOSITY_AT_30C = 'viscosityAt30C',
  VISCOSITY_AT_40C = 'viscosityAt40C',
  VISCOSITY_AT_45C = 'viscosityAt45C',
  POUR_POINT = 'pourPoint',
  FLASH_POINT = 'flashPoint',
  VAPOUR_PRESSURE = 'vapourPressure',
  DENSITY = 'density',
  NAPHTHA = 'naphtha',
  DISTILLATE_AT_350_TO_650F = 'distillateAt350To650F',
  GAS_OIL_AT_650_TO_980F = 'gasOilAt650To980F',
  RESID_AT_980F = 'residAt980F',
  DEEMED_BUTANE = 'deemedButane',
  TAN = 'tan',
  RON = 'ron',
  MON = 'mon',
  BOILING_POINT = 'boilingPoint',
  FREEZING_POINT = 'freezingPoint',
  CRITICAL_TEMPERATURE = 'criticalTemperature',
  CRITICAL_PRESSURE = 'criticalPressure',
  AUTO_IGNITION_TEMPERATURE_IN_AIR_AT_1_ATM = 'autoIgnitionTemperatureInAirAt1atm',
  SOLUBILITY_IN_TRICHLOROETHYLENE = 'solubilityInTrichloroethylene',
  PENETRATION_AT_25C_100G_5SEC = 'penetrationAt25C100g5sec',
  SOFTENING_POINT = 'softeningPoint',
  DUCTILITY_AT_25C = 'ductilityAt25C',
  OLEFIN = 'olefin',
  COLOR = 'color',
  ODOR = 'odor',
  GROSS_CALORIFIC_VALUE_AT_15C = 'grossCalorificValueAt15C',
  NET_CALORIFIC_VALUE_AT_15C = 'netCalorificValueAt15C',
  AIR_REQUIRED_FOR_COMBUSTION = 'airRequiredForCombustion',
  COPPER_CORROSION_AT_38C_FOR_1HOUR = 'copperCorrosionAt38CFor1Hour',

  ROCKWELL_HARDNESS_TEST_SCALE_A = 'Rockwell Hardness Test (Scale A)',
  BERYLLIUM = 'Beryllium',
  CHARPY_IMPACT_STRENGTH_TEST = 'Charpy Impact Strength Test',
  IZOD_IMPACT_STRENGTH_TEST = 'Izod Impact Strength Test'
}

export enum CHEMICAL_PROPERTY_TYPE {
  MICRO_CARBON_RESIDUE = 'microCarbonResidue',
  AROMATICS_TOTAL_BTEX = 'aromaticsTotalBTEX',
  SEDIMENT_AND_WATER = 'sedimentAndWater',
  LIQUID_PHASE_H2S = 'liquidPhaseH2S',
  MERCURY = 'mercury',
  OXYGENATES = 'oxygenates',
  FILTERABLE_SOLIDS = 'filterableSolids',
  PHOSPHOROUS_VOLATILE = 'phosphorousVolatile',
  MEDIUM_CHAIN_TRIGLYCERIDES = 'mediumChainTriglycerides',
  BENZENE = 'benzene',
  PARTICULATES = 'particulates',
  ORGANIC_CHLORIDES = 'organicChlorides',
  NICKEL = 'nickel',
  VANADIUM = 'vanadium',
  WATER = 'water',
  MOLECULAR_WEIGHT = 'molecularWeight',
  SULPHUR = 'sulphur',
  NAPHTHENES = 'naphthenes',
  CHLORIDE = 'chloride',
  ARSENIC = 'arsenic',
  LEAD = 'lead',
  ETHENE = 'ethene',
  PROPANE = 'propane',
  ISO_BUTANE = 'isoButane',
  N_BUTANE = 'nButane',
  HYDROCARBONS_HEAVIER = 'hydrocarbonsHeavier',
  UNSATURATED_HYDROCARBONS = 'unsaturatedHydrocarbons',

  CESIUM = 'Cesium',
}

export enum GAS_PROPERTY_TYPE {
  WATER_CONTENT = 'waterContent',
  HYDROGEN_SULFIDE_CONTENT = 'hydrogenSulfideContent',
  GROSS_HEATING_VALUE = 'grossHeatingValue',
  HYDROCARBON_DEW_POINT = 'hydrocarbonDewPoint',
  MERCAPTAN_CONTENT = 'mercaptanContent',
  TOTAL_SULFUR_CONTENT = 'totalSulfurContent',
  CARBON_DIOXIDE_CONTENT = 'carbonDioxideContent',
  OXYGEN_CONTENT = 'oxygenContent',
  NITROGEN_CONTENT = 'nitrogenContent',
  TOTAL_INERTS_CONTENT = 'totalInertsContent',
  SAND_DUST_GUMS_AND_FREE_LIQUID = 'sandDustGumsAndFreeLiquid',
  TEMPERATURE = 'temperature',
  PRESSURE = 'pressure'
}

export enum TRANSPORTATION_TYPE {
  PIPELINE = 'Pipeline',
  TRUCK = 'Truck',
  RAIL = 'Rail',
}

export enum PROOF_PURPOSE_TYPE {
  ASSERTION_METHOD = 'assertionMethod',
  AUTHENTICATION = 'authentication'
}
