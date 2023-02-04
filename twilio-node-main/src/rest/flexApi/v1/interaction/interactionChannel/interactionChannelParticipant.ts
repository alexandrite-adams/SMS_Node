/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Flex
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

type InteractionChannelParticipantStatus = "closed" | "wrapup";

type InteractionChannelParticipantType =
  | "supervisor"
  | "customer"
  | "external"
  | "agent"
  | "unknown";

/**
 * Options to pass to update a InteractionChannelParticipantInstance
 */
export interface InteractionChannelParticipantContextUpdateOptions {
  /**  */
  status: InteractionChannelParticipantStatus;
}

/**
 * Options to pass to create a InteractionChannelParticipantInstance
 */
export interface InteractionChannelParticipantListInstanceCreateOptions {
  /**  */
  type: InteractionChannelParticipantType;
  /** JSON representing the Media Properties for the new Participant. */
  mediaProperties: any;
}
/**
 * Options to pass to each
 */
export interface InteractionChannelParticipantListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: InteractionChannelParticipantInstance,
    done: (err?: Error) => void
  ) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface InteractionChannelParticipantListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface InteractionChannelParticipantListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface InteractionChannelParticipantContext {
  /**
   * Update a InteractionChannelParticipantInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InteractionChannelParticipantInstance
   */
  update(
    params: InteractionChannelParticipantContextUpdateOptions,
    callback?: (
      error: Error | null,
      item?: InteractionChannelParticipantInstance
    ) => any
  ): Promise<InteractionChannelParticipantInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface InteractionChannelParticipantContextSolution {
  interactionSid: string;
  channelSid: string;
  sid: string;
}

export class InteractionChannelParticipantContextImpl
  implements InteractionChannelParticipantContext
{
  protected _solution: InteractionChannelParticipantContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V1,
    interactionSid: string,
    channelSid: string,
    sid: string
  ) {
    if (!isValidPathParam(interactionSid)) {
      throw new Error("Parameter 'interactionSid' is not valid.");
    }

    if (!isValidPathParam(channelSid)) {
      throw new Error("Parameter 'channelSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { interactionSid, channelSid, sid };
    this._uri = `/Interactions/${interactionSid}/Channels/${channelSid}/Participants/${sid}`;
  }

  update(
    params: InteractionChannelParticipantContextUpdateOptions,
    callback?: (
      error: Error | null,
      item?: InteractionChannelParticipantInstance
    ) => any
  ): Promise<InteractionChannelParticipantInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["status"] === null || params["status"] === undefined) {
      throw new Error("Required parameter \"params['status']\" missing.");
    }

    let data: any = {};

    data["Status"] = params["status"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new InteractionChannelParticipantInstance(
          operationVersion,
          payload,
          instance._solution.interactionSid,
          instance._solution.channelSid,
          instance._solution.sid
        )
    );

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

interface InteractionChannelParticipantPayload extends TwilioResponsePayload {
  participants: InteractionChannelParticipantResource[];
}

interface InteractionChannelParticipantResource {
  sid: string;
  type: InteractionChannelParticipantType;
  interaction_sid: string;
  channel_sid: string;
  url: string;
}

export class InteractionChannelParticipantInstance {
  protected _solution: InteractionChannelParticipantContextSolution;
  protected _context?: InteractionChannelParticipantContext;

  constructor(
    protected _version: V1,
    payload: InteractionChannelParticipantResource,
    interactionSid: string,
    channelSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.type = payload.type;
    this.interactionSid = payload.interaction_sid;
    this.channelSid = payload.channel_sid;
    this.url = payload.url;

    this._solution = { interactionSid, channelSid, sid: sid || this.sid };
  }

  /**
   * The unique string created by Twilio to identify an Interaction Channel Participant resource.
   */
  sid: string;
  type: InteractionChannelParticipantType;
  /**
   * The Interaction Sid for this channel.
   */
  interactionSid: string;
  /**
   * The Channel Sid for this Participant.
   */
  channelSid: string;
  url: string;

  private get _proxy(): InteractionChannelParticipantContext {
    this._context =
      this._context ||
      new InteractionChannelParticipantContextImpl(
        this._version,
        this._solution.interactionSid,
        this._solution.channelSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Update a InteractionChannelParticipantInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InteractionChannelParticipantInstance
   */
  update(
    params: InteractionChannelParticipantContextUpdateOptions,
    callback?: (
      error: Error | null,
      item?: InteractionChannelParticipantInstance
    ) => any
  ): Promise<InteractionChannelParticipantInstance>;

  update(
    params?: any,
    callback?: (
      error: Error | null,
      item?: InteractionChannelParticipantInstance
    ) => any
  ): Promise<InteractionChannelParticipantInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      type: this.type,
      interactionSid: this.interactionSid,
      channelSid: this.channelSid,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface InteractionChannelParticipantSolution {
  interactionSid: string;
  channelSid: string;
}

export interface InteractionChannelParticipantListInstance {
  _version: V1;
  _solution: InteractionChannelParticipantSolution;
  _uri: string;

  (sid: string): InteractionChannelParticipantContext;
  get(sid: string): InteractionChannelParticipantContext;

  /**
   * Create a InteractionChannelParticipantInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InteractionChannelParticipantInstance
   */
  create(
    params: InteractionChannelParticipantListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      item?: InteractionChannelParticipantInstance
    ) => any
  ): Promise<InteractionChannelParticipantInstance>;

  /**
   * Streams InteractionChannelParticipantInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { InteractionChannelParticipantListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: InteractionChannelParticipantInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: InteractionChannelParticipantListInstanceEachOptions,
    callback?: (
      item: InteractionChannelParticipantInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of InteractionChannelParticipantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (
      error: Error | null,
      items: InteractionChannelParticipantPage
    ) => any
  ): Promise<InteractionChannelParticipantPage>;
  /**
   * Lists InteractionChannelParticipantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { InteractionChannelParticipantListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: InteractionChannelParticipantInstance[]
    ) => any
  ): Promise<InteractionChannelParticipantInstance[]>;
  list(
    params: InteractionChannelParticipantListInstanceOptions,
    callback?: (
      error: Error | null,
      items: InteractionChannelParticipantInstance[]
    ) => any
  ): Promise<InteractionChannelParticipantInstance[]>;
  /**
   * Retrieve a single page of InteractionChannelParticipantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { InteractionChannelParticipantListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (
      error: Error | null,
      items: InteractionChannelParticipantPage
    ) => any
  ): Promise<InteractionChannelParticipantPage>;
  page(
    params: InteractionChannelParticipantListInstancePageOptions,
    callback?: (
      error: Error | null,
      items: InteractionChannelParticipantPage
    ) => any
  ): Promise<InteractionChannelParticipantPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function InteractionChannelParticipantListInstance(
  version: V1,
  interactionSid: string,
  channelSid: string
): InteractionChannelParticipantListInstance {
  if (!isValidPathParam(interactionSid)) {
    throw new Error("Parameter 'interactionSid' is not valid.");
  }

  if (!isValidPathParam(channelSid)) {
    throw new Error("Parameter 'channelSid' is not valid.");
  }

  const instance = ((sid) =>
    instance.get(sid)) as InteractionChannelParticipantListInstance;

  instance.get = function get(sid): InteractionChannelParticipantContext {
    return new InteractionChannelParticipantContextImpl(
      version,
      interactionSid,
      channelSid,
      sid
    );
  };

  instance._version = version;
  instance._solution = { interactionSid, channelSid };
  instance._uri = `/Interactions/${interactionSid}/Channels/${channelSid}/Participants`;

  instance.create = function create(
    params: InteractionChannelParticipantListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      items: InteractionChannelParticipantInstance
    ) => any
  ): Promise<InteractionChannelParticipantInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["type"] === null || params["type"] === undefined) {
      throw new Error("Required parameter \"params['type']\" missing.");
    }

    if (
      params["mediaProperties"] === null ||
      params["mediaProperties"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['mediaProperties']\" missing."
      );
    }

    let data: any = {};

    data["Type"] = params["type"];

    data["MediaProperties"] = serialize.object(params["mediaProperties"]);

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new InteractionChannelParticipantInstance(
          operationVersion,
          payload,
          instance._solution.interactionSid,
          instance._solution.channelSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | InteractionChannelParticipantListInstancePageOptions
      | ((
          error: Error | null,
          items: InteractionChannelParticipantPage
        ) => any),
    callback?: (
      error: Error | null,
      items: InteractionChannelParticipantPage
    ) => any
  ): Promise<InteractionChannelParticipantPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new InteractionChannelParticipantPage(
          operationVersion,
          payload,
          instance._solution
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl: string,
    callback?: (
      error: Error | null,
      items: InteractionChannelParticipantPage
    ) => any
  ): Promise<InteractionChannelParticipantPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new InteractionChannelParticipantPage(
          instance._version,
          payload,
          instance._solution
        )
    );
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
  };

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

export class InteractionChannelParticipantPage extends Page<
  V1,
  InteractionChannelParticipantPayload,
  InteractionChannelParticipantResource,
  InteractionChannelParticipantInstance
> {
  /**
   * Initialize the InteractionChannelParticipantPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: InteractionChannelParticipantSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of InteractionChannelParticipantInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: InteractionChannelParticipantResource
  ): InteractionChannelParticipantInstance {
    return new InteractionChannelParticipantInstance(
      this._version,
      payload,
      this._solution.interactionSid,
      this._solution.channelSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
