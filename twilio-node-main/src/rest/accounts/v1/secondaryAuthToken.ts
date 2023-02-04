/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Accounts
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

export interface SecondaryAuthTokenContext {
  /**
   * Create a SecondaryAuthTokenInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SecondaryAuthTokenInstance
   */
  create(
    callback?: (error: Error | null, item?: SecondaryAuthTokenInstance) => any
  ): Promise<SecondaryAuthTokenInstance>;

  /**
   * Remove a SecondaryAuthTokenInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SecondaryAuthTokenContextSolution {}

export class SecondaryAuthTokenContextImpl
  implements SecondaryAuthTokenContext
{
  protected _solution: SecondaryAuthTokenContextSolution;
  protected _uri: string;

  constructor(protected _version: V1) {
    this._solution = {};
    this._uri = `/AuthTokens/Secondary`;
  }

  create(
    callback?: (error: Error | null, item?: SecondaryAuthTokenInstance) => any
  ): Promise<SecondaryAuthTokenInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
      });

    operationPromise = operationPromise.then(
      (payload) => new SecondaryAuthTokenInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

interface SecondaryAuthTokenPayload extends SecondaryAuthTokenResource {}

interface SecondaryAuthTokenResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  secondary_auth_token: string;
  url: string;
}

export class SecondaryAuthTokenInstance {
  protected _solution: SecondaryAuthTokenContextSolution;
  protected _context?: SecondaryAuthTokenContext;

  constructor(protected _version: V1, payload: SecondaryAuthTokenResource) {
    this.accountSid = payload.account_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.secondaryAuthToken = payload.secondary_auth_token;
    this.url = payload.url;

    this._solution = {};
  }

  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that the secondary Auth Token was created for.
   */
  accountSid: string;
  /**
   * The date and time in UTC when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date and time in UTC when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;
  /**
   * The generated secondary Auth Token that can be used to authenticate future API requests.
   */
  secondaryAuthToken: string;
  /**
   * The URI for this resource, relative to `https://accounts.twilio.com`
   */
  url: string;

  private get _proxy(): SecondaryAuthTokenContext {
    this._context =
      this._context || new SecondaryAuthTokenContextImpl(this._version);
    return this._context;
  }

  /**
   * Create a SecondaryAuthTokenInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SecondaryAuthTokenInstance
   */
  create(
    callback?: (error: Error | null, item?: SecondaryAuthTokenInstance) => any
  ): Promise<SecondaryAuthTokenInstance> {
    return this._proxy.create(callback);
  }

  /**
   * Remove a SecondaryAuthTokenInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      secondaryAuthToken: this.secondaryAuthToken,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface SecondaryAuthTokenSolution {}

export interface SecondaryAuthTokenListInstance {
  _version: V1;
  _solution: SecondaryAuthTokenSolution;
  _uri: string;

  (): SecondaryAuthTokenContext;
  get(): SecondaryAuthTokenContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function SecondaryAuthTokenListInstance(
  version: V1
): SecondaryAuthTokenListInstance {
  const instance = (() => instance.get()) as SecondaryAuthTokenListInstance;

  instance.get = function get(): SecondaryAuthTokenContext {
    return new SecondaryAuthTokenContextImpl(version);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = ``;

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
