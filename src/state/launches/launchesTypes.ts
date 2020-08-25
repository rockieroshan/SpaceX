export interface Launches {
  flight_number: number;
  mission_name: string;
  mission_id: string[];
  upcoming: boolean;
  launch_year: string;
  launch_date_unix: number;
  launch_date_utc: string;
  launch_date_local: string;
  is_tentative: boolean;
  tentative_max_precision: string;
  tbd: boolean;
  launch_window: number;
  rocket: Rocket;
  ships: string[];
  telemetry: Telemetry;
  launch_site: Launchsite;
  launch_success: boolean;
  launch_failure_details: Launchfailuredetails;
  links: Links;
  details: string;
  static_fire_date_utc: string;
  static_fire_date_unix: number;
  timeline: Timeline;
  crew?: null;
}

export interface Timeline {
  webcast_liftoff: number;
}

export interface Links {
  mission_patch: string;
  mission_patch_small: string;
  reddit_campaign?: null;
  reddit_launch: string;
  reddit_recovery?: null;
  reddit_media?: null;
  presskit?: null;
  article_link: string;
  wikipedia: string;
  video_link: string;
  youtube_id: string;
  flickr_images: string[];
}

export interface Launchfailuredetails {
  time: number;
  altitude: number;
  reason: string;
}

export interface Launchsite {
  site_id: string;
  site_name: string;
  site_name_long: string;
}

export interface Telemetry {
  flight_club: string;
}

export interface Rocket {
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
  first_stage: Firststage;
  second_stage: Secondstage;
  fairings: Fairings;
}

export interface Fairings {
  reused: boolean;
  recovery_attempt: boolean;
  recovered: boolean;
  ship?: null;
}

export interface Secondstage {
  block: number;
  payloads: Payload[];
}

export interface Payload {
  payload_id: string;
  norad_id: number[];
  reused: boolean;
  customers: string[];
  nationality: string;
  manufacturer: string;
  payload_type: string;
  payload_mass_kg: number;
  payload_mass_lbs: number;
  orbit: string;
  orbit_params: Orbitparams;
}

export interface Orbitparams {
  reference_system: string;
  regime: string;
  longitude?: null;
  semi_major_axis_km: number;
  eccentricity: number;
  periapsis_km: number;
  apoapsis_km: number;
  inclination_deg: number;
  period_min: number;
  lifespan_years: 15;
  epoch: string;
  mean_motion: number;
  raan: number;
  arg_of_pericenter: number;
  mean_anomaly: number;
}

export interface Firststage {
  cores: Core[];
}

export interface Core {
  core_serial: string;
  flight: number;
  block: 3;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  land_success: boolean;
  landing_intent: boolean;
  landing_type: string;
  landing_vehicle: string;
}

export interface LaunchesState {
  readonly loading: boolean;
  readonly data: Launches[];
  readonly errors?: string;
}
