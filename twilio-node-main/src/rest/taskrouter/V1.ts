/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Taskrouter
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import TaskrouterBase from "../TaskrouterBase";
import Version from "../../base/Version";
import { WorkspaceListInstance } from "./v1/workspace";

export default class V1 extends Version {
  /**
   * Initialize the V1 version of Taskrouter
   *
   * @param domain - The Twilio (Twilio.Taskrouter) domain
   */
  constructor(domain: TaskrouterBase) {
    super(domain, "v1");
  }

  /** workspaces - { Twilio.Taskrouter.V1.WorkspaceListInstance } resource */
  protected _workspaces?: WorkspaceListInstance;

  /** Getter for workspaces resource */
  get workspaces(): WorkspaceListInstance {
    this._workspaces = this._workspaces || WorkspaceListInstance(this);
    return this._workspaces;
  }
}
