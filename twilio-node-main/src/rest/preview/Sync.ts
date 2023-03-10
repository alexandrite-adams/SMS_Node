/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Preview
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import PreviewBase from "../PreviewBase";
import Version from "../../base/Version";
import { ServiceListInstance } from "./sync/service";

export default class Sync extends Version {
  /**
   * Initialize the Sync version of Preview
   *
   * @param domain - The Twilio (Twilio.Preview) domain
   */
  constructor(domain: PreviewBase) {
    super(domain, "Sync");
  }

  /** services - { Twilio.Preview.Sync.ServiceListInstance } resource */
  protected _services?: ServiceListInstance;

  /** Getter for services resource */
  get services(): ServiceListInstance {
    this._services = this._services || ServiceListInstance(this);
    return this._services;
  }
}
