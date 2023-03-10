/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Chat
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import ChatBase from "../ChatBase";
import Version from "../../base/Version";
import { ChannelListInstance } from "./v3/channel";

export default class V3 extends Version {
  /**
   * Initialize the V3 version of Chat
   *
   * @param domain - The Twilio (Twilio.Chat) domain
   */
  constructor(domain: ChatBase) {
    super(domain, "v3");
  }

  /** channels - { Twilio.Chat.V3.ChannelListInstance } resource */
  protected _channels?: ChannelListInstance;

  /** Getter for channels resource */
  get channels(): ChannelListInstance {
    this._channels = this._channels || ChannelListInstance(this);
    return this._channels;
  }
}
