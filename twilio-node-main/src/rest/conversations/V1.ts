/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Conversations
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import ConversationsBase from "../ConversationsBase";
import Version from "../../base/Version";
import { AddressConfigurationListInstance } from "./v1/addressConfiguration";
import { ConfigurationListInstance } from "./v1/configuration";
import { ConversationListInstance } from "./v1/conversation";
import { CredentialListInstance } from "./v1/credential";
import { ParticipantConversationListInstance } from "./v1/participantConversation";
import { RoleListInstance } from "./v1/role";
import { ServiceListInstance } from "./v1/service";
import { UserListInstance } from "./v1/user";

export default class V1 extends Version {
  /**
   * Initialize the V1 version of Conversations
   *
   * @param domain - The Twilio (Twilio.Conversations) domain
   */
  constructor(domain: ConversationsBase) {
    super(domain, "v1");
  }

  /** addressConfigurations - { Twilio.Conversations.V1.AddressConfigurationListInstance } resource */
  protected _addressConfigurations?: AddressConfigurationListInstance;
  /** configuration - { Twilio.Conversations.V1.ConfigurationListInstance } resource */
  protected _configuration?: ConfigurationListInstance;
  /** conversations - { Twilio.Conversations.V1.ConversationListInstance } resource */
  protected _conversations?: ConversationListInstance;
  /** credentials - { Twilio.Conversations.V1.CredentialListInstance } resource */
  protected _credentials?: CredentialListInstance;
  /** participantConversations - { Twilio.Conversations.V1.ParticipantConversationListInstance } resource */
  protected _participantConversations?: ParticipantConversationListInstance;
  /** roles - { Twilio.Conversations.V1.RoleListInstance } resource */
  protected _roles?: RoleListInstance;
  /** services - { Twilio.Conversations.V1.ServiceListInstance } resource */
  protected _services?: ServiceListInstance;
  /** users - { Twilio.Conversations.V1.UserListInstance } resource */
  protected _users?: UserListInstance;

  /** Getter for addressConfigurations resource */
  get addressConfigurations(): AddressConfigurationListInstance {
    this._addressConfigurations =
      this._addressConfigurations || AddressConfigurationListInstance(this);
    return this._addressConfigurations;
  }

  /** Getter for configuration resource */
  get configuration(): ConfigurationListInstance {
    this._configuration =
      this._configuration || ConfigurationListInstance(this);
    return this._configuration;
  }

  /** Getter for conversations resource */
  get conversations(): ConversationListInstance {
    this._conversations = this._conversations || ConversationListInstance(this);
    return this._conversations;
  }

  /** Getter for credentials resource */
  get credentials(): CredentialListInstance {
    this._credentials = this._credentials || CredentialListInstance(this);
    return this._credentials;
  }

  /** Getter for participantConversations resource */
  get participantConversations(): ParticipantConversationListInstance {
    this._participantConversations =
      this._participantConversations ||
      ParticipantConversationListInstance(this);
    return this._participantConversations;
  }

  /** Getter for roles resource */
  get roles(): RoleListInstance {
    this._roles = this._roles || RoleListInstance(this);
    return this._roles;
  }

  /** Getter for services resource */
  get services(): ServiceListInstance {
    this._services = this._services || ServiceListInstance(this);
    return this._services;
  }

  /** Getter for users resource */
  get users(): UserListInstance {
    this._users = this._users || UserListInstance(this);
    return this._users;
  }
}