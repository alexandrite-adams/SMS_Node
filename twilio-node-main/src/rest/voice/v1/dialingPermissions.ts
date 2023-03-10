/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Voice
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";
import { BulkCountryUpdateListInstance } from "./dialingPermissions/bulkCountryUpdate";
import { CountryListInstance } from "./dialingPermissions/country";
import { SettingsListInstance } from "./dialingPermissions/settings";

export interface DialingPermissionsSolution {}

export interface DialingPermissionsListInstance {
  _version: V1;
  _solution: DialingPermissionsSolution;
  _uri: string;

  _bulkCountryUpdates?: BulkCountryUpdateListInstance;
  bulkCountryUpdates: BulkCountryUpdateListInstance;
  _countries?: CountryListInstance;
  countries: CountryListInstance;
  _settings?: SettingsListInstance;
  settings: SettingsListInstance;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function DialingPermissionsListInstance(
  version: V1
): DialingPermissionsListInstance {
  const instance = {} as DialingPermissionsListInstance;

  instance._version = version;
  instance._solution = {};
  instance._uri = `/DialingPermissions`;

  Object.defineProperty(instance, "bulkCountryUpdates", {
    get: function bulkCountryUpdates() {
      if (!instance._bulkCountryUpdates) {
        instance._bulkCountryUpdates = BulkCountryUpdateListInstance(
          instance._version
        );
      }
      return instance._bulkCountryUpdates;
    },
  });

  Object.defineProperty(instance, "countries", {
    get: function countries() {
      if (!instance._countries) {
        instance._countries = CountryListInstance(instance._version);
      }
      return instance._countries;
    },
  });

  Object.defineProperty(instance, "settings", {
    get: function settings() {
      if (!instance._settings) {
        instance._settings = SettingsListInstance(instance._version);
      }
      return instance._settings;
    },
  });

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
  };

  return instance;
}
