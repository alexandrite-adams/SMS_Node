/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Serverless
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import ServerlessBase from "../ServerlessBase";
import Version from "../../base/Version";
import { ServiceListInstance } from "./v1/service";

export default class V1 extends Version {
  /**
   * Initialize the V1 version of Serverless
   *
   * @param domain - The Twilio (Twilio.Serverless) domain
   */
  constructor(domain: ServerlessBase) {
    super(domain, "v1");
  }

  /** services - { Twilio.Serverless.V1.ServiceListInstance } resource */
  protected _services?: ServiceListInstance;

  /** Getter for services resource */
  get services(): ServiceListInstance {
    this._services = this._services || ServiceListInstance(this);
    return this._services;
  }
}
