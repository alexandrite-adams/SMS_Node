/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Studio
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import StudioBase from "../StudioBase";
import Version from "../../base/Version";
import { FlowListInstance } from "./v1/flow";

export default class V1 extends Version {
  /**
   * Initialize the V1 version of Studio
   *
   * @param domain - The Twilio (Twilio.Studio) domain
   */
  constructor(domain: StudioBase) {
    super(domain, "v1");
  }

  /** flows - { Twilio.Studio.V1.FlowListInstance } resource */
  protected _flows?: FlowListInstance;

  /** Getter for flows resource */
  get flows(): FlowListInstance {
    this._flows = this._flows || FlowListInstance(this);
    return this._flows;
  }
}
