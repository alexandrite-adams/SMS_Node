/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Trusthub
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

/**
 * Options to pass to create a CustomerProfilesEntityAssignmentsInstance
 */
export interface CustomerProfilesEntityAssignmentsListInstanceCreateOptions {
  /** The SID of an object bag that holds information of the different items. */
  objectSid: string;
}
/**
 * Options to pass to each
 */
export interface CustomerProfilesEntityAssignmentsListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: CustomerProfilesEntityAssignmentsInstance,
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
export interface CustomerProfilesEntityAssignmentsListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface CustomerProfilesEntityAssignmentsListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface CustomerProfilesEntityAssignmentsContext {
  /**
   * Remove a CustomerProfilesEntityAssignmentsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a CustomerProfilesEntityAssignmentsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CustomerProfilesEntityAssignmentsInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: CustomerProfilesEntityAssignmentsInstance
    ) => any
  ): Promise<CustomerProfilesEntityAssignmentsInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CustomerProfilesEntityAssignmentsContextSolution {
  customerProfileSid: string;
  sid: string;
}

export class CustomerProfilesEntityAssignmentsContextImpl
  implements CustomerProfilesEntityAssignmentsContext
{
  protected _solution: CustomerProfilesEntityAssignmentsContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, customerProfileSid: string, sid: string) {
    if (!isValidPathParam(customerProfileSid)) {
      throw new Error("Parameter 'customerProfileSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { customerProfileSid, sid };
    this._uri = `/CustomerProfiles/${customerProfileSid}/EntityAssignments/${sid}`;
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

  fetch(
    callback?: (
      error: Error | null,
      item?: CustomerProfilesEntityAssignmentsInstance
    ) => any
  ): Promise<CustomerProfilesEntityAssignmentsInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new CustomerProfilesEntityAssignmentsInstance(
          operationVersion,
          payload,
          instance._solution.customerProfileSid,
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

interface CustomerProfilesEntityAssignmentsPayload
  extends TwilioResponsePayload {
  results: CustomerProfilesEntityAssignmentsResource[];
}

interface CustomerProfilesEntityAssignmentsResource {
  sid: string;
  customer_profile_sid: string;
  account_sid: string;
  object_sid: string;
  date_created: Date;
  url: string;
}

export class CustomerProfilesEntityAssignmentsInstance {
  protected _solution: CustomerProfilesEntityAssignmentsContextSolution;
  protected _context?: CustomerProfilesEntityAssignmentsContext;

  constructor(
    protected _version: V1,
    payload: CustomerProfilesEntityAssignmentsResource,
    customerProfileSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.customerProfileSid = payload.customer_profile_sid;
    this.accountSid = payload.account_sid;
    this.objectSid = payload.object_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.url = payload.url;

    this._solution = { customerProfileSid, sid: sid || this.sid };
  }

  /**
   * The unique string that we created to identify the Item Assignment resource.
   */
  sid: string;
  /**
   * The unique string that we created to identify the CustomerProfile resource.
   */
  customerProfileSid: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Item Assignment resource.
   */
  accountSid: string;
  /**
   * The SID of an object bag that holds information of the different items.
   */
  objectSid: string;
  /**
   * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The absolute URL of the Identity resource.
   */
  url: string;

  private get _proxy(): CustomerProfilesEntityAssignmentsContext {
    this._context =
      this._context ||
      new CustomerProfilesEntityAssignmentsContextImpl(
        this._version,
        this._solution.customerProfileSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a CustomerProfilesEntityAssignmentsInstance
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
   * Fetch a CustomerProfilesEntityAssignmentsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CustomerProfilesEntityAssignmentsInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: CustomerProfilesEntityAssignmentsInstance
    ) => any
  ): Promise<CustomerProfilesEntityAssignmentsInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      customerProfileSid: this.customerProfileSid,
      accountSid: this.accountSid,
      objectSid: this.objectSid,
      dateCreated: this.dateCreated,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface CustomerProfilesEntityAssignmentsSolution {
  customerProfileSid: string;
}

export interface CustomerProfilesEntityAssignmentsListInstance {
  _version: V1;
  _solution: CustomerProfilesEntityAssignmentsSolution;
  _uri: string;

  (sid: string): CustomerProfilesEntityAssignmentsContext;
  get(sid: string): CustomerProfilesEntityAssignmentsContext;

  /**
   * Create a CustomerProfilesEntityAssignmentsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CustomerProfilesEntityAssignmentsInstance
   */
  create(
    params: CustomerProfilesEntityAssignmentsListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      item?: CustomerProfilesEntityAssignmentsInstance
    ) => any
  ): Promise<CustomerProfilesEntityAssignmentsInstance>;

  /**
   * Streams CustomerProfilesEntityAssignmentsInstance records from the API.
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
   * @param { CustomerProfilesEntityAssignmentsListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: CustomerProfilesEntityAssignmentsInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: CustomerProfilesEntityAssignmentsListInstanceEachOptions,
    callback?: (
      item: CustomerProfilesEntityAssignmentsInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of CustomerProfilesEntityAssignmentsInstance records from the API.
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
      items: CustomerProfilesEntityAssignmentsPage
    ) => any
  ): Promise<CustomerProfilesEntityAssignmentsPage>;
  /**
   * Lists CustomerProfilesEntityAssignmentsInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CustomerProfilesEntityAssignmentsListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: CustomerProfilesEntityAssignmentsInstance[]
    ) => any
  ): Promise<CustomerProfilesEntityAssignmentsInstance[]>;
  list(
    params: CustomerProfilesEntityAssignmentsListInstanceOptions,
    callback?: (
      error: Error | null,
      items: CustomerProfilesEntityAssignmentsInstance[]
    ) => any
  ): Promise<CustomerProfilesEntityAssignmentsInstance[]>;
  /**
   * Retrieve a single page of CustomerProfilesEntityAssignmentsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CustomerProfilesEntityAssignmentsListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (
      error: Error | null,
      items: CustomerProfilesEntityAssignmentsPage
    ) => any
  ): Promise<CustomerProfilesEntityAssignmentsPage>;
  page(
    params: CustomerProfilesEntityAssignmentsListInstancePageOptions,
    callback?: (
      error: Error | null,
      items: CustomerProfilesEntityAssignmentsPage
    ) => any
  ): Promise<CustomerProfilesEntityAssignmentsPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function CustomerProfilesEntityAssignmentsListInstance(
  version: V1,
  customerProfileSid: string
): CustomerProfilesEntityAssignmentsListInstance {
  if (!isValidPathParam(customerProfileSid)) {
    throw new Error("Parameter 'customerProfileSid' is not valid.");
  }

  const instance = ((sid) =>
    instance.get(sid)) as CustomerProfilesEntityAssignmentsListInstance;

  instance.get = function get(sid): CustomerProfilesEntityAssignmentsContext {
    return new CustomerProfilesEntityAssignmentsContextImpl(
      version,
      customerProfileSid,
      sid
    );
  };

  instance._version = version;
  instance._solution = { customerProfileSid };
  instance._uri = `/CustomerProfiles/${customerProfileSid}/EntityAssignments`;

  instance.create = function create(
    params: CustomerProfilesEntityAssignmentsListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      items: CustomerProfilesEntityAssignmentsInstance
    ) => any
  ): Promise<CustomerProfilesEntityAssignmentsInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["objectSid"] === null || params["objectSid"] === undefined) {
      throw new Error("Required parameter \"params['objectSid']\" missing.");
    }

    let data: any = {};

    data["ObjectSid"] = params["objectSid"];

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
        new CustomerProfilesEntityAssignmentsInstance(
          operationVersion,
          payload,
          instance._solution.customerProfileSid
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
      | CustomerProfilesEntityAssignmentsListInstancePageOptions
      | ((
          error: Error | null,
          items: CustomerProfilesEntityAssignmentsPage
        ) => any),
    callback?: (
      error: Error | null,
      items: CustomerProfilesEntityAssignmentsPage
    ) => any
  ): Promise<CustomerProfilesEntityAssignmentsPage> {
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
        new CustomerProfilesEntityAssignmentsPage(
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
      items: CustomerProfilesEntityAssignmentsPage
    ) => any
  ): Promise<CustomerProfilesEntityAssignmentsPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new CustomerProfilesEntityAssignmentsPage(
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

export class CustomerProfilesEntityAssignmentsPage extends Page<
  V1,
  CustomerProfilesEntityAssignmentsPayload,
  CustomerProfilesEntityAssignmentsResource,
  CustomerProfilesEntityAssignmentsInstance
> {
  /**
   * Initialize the CustomerProfilesEntityAssignmentsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: CustomerProfilesEntityAssignmentsSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of CustomerProfilesEntityAssignmentsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: CustomerProfilesEntityAssignmentsResource
  ): CustomerProfilesEntityAssignmentsInstance {
    return new CustomerProfilesEntityAssignmentsInstance(
      this._version,
      payload,
      this._solution.customerProfileSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
