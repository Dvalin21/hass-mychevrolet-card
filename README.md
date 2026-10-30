# myChevrolet Status Card

A Home Assistant Lovelace card tailored to the
[myChevrolet integration](https://github.com/Dvalin21/hass-mychevrolet). It
displays battery, charge state, plug state, range, odometer, tire pressure, GPS
location, door lock and remote-command buttons -- and **only shows the entities
that actually exist for your vehicle**. A gasoline car won't get battery/range/
plug rows; a vehicle without remote-start entitlement won't get that button.

Built on top of
[vehicle-status-card](https://github.com/ngocjohn/vehicle-status-card) (MIT).

## Installation

### HACS (recommended)

1. Add this repository as a custom repository in HACS (category: **Frontend**).
2. Install **myChevrolet Status Card**.
3. Force-refresh the browser (`Ctrl+F5`).

### Manual

1. Download `mychevrolet-status-card.js` from the
   [latest release](https://github.com/Dvalin21/hass-mychevrolet-card/releases/latest).
2. Place it in `config/www/`.
3. Add a resource in **Settings -> Dashboards -> Resources**:
   - URL: `/local/mychevrolet-status-card.js`
   - Type: `module`
4. Force-refresh the browser.

## Configuration

Add the card to a dashboard. The card auto-detects your myChevrolet entities
(indicators, range bar, mini-map, button grid) from Home Assistant's state
machine and only renders sections whose backing entities exist. You can refine
the layout with the built-in UI editor.

```yaml
type: custom:mychevrolet-status-card
name: My Bolt
```

## Conditional rendering

The card filters every auto-generated section against the myChevrolet entity key
set (`battery_level`, `charge_state`, `plug_state`, `plug_voltage`,
`charger_power_level`, `ev_range`, `odometer`, `last_trip_efficiency`,
`tire_pressure_*`, `plugged_in`, `door_lock`, `honk_flash`, `remote_start`,
`remote_stop`, `update_data`, `location`). An entity that is not present for your
vehicle is silently skipped -- no empty rows, no "unknown" placeholders.

## Credits

- [vehicle-status-card](https://github.com/ngocjohn/vehicle-status-card) by
  ngocjohn -- the base card this fork is built on.
- [hass-mychevrolet](https://github.com/Dvalin21/hass-mychevrolet) -- the
  integration that provides the entities.

## License

MIT (inherited from vehicle-status-card). See `LICENSE`.
