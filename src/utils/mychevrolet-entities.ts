// myChevrolet-specific entity keys.
//
// The myChevrolet integration (https://github.com/Dvalin21/hass-mychevrolet) exposes a
// fixed, well-known set of entities per vehicle. A card tailored to that integration
// should only ever surface entities whose id ends in one of these keys — any other
// sensor in Home Assistant is unrelated and must not appear as a myChevrolet
// indicator. If a key is absent for a given vehicle (e.g. an EV-only sensor on a
// gasoline car, or a command button the vehicle is not entitled to), it simply does
// not render.

export const MYCHEVROLET_ENTITY_KEYS: readonly string[] = [
  // sensors
  'battery_level',
  'charge_state',
  'plug_state',
  'plug_voltage',
  'charger_power_level',
  'ev_range',
  'odometer',
  'last_trip_efficiency',
  'tire_pressure_left_front',
  'tire_pressure_right_front',
  'tire_pressure_left_rear',
  'tire_pressure_right_rear',
  // binary sensors
  'plugged_in',
  // lock
  'door_lock',
  // buttons
  'honk_flash',
  'remote_start',
  'remote_stop',
  'update_data',
  // device tracker
  'location',
];

export const isMyChevroletEntity = (entityId: string): boolean => {
  const id = entityId.toLowerCase();
  return MYCHEVROLET_ENTITY_KEYS.some((key) => id.endsWith(`_${key}`));
};
