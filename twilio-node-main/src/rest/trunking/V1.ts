/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Trunking
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import TrunkingBase from "../TrunkingBase";
import Version from "../../base/Version";
import { TrunkListInstance } from "./v1/trunk";

export default class V1 extends Version {
  /**
   * Initialize the V1 version of Trunking
   *
   * @param domain - The Twilio (Twilio.Trunking) domain
   */
  constructor(domain: TrunkingBase) {
    super(domain, "v1");
  }

  /** trunks - { Twilio.Trunking.V1.TrunkListInstance } resource */
  protected _trunks?: TrunkListInstance;

  /** Getter for trunks resource */
  get trunks(): TrunkListInstance {
    this._trunks = this._trunks || TrunkListInstance(this);
    return this._trunks;
  }
}
