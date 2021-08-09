import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `AWSDateTime` scalar type provided by AWS AppSync, represents a valid ***extended*** [ISO 8601 DateTime](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) string. In other words, this scalar type accepts datetime strings of the form `YYYY-MM-DDThh:mm:ss.SSSZ`.  The scalar can also accept "negative years" of the form `-YYYY` which correspond to years before `0000`. For example, "**-2017-01-01T00:00Z**" and "**-9999-01-01T00:00Z**" are both valid datetime strings.  The field after the two digit seconds field is a nanoseconds field. It can accept between 1 and 9 digits. So, for example, "**1970-01-01T12:00:00.2Z**", "**1970-01-01T12:00:00.277Z**" and "**1970-01-01T12:00:00.123456789Z**" are all valid datetime strings.  The seconds and nanoseconds fields are optional (the seconds field must be specified if the nanoseconds field is to be used).  The [time zone offset](https://en.wikipedia.org/wiki/ISO_8601#Time_zone_designators) is compulsory for this scalar. The time zone offset must either be `Z` (representing the UTC time zone) or be in the format `±hh:mm:ss`. The seconds field in the timezone offset will be considered valid even though it is not part of the ISO 8601 standard. */
  AWSDateTime: any;
  /** The `AWSJSON` scalar type provided by AWS AppSync, represents a JSON string that complies with [RFC 8259](https://tools.ietf.org/html/rfc8259).  Maps like "**{\\"upvotes\\": 10}**", lists like "**[1,2,3]**", and scalar values like "**\\"AWSJSON example string\\"**", "**1**", and "**true**" are accepted as valid JSON and will automatically be parsed and loaded in the resolver mapping templates as Maps, Lists, or Scalar values rather than as the literal input strings.  Invalid JSON strings like "**{a: 1}**", "**{'a': 1}**" and "**Unquoted string**" will throw GraphQL validation errors. */
  AWSJSON: any;
};












/**  ### SITES #### */
export type Address = {
  __typename?: 'Address';
  street?: Maybe<Scalars['String']>;
  /**   The full street address. */
  locality?: Maybe<Scalars['String']>;
  /**   The city or locality. */
  region?: Maybe<Scalars['String']>;
  /**   The state or region. */
  postalCode?: Maybe<Scalars['String']>;
  /**   The zip code or postal code. */
  country?: Maybe<Scalars['String']>;
};

export type AddressInput = {
  addressee?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  /**   The full street address. */
  locality?: Maybe<Scalars['String']>;
  /**   The city or locality. */
  region?: Maybe<Scalars['String']>;
  /**   The state or region. */
  postalCode?: Maybe<Scalars['String']>;
  /**   The zip code or postal code. */
  country?: Maybe<Scalars['String']>;
};

/**  ### ASSETS #### */
export type Asset = {
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type CodeDeliveryDetails = {
  __typename?: 'CodeDeliveryDetails';
  destination?: Maybe<Scalars['String']>;
  deliveryMedium?: Maybe<Scalars['String']>;
  attributeName?: Maybe<Scalars['String']>;
};

export type CodeMismatchError = Error & {
  __typename?: 'CodeMismatchError';
  message: Scalars['String'];
  username?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

/**  ### COMMENTS #### */
export type Comment = {
  __typename?: 'Comment';
  id?: Maybe<Scalars['String']>;
  entity_type?: Maybe<Scalars['String']>;
  entity_id?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['AWSDateTime']>;
  created_by?: Maybe<User>;
};

export type CommentInput = {
  id?: Maybe<Scalars['String']>;
  entity_type: Scalars['String'];
  entity_id: Scalars['String'];
  body: Scalars['String'];
};

export type CommentResultSuccess = {
  __typename?: 'CommentResultSuccess';
  comment: Comment;
};

/**  ### SHARED #### */
export type DocumentId = {
  __typename?: 'DocumentId';
  id: Scalars['ID'];
  version_id?: Maybe<Scalars['ID']>;
};

export enum EntityType {
  Asset = 'Asset',
  Site = 'Site'
}

export type Error = {
  message: Scalars['String'];
};

/**  ### Files Service #### */
export type FileCreateInput = {
  source: Scalars['String'];
  type: Scalars['String'];
  name: Scalars['String'];
  workflowId?: Maybe<Scalars['String']>;
  workflowStepContracts?: Maybe<Array<Maybe<WorkflowStepContractIdInput>>>;
  convert?: Maybe<Scalars['Boolean']>;
  transcribe?: Maybe<Scalars['Boolean']>;
  translate?: Maybe<Scalars['Boolean']>;
};

export type FileInfo = {
  __typename?: 'FileInfo';
  type: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  metaFields?: Maybe<Array<Maybe<MetaField>>>;
};

export type FileUploadRecord = {
  __typename?: 'FileUploadRecord';
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  workflowId?: Maybe<Scalars['String']>;
  stepId?: Maybe<Scalars['String']>;
  contractName?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FileUploadRecordInput = {
  id: Scalars['String'];
  key: Scalars['String'];
  type: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  workflowId?: Maybe<Scalars['String']>;
  stepId?: Maybe<Scalars['String']>;
  contractName?: Maybe<Scalars['String']>;
};

export enum HttpMethod {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Patch = 'PATCH',
  Head = 'HEAD',
  Options = 'OPTIONS'
}

/**  ### ARCUS #### */
export type IndexedDocument = {
  __typename?: 'IndexedDocument';
  /**
   *  A JSON map with at least one key-value pair.
   * Keys can only contain letters, numbers, underscores, and dashes.
   * Contents are indexed for searchability.
   */
  contents: Scalars['AWSJSON'];
  /**
   *  Plain-string tags for a document.
   * Queries require at least one tag to be set.
   */
  tags: Array<Scalars['String']>;
  /**
   *  This field is only set when searching for documents.
   * Can be used to paginate queries using Elasticsearch search_after search option.
   */
  sort?: Maybe<Scalars['AWSJSON']>;
  /**
   *  Standard Document Fields
   * Arcus ID
   */
  arcus_id: DocumentId;
  /**   The GlideCloud Tenant ID which "owns" this document */
  tenant_id: Scalars['ID'];
  /**   Identifying a GlideCloud Principle */
  created_by?: Maybe<Scalars['ID']>;
  /**   Date of creation */
  created_at: Scalars['String'];
  /**   Identifying a GlideCloud Principle */
  updated_by?: Maybe<Scalars['ID']>;
  /**   DateTime of last update */
  updated_at: Scalars['String'];
  /**   A source string, for deriving an update */
  source?: Maybe<Scalars['String']>;
  /**   Only present if accessing a soft-deleted document */
  deleted_at?: Maybe<Scalars['String']>;
};

export type IndexedDocumentInput = {
  /**
   *  Setting contents always replaces the existing contents.
   * JSONPatch is provided as a convenience for updating existing
   * documents.
   */
  contents?: Maybe<Scalars['AWSJSON']>;
  /**
   *  Tags are always required for a document, but do not need
   * to be provided in updates.
   * Tags are used to narrow down search results, and label
   * documents with a type name.
   */
  tags?: Maybe<Array<Scalars['String']>>;
  /**
   *  Always applied to the document before persistence, regardless
   * of if it is a PUT or a PATCH.
   * If contents are not set when creating a new document, JSONPatch
   * operations will be applied to an empty map.
   */
  jsonpatch_ops?: Maybe<Array<JsonPatchOp>>;
};

export type IndexedDocumentMapping = {
  __typename?: 'IndexedDocumentMapping';
  mapping: Scalars['AWSJSON'];
};

export type IndexedDocumentSearchV1DryRun = {
  __typename?: 'IndexedDocumentSearchV1DryRun';
  /**   The QueryLang query string that was provided by the client. */
  q?: Maybe<Scalars['String']>;
  /**   The QueryLang sort string that was provided by the client. */
  sort_by?: Maybe<Scalars['String']>;
  /**   JSON-serialized Elasticsearch query generated from inputs. */
  elastic: Scalars['AWSJSON'];
};

/**
 *  Searches can simply be done on tags, or you can narrow down the
 * search using QueryLang query & sort strings.
 */
export type IndexedDocumentSearchV1Query = {
  /**   QueryLang string for forming the query. */
  q?: Maybe<Scalars['String']>;
  /**   The QueryLang sort string for setting sort behavior. */
  sort_by?: Maybe<Scalars['String']>;
  /**   At least one tag for the query. */
  tags: Array<Scalars['String']>;
  /**
   *  Optionally, the query body to send to Elasticsearch.
   * If a 'query' is set, it will be nested in a boolean query's `must` alongside
   * the injected tenant_id and tags queries.
   */
  query?: Maybe<Scalars['AWSJSON']>;
};

export type IndexedDocumentSearchV1Result = {
  __typename?: 'IndexedDocumentSearchV1Result';
  /**   The Documents that matched the query. */
  hits: Array<Maybe<IndexedDocument>>;
  /**
   *  Fields forwarded from the Elasticsearch query.
   * Clients might wish to log metadata about their query.
   */
  took: Scalars['AWSJSON'];
  timed_out: Scalars['AWSJSON'];
};

export type IndexedDocumentTag = {
  __typename?: 'IndexedDocumentTag';
  tag: Scalars['String'];
  doc_count: Scalars['AWSJSON'];
};

export type IndexedDocumentTags = {
  __typename?: 'IndexedDocumentTags';
  tags: Array<Maybe<IndexedDocumentTag>>;
};

export type IndustriesListResultSuccess = {
  __typename?: 'IndustriesListResultSuccess';
  items?: Maybe<Array<Maybe<Industry>>>;
  nextToken?: Maybe<Scalars['String']>;
  scannedCount?: Maybe<Scalars['Int']>;
};

/**  ### TASKS #### */
export type Industry = {
  __typename?: 'Industry';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type IndustryInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type IndustryResultSuccess = {
  __typename?: 'IndustryResultSuccess';
  industry?: Maybe<Industry>;
};

export type JsonPatchOp = {
  op: JsonPatchOpType;
  path?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['AWSJSON']>;
};

export enum JsonPatchOpType {
  Add = 'add',
  Remove = 'remove',
  Replace = 'replace',
  Copy = 'copy',
  Move = 'move',
  Test = 'test'
}

export type MetaField = {
  __typename?: 'MetaField';
  name: Scalars['String'];
  value: Scalars['String'];
};

/**  ### END NOTIFICATIONS #### */
export type Mutation = {
  __typename?: 'Mutation';
  organizationCreate?: Maybe<Organization>;
  /**   Creates meta-data for a new file and returns pre-signed URL to upload the file directly to S3 */
  fileCreate?: Maybe<FileInfo>;
  fileUploadRecordCreate?: Maybe<FileUploadRecord>;
  /**   User management */
  userManagement?: Maybe<UserManagementResult>;
  userCreate?: Maybe<User>;
  /**   Entity Comments */
  commentCreateOrUpdate?: Maybe<CommentResultSuccess>;
  /**   ServiceLines */
  industryCreate?: Maybe<IndustryResultSuccess>;
  serviceLineCreate?: Maybe<ServiceLineResultSuccess>;
  /**   Sites */
  siteCreate?: Maybe<SiteResultSuccess>;
  siteUpdate?: Maybe<SiteResultSuccess>;
  /**   Tasks */
  taskCreate?: Maybe<TaskResultSuccess>;
  taskUpdate?: Maybe<TaskResultSuccess>;
  taskDelete?: Maybe<TaskResultSuccess>;
  /**   Creates a Step Definition for the given input */
  workflowStepDefinitionCreate: WorkflowStepDefinition;
  /**   Updates a Step Definition */
  workflowStepDefinitionUpdate: WorkflowStepDefinition;
  /**   Updates a Workflow Definition */
  workflowDefinitionCreate: WorkflowDefinition;
  workflowDefinitionUpdate: WorkflowDefinition;
  /**
   *  Initialize a Workflow Tree from a definition with the given ID & type
   * Optionally override the RaciArray for the root definition
   * TODO add recursive functionality for defining more precise RaciArray overrides
   */
  workflowProcessDefinitionTreeInitialize: WorkflowTree;
  /**
   *  Submit a Command to an initialized Workflow or Step
   * The input's 'id' field represents the ID of the Step or Workflow to target
   * On success, returns the ID of the Workflow or Step that was submitted to
   * Use the workflowTreeDetails query for querying the updated state
   */
  workflowCommandSubmit: WorkflowCommandOutput;
  notificationTemplateDefinitionCreate: NotificationTemplateDefinition;
  notificationTemplateDefinitionUpdate: NotificationTemplateDefinition;
  notificationTemplateDefinitionRender: NotificationTemplateRenderResult;
  /**   Creating and updating Indexed Documents */
  indexedDocumentCreate: IndexedDocument;
  indexedDocumentUpdate: IndexedDocument;
};


/**  ### END NOTIFICATIONS #### */
export type MutationOrganizationCreateArgs = {
  input?: Maybe<OrganizationCreateInput>;
};


/**  ### END NOTIFICATIONS #### */
export type MutationFileCreateArgs = {
  input: FileCreateInput;
};


/**  ### END NOTIFICATIONS #### */
export type MutationFileUploadRecordCreateArgs = {
  input?: Maybe<FileUploadRecordInput>;
};


/**  ### END NOTIFICATIONS #### */
export type MutationUserManagementArgs = {
  userRegisterInput?: Maybe<UserRegisterInput>;
  userConfirmationInput?: Maybe<UserConfirmationInput>;
  userPasswordResetInput?: Maybe<UserConfirmationInput>;
};


/**  ### END NOTIFICATIONS #### */
export type MutationUserCreateArgs = {
  input?: Maybe<UserCreateInput>;
};


/**  ### END NOTIFICATIONS #### */
export type MutationCommentCreateOrUpdateArgs = {
  input?: Maybe<CommentInput>;
};


/**  ### END NOTIFICATIONS #### */
export type MutationIndustryCreateArgs = {
  input?: Maybe<IndustryInput>;
};


/**  ### END NOTIFICATIONS #### */
export type MutationServiceLineCreateArgs = {
  input?: Maybe<ServiceLineInput>;
};


/**  ### END NOTIFICATIONS #### */
export type MutationSiteCreateArgs = {
  input?: Maybe<SiteInput>;
};


/**  ### END NOTIFICATIONS #### */
export type MutationSiteUpdateArgs = {
  id: Scalars['ID'];
  input?: Maybe<SiteInput>;
};


/**  ### END NOTIFICATIONS #### */
export type MutationTaskCreateArgs = {
  input?: Maybe<TaskInput>;
};


/**  ### END NOTIFICATIONS #### */
export type MutationTaskUpdateArgs = {
  id: Scalars['ID'];
  input?: Maybe<TaskInput>;
};


/**  ### END NOTIFICATIONS #### */
export type MutationTaskDeleteArgs = {
  id: Scalars['ID'];
};


/**  ### END NOTIFICATIONS #### */
export type MutationWorkflowStepDefinitionCreateArgs = {
  input: WorkflowStepDefinitionInput;
};


/**  ### END NOTIFICATIONS #### */
export type MutationWorkflowStepDefinitionUpdateArgs = {
  id: Scalars['ID'];
  input: WorkflowStepDefinitionInput;
};


/**  ### END NOTIFICATIONS #### */
export type MutationWorkflowDefinitionCreateArgs = {
  input: WorkflowDefinitionInput;
};


/**  ### END NOTIFICATIONS #### */
export type MutationWorkflowDefinitionUpdateArgs = {
  id: Scalars['ID'];
  input: WorkflowDefinitionInput;
};


/**  ### END NOTIFICATIONS #### */
export type MutationWorkflowProcessDefinitionTreeInitializeArgs = {
  id: Scalars['ID'];
  type: WorkflowProcessDefinitionType;
  raci_mappings: Array<Maybe<RaciArrayRoleMappingInput>>;
};


/**  ### END NOTIFICATIONS #### */
export type MutationWorkflowCommandSubmitArgs = {
  command: WorkflowCommandInput;
};


/**  ### END NOTIFICATIONS #### */
export type MutationNotificationTemplateDefinitionCreateArgs = {
  input: NotificationTemplateDefinitionInput;
};


/**  ### END NOTIFICATIONS #### */
export type MutationNotificationTemplateDefinitionUpdateArgs = {
  id: Scalars['ID'];
  input: NotificationTemplateDefinitionInput;
};


/**  ### END NOTIFICATIONS #### */
export type MutationNotificationTemplateDefinitionRenderArgs = {
  id: Scalars['ID'];
  params: Scalars['AWSJSON'];
};


/**  ### END NOTIFICATIONS #### */
export type MutationIndexedDocumentCreateArgs = {
  input: IndexedDocumentInput;
};


/**  ### END NOTIFICATIONS #### */
export type MutationIndexedDocumentUpdateArgs = {
  id: Scalars['ID'];
  input: IndexedDocumentInput;
};

export type NotAuthorizedException = Error & {
  __typename?: 'NotAuthorizedException';
  message: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

/**   A document representing a persisted Template Definition. */
export type NotificationTemplateDefinition = {
  __typename?: 'NotificationTemplateDefinition';
  /**   Document Fields */
  arcus_id: DocumentId;
  tenant_id: Scalars['ID'];
  created_by?: Maybe<Scalars['ID']>;
  created_at: Scalars['String'];
  updated_by?: Maybe<Scalars['ID']>;
  updated_at: Scalars['String'];
  source?: Maybe<Scalars['String']>;
  deleted_at?: Maybe<Scalars['String']>;
  template_version: NotificationTemplateVersion;
  html_data: Scalars['String'];
};

/**   Inputs for creating/updating template definitions. */
export type NotificationTemplateDefinitionInput = {
  template_version: NotificationTemplateVersion;
  html_data: Scalars['String'];
};

/**   Result from rendering a Template Definition. */
export type NotificationTemplateRenderResult = {
  __typename?: 'NotificationTemplateRenderResult';
  html: Scalars['String'];
};

/**
 *  ### END WORKFLOWS ####
 * ### BEGIN NOTIFICATIONS ####
 *  Version of the template renderer to use.
 */
export enum NotificationTemplateVersion {
  V1 = 'v1'
}

/**  ### Organizations #### */
export type Organization = {
  __typename?: 'Organization';
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  subdomain?: Maybe<Scalars['String']>;
};

export type OrganizationCreateInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  subdomain?: Maybe<Scalars['String']>;
};

export type Position = {
  __typename?: 'Position';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  altitude?: Maybe<Scalars['Float']>;
};

export type PositionInput = {
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  altitude?: Maybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  organizations?: Maybe<Array<Maybe<Organization>>>;
  organizationDetails?: Maybe<Organization>;
  filesByWorkflow?: Maybe<Array<Maybe<FileUploadRecord>>>;
  fileByStep?: Maybe<FileInfo>;
  fileByPath?: Maybe<FileInfo>;
  userInfo?: Maybe<User>;
  currentUser?: Maybe<User>;
  /**   Comments queries */
  comments?: Maybe<Array<Maybe<Comment>>>;
  /**   Industry queries */
  industryRetrieve?: Maybe<Industry>;
  industriesList?: Maybe<IndustriesListResultSuccess>;
  /**   ServiceLine queries */
  serviceLineRetrieve?: Maybe<ServiceLine>;
  serviceLinesList?: Maybe<ServiceLinesListResultSuccess>;
  /**   Sites queries */
  siteRetrieve?: Maybe<Site>;
  sitesList?: Maybe<SitesListResultSuccess>;
  siteLookup?: Maybe<SiteLookupResult>;
  /**   Task queries */
  taskRetrieve?: Maybe<Task>;
  tasksList?: Maybe<TasksListResultSuccess>;
  /**   Process Definition information */
  workflowStepDefinitionDetails: WorkflowStepDefinition;
  workflowProcessDefinitionTree: WorkflowProcessDefinitionTree;
  /**
   *  Loads the current Workflow Tree state recursively for an identifiable Workflow.
   * Poll this query for the most up-to-date state after a command is successfully
   * submitted.
   */
  workflowTreeDetails: WorkflowTree;
  /**
   *  Paginate WorkflowTrees for reviewing their state and possibly submitting commands
   * to them. All Query search fields are optional, and the cursor should be added to the
   * query for paginating results.
   */
  workflowTreeSearch: WorkflowTreeSearchPage;
  /**   Loads the state for a singular node (i.e. not recursively) */
  workflowTreeNodeDetails: WorkflowTree;
  notificationTemplateDefinitionDetails: NotificationTemplateDefinition;
  notificationTemplateDefinitionList: Array<Maybe<NotificationTemplateDefinition>>;
  /**   Gets a generic indexed document by ID */
  indexedDocumentDetails: IndexedDocument;
  /**   Indexed documents search v1 using QueryLang strings */
  indexedDocumentSearchV1: IndexedDocumentSearchV1Result;
  /**   Search dry-runs are useful for introspecting on queries generated by QueryLang strings */
  indexedDocumentSearchV1DryRun: IndexedDocumentSearchV1DryRun;
  /**
   *  Returns the Elasticsearch mapping that backs Indexed Documents
   * Useful for understanding dry-run output
   */
  indexedDocumentMapping: IndexedDocumentMapping;
  /**   Get up to 500 tags in the current tenant. Limitless pagination support will be added in the future.  */
  indexedDocumentTags: IndexedDocumentTags;
};


export type QueryOrganizationsArgs = {
  ids: Array<Maybe<Scalars['String']>>;
};


export type QueryOrganizationDetailsArgs = {
  orgId: Scalars['String'];
};


export type QueryFilesByWorkflowArgs = {
  workflowId: Scalars['String'];
};


export type QueryFileByStepArgs = {
  workflowId: Scalars['String'];
  stepId: Scalars['String'];
  name: Scalars['String'];
};


export type QueryFileByPathArgs = {
  path: Scalars['String'];
};


export type QueryUserInfoArgs = {
  id: Scalars['String'];
};


export type QueryCommentsArgs = {
  entityId: Scalars['String'];
};


export type QueryIndustryRetrieveArgs = {
  id: Scalars['ID'];
};


export type QueryServiceLineRetrieveArgs = {
  id: Scalars['ID'];
};


export type QuerySiteRetrieveArgs = {
  id: Scalars['ID'];
};


export type QuerySiteLookupArgs = {
  position?: Maybe<SiteLookupPositionInput>;
  address?: Maybe<SiteLookupAddressInput>;
};


export type QueryTaskRetrieveArgs = {
  id: Scalars['ID'];
};


export type QueryWorkflowStepDefinitionDetailsArgs = {
  id: Scalars['ID'];
};


export type QueryWorkflowProcessDefinitionTreeArgs = {
  id: Scalars['ID'];
  type: WorkflowProcessDefinitionType;
};


export type QueryWorkflowTreeDetailsArgs = {
  id: Scalars['ID'];
};


export type QueryWorkflowTreeSearchArgs = {
  query: WorkflowTreeSearchQueryInput;
};


export type QueryWorkflowTreeNodeDetailsArgs = {
  id: Scalars['ID'];
};


export type QueryNotificationTemplateDefinitionDetailsArgs = {
  id: Scalars['ID'];
};


export type QueryIndexedDocumentDetailsArgs = {
  id: Scalars['ID'];
};


export type QueryIndexedDocumentSearchV1Args = {
  query: IndexedDocumentSearchV1Query;
};


export type QueryIndexedDocumentSearchV1DryRunArgs = {
  query: IndexedDocumentSearchV1Query;
};

export type RaciArray = {
  __typename?: 'RaciArray';
  responsible: Array<Maybe<Scalars['String']>>;
  accountable: Scalars['String'];
  consulted: Array<Maybe<Scalars['String']>>;
  informed: Array<Maybe<Scalars['String']>>;
  notification_templates: WorkflowRaciNotificationTemplates;
};

export type RaciArrayInput = {
  responsible?: Maybe<Array<Maybe<Scalars['String']>>>;
  accountable: Scalars['String'];
  consulted?: Maybe<Array<Maybe<Scalars['String']>>>;
  informed?: Maybe<Array<Maybe<Scalars['String']>>>;
  notification_templates: WorkflowRaciNotificationTemplatesInput;
};

export type RaciArrayRoleMapping = {
  __typename?: 'RaciArrayRoleMapping';
  role: Scalars['String'];
  principle_ids: Array<Scalars['ID']>;
};

export type RaciArrayRoleMappingInput = {
  role: Scalars['String'];
  principle_ids: Array<Scalars['ID']>;
};

export enum RaciRole {
  Responsible = 'responsible',
  Accountable = 'accountable',
  Consulted = 'consulted',
  Informed = 'informed'
}

export type ServiceLine = {
  __typename?: 'ServiceLine';
  id: Scalars['ID'];
  industryId: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type ServiceLineInput = {
  industryId: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type ServiceLineResultSuccess = {
  __typename?: 'ServiceLineResultSuccess';
  serviceLine?: Maybe<ServiceLine>;
};

export type ServiceLinesListResultSuccess = {
  __typename?: 'ServiceLinesListResultSuccess';
  items: Array<Maybe<ServiceLine>>;
  nextToken?: Maybe<Scalars['String']>;
  scannedCount?: Maybe<Scalars['Int']>;
};

export type Site = {
  __typename?: 'Site';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Address>;
  position?: Maybe<Position>;
};

export type SiteInput = {
  name?: Maybe<Scalars['String']>;
  address?: Maybe<AddressInput>;
  position?: Maybe<PositionInput>;
};

export type SiteLookupAddressInput = {
  street?: Maybe<Scalars['String']>;
  /**   The full street address */
  locality?: Maybe<Scalars['String']>;
  /**   The city or locality */
  region?: Maybe<Scalars['String']>;
  /**   the state or region */
  postalCode?: Maybe<Scalars['String']>;
  addressee?: Maybe<Scalars['String']>;
  candidates?: Maybe<Scalars['Int']>;
};

export type SiteLookupAddressResult = {
  __typename?: 'SiteLookupAddressResult';
  address?: Maybe<Address>;
  position?: Maybe<Position>;
  addressee?: Maybe<Scalars['String']>;
};

export type SiteLookupAddressResults = {
  __typename?: 'SiteLookupAddressResults';
  results?: Maybe<Array<Maybe<SiteLookupAddressResult>>>;
};

export type SiteLookupPositionInput = {
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type SiteLookupPositionResult = {
  __typename?: 'SiteLookupPositionResult';
  distance?: Maybe<Scalars['Float']>;
  address?: Maybe<Address>;
  position?: Maybe<Position>;
};

export type SiteLookupPositionResults = {
  __typename?: 'SiteLookupPositionResults';
  results?: Maybe<Array<Maybe<SiteLookupPositionResult>>>;
};

export type SiteLookupResult = SiteLookupPositionResults | SiteLookupAddressResults;

export type SiteResultSuccess = {
  __typename?: 'SiteResultSuccess';
  site: Site;
};

export type SitesListResultSuccess = {
  __typename?: 'SitesListResultSuccess';
  items?: Maybe<Array<Maybe<Site>>>;
  nextToken?: Maybe<Scalars['String']>;
  scannedCount?: Maybe<Scalars['Int']>;
};

export type SubjectInput = {
  entityType?: Maybe<EntityType>;
  id?: Maybe<Scalars['ID']>;
};

export type Task = {
  __typename?: 'Task';
  id?: Maybe<Scalars['String']>;
  /**   Sequential numeric ID */
  sequence?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<TaskType>;
  priority?: Maybe<TaskPriority>;
  status?: Maybe<TaskStatus>;
  serviceLine?: Maybe<ServiceLine>;
  description?: Maybe<Scalars['String']>;
  subjects?: Maybe<Array<Maybe<TaskSubject>>>;
  workflow?: Maybe<TaskWorkflow>;
};

export type TaskInput = {
  name?: Maybe<Scalars['String']>;
  type?: Maybe<TaskType>;
  priority?: Maybe<TaskPriority>;
  status?: Maybe<TaskStatus>;
  serviceLineId?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  subjects?: Maybe<Array<Maybe<SubjectInput>>>;
  workflow?: Maybe<TaskWorkflowInput>;
};

export enum TaskPriority {
  Low = 'low',
  Medium = 'medium',
  High = 'high'
}

export type TaskResultSuccess = {
  __typename?: 'TaskResultSuccess';
  task?: Maybe<Task>;
};

export enum TaskStatus {
  Active = 'active',
  Completed = 'completed',
  Paused = 'paused',
  Canceled = 'canceled'
}

export type TaskSubject = Site;

export enum TaskType {
  Enhancement = 'enhancement',
  Highlight = 'highlight',
  Issue = 'issue'
}

export type TaskWorkflow = {
  __typename?: 'TaskWorkflow';
  id: Scalars['ID'];
  stepId?: Maybe<Scalars['ID']>;
};

export type TaskWorkflowInput = {
  id: Scalars['ID'];
  stepId?: Maybe<Scalars['ID']>;
};

export type TasksListResultSuccess = {
  __typename?: 'TasksListResultSuccess';
  items: Array<Maybe<Task>>;
  nextToken?: Maybe<Scalars['String']>;
  scannedCount?: Maybe<Scalars['Int']>;
};

export type User = UserItf & {
  __typename?: 'User';
  id: Scalars['String'];
  tenantId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  organizations?: Maybe<Array<Maybe<UserOrganization>>>;
};

export type UserAlreadyConfirmedError = Error & {
  __typename?: 'UserAlreadyConfirmedError';
  message: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

export type UserAlreadyExistsError = Error & {
  __typename?: 'UserAlreadyExistsError';
  message: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

export type UserConfirmation = {
  __typename?: 'UserConfirmation';
  username: Scalars['String'];
  code: Scalars['String'];
};

export type UserConfirmationCodeResendResultSuccess = {
  __typename?: 'UserConfirmationCodeResendResultSuccess';
  codeDeliveryDetails: CodeDeliveryDetails;
};

export type UserConfirmationInput = {
  username?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resend?: Maybe<Scalars['Boolean']>;
};

export type UserConfirmationResultSuccess = {
  __typename?: 'UserConfirmationResultSuccess';
  userConfirmation: UserConfirmation;
};

/**  ### Users #### */
export type UserCreateInput = {
  id?: Maybe<Scalars['String']>;
  tenantId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type UserItf = {
  id: Scalars['String'];
  tenantId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  organizations?: Maybe<Array<Maybe<UserOrganization>>>;
};

export type UserManagementResult = UserRegisterResultSuccess | UserConfirmationResultSuccess | UserConfirmationCodeResendResultSuccess | UserPasswordResetResultSuccess | UserAlreadyExistsError | UserAlreadyConfirmedError | UserNotFoundError | CodeMismatchError | NotAuthorizedException;

export type UserNotFoundError = Error & {
  __typename?: 'UserNotFoundError';
  message: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

export type UserOrganization = {
  __typename?: 'UserOrganization';
  id: Scalars['String'];
  name: Scalars['String'];
  subdomain?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UserPasswordResetInput = {
  username?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type UserPasswordResetResultSuccess = {
  __typename?: 'UserPasswordResetResultSuccess';
  codeDeliveryDetails: CodeDeliveryDetails;
};

export type UserRegisterInput = {
  tenantId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Maybe<UserRole>>>;
};

export type UserRegisterResultSuccess = {
  __typename?: 'UserRegisterResultSuccess';
  user: User;
};

export enum UserRole {
  Administrator = 'administrator',
  AccountManager = 'account_manager',
  CrewLeader = 'crew_leader',
  PropertyManager = 'property_manager'
}

/**
 *  Represents a Command that can be issued to an initialized Workflow Tree.
 * Depending on the `type`, extra parameters might need to be supplied. Any
 * extra parameters will be supplied through the `type`'s corresponding key
 * in this input.
 */
export type WorkflowCommandInput = {
  type: WorkflowCommandType;
  id: Scalars['ID'];
  submit_step_contract?: Maybe<WorkflowStepContractSubmitInput>;
};

/**
 *  Simply contains the command object that was casted, validated, and
 * successfully submitted to the corresponding Workflow or Step.
 * Use the workflowTreeNodeDetails query to quickly load the state
 * for the corresponding Workflow Tree node.
 */
export type WorkflowCommandOutput = {
  __typename?: 'WorkflowCommandOutput';
  command: Scalars['AWSJSON'];
};

export enum WorkflowCommandType {
  StartStep = 'start_step',
  PauseStep = 'pause_step',
  StopStep = 'stop_step',
  CompleteStep = 'complete_step',
  SubmitStepContract = 'submit_step_contract'
}

export type WorkflowContext = {
  type: WorkflowContextType;
  name: Scalars['String'];
};

export type WorkflowContextBoolean = WorkflowContext & {
  __typename?: 'WorkflowContextBoolean';
  type: WorkflowContextType;
  name: Scalars['String'];
  boolean: Scalars['Boolean'];
};

/**   Represents static context that's attached to a Workflow. */
export type WorkflowContextInput = {
  type: WorkflowContextType;
  name: Scalars['String'];
  integer?: Maybe<Scalars['Int']>;
  string?: Maybe<Scalars['String']>;
  boolean?: Maybe<Scalars['Boolean']>;
  subcontexts?: Maybe<Array<WorkflowContextInput>>;
};

export type WorkflowContextInteger = WorkflowContext & {
  __typename?: 'WorkflowContextInteger';
  type: WorkflowContextType;
  name: Scalars['String'];
  integer: Scalars['Int'];
};

export type WorkflowContextNested = WorkflowContext & {
  __typename?: 'WorkflowContextNested';
  type: WorkflowContextType;
  name: Scalars['String'];
  subcontexts: Array<WorkflowContext>;
};

export type WorkflowContextString = WorkflowContext & {
  __typename?: 'WorkflowContextString';
  type: WorkflowContextType;
  name: Scalars['String'];
  string: Scalars['String'];
};

export enum WorkflowContextType {
  String = 'string',
  Boolean = 'boolean',
  Integer = 'integer',
  Nested = 'nested'
}

export type WorkflowContextView = {
  name?: Maybe<Scalars['String']>;
};

export type WorkflowContract = {
  __typename?: 'WorkflowContract';
  name: Scalars['String'];
  template: WorkflowContractTemplate;
  contract_clauses: Array<WorkflowContractClause>;
  required: Scalars['Boolean'];
  resubmission_allowed: Scalars['Boolean'];
  accumulate: Scalars['Boolean'];
  merge_resubmissions: Scalars['Boolean'];
};

export type WorkflowContractClause = {
  __typename?: 'WorkflowContractClause';
  name: Scalars['String'];
  description: Scalars['String'];
  type: WorkflowContractClauseType;
  required: Scalars['Boolean'];
  validators: Array<Maybe<WorkflowContractClauseValidator>>;
};

export type WorkflowContractClauseBooleanValidator = WorkflowContractClauseValidator & {
  __typename?: 'WorkflowContractClauseBooleanValidator';
  type: WorkflowContractClauseValidatorType;
  boolean: Scalars['Boolean'];
};

export type WorkflowContractClauseInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type: WorkflowContractClauseType;
  required?: Maybe<Scalars['Boolean']>;
  /**
   *  Validators have corresponding types that can be applied to
   * Passing validators to a custom ContractClause that do not
   * apply to the clause's ''type' will result in an error on
   * creation.
   */
  validators?: Maybe<Array<Maybe<WorkflowContractClauseValidatorInput>>>;
};

export type WorkflowContractClauseStringEnumValidator = WorkflowContractClauseValidator & {
  __typename?: 'WorkflowContractClauseStringEnumValidator';
  type: WorkflowContractClauseValidatorType;
  enums: Array<Scalars['String']>;
};

export enum WorkflowContractClauseType {
  String = 'string',
  Integer = 'integer',
  Boolean = 'boolean',
  Float = 'float',
  ListOfString = 'list_of_string',
  ListOfInteger = 'list_of_integer',
  ListOfBoolean = 'list_of_boolean',
  ListOfFloat = 'list_of_float'
}

/**
 * ### WORKFLOWS ####
 * Contract Inputs/Types
 */
export type WorkflowContractClauseValidator = {
  /**   incase the client wants to use these types, to match with validator inputs */
  type: WorkflowContractClauseValidatorType;
};

export type WorkflowContractClauseValidatorInput = {
  /**   Inputs will be validated based on the type discriminator */
  type: WorkflowContractClauseValidatorType;
  /**   string_enum */
  enums?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**   boolean_value */
  boolean?: Maybe<Scalars['Boolean']>;
};

export enum WorkflowContractClauseValidatorType {
  StringEnum = 'string_enum',
  BooleanValue = 'boolean_value'
}

export type WorkflowContractCustomTemplate = WorkflowContractTemplate & {
  __typename?: 'WorkflowContractCustomTemplate';
  type: WorkflowContractTemplateType;
  params?: Maybe<Scalars['AWSJSON']>;
};

export type WorkflowContractFileUploadTemplate = WorkflowContractTemplate & {
  __typename?: 'WorkflowContractFileUploadTemplate';
  type: WorkflowContractTemplateType;
  mutation: Scalars['String'];
};

export type WorkflowContractHttpTemplate = WorkflowContractTemplate & {
  __typename?: 'WorkflowContractHttpTemplate';
  type: WorkflowContractTemplateType;
  http_method: HttpMethod;
  http_path: Scalars['String'];
  http_host?: Maybe<Scalars['String']>;
  http_parameters?: Maybe<Array<Maybe<Scalars['String']>>>;
  http_body?: Maybe<Scalars['String']>;
};

export type WorkflowContractInput = {
  name: Scalars['String'];
  /**   Dynamic input type */
  template?: Maybe<WorkflowContractTemplateInput>;
  /**   Defaults to false */
  required?: Maybe<Scalars['Boolean']>;
  /**   Defaults to true */
  resubmission_allowed?: Maybe<Scalars['Boolean']>;
  /**   Defaults to true */
  merge_resubmissions?: Maybe<Scalars['Boolean']>;
  /**
   *  Defaults to false.
   * If set to true, resubmission_allowed is always true and merge_resubmissions is always false
   */
  accumulate?: Maybe<Scalars['Boolean']>;
  /**   Should only be passed for the 'custom' contract template type */
  contract_clauses?: Maybe<Array<Maybe<WorkflowContractClauseInput>>>;
};

export type WorkflowContractTemplate = {
  type: WorkflowContractTemplateType;
};

export type WorkflowContractTemplateInput = {
  /**   Inputs will be validated against the corresponding 'type' identifier */
  type: WorkflowContractTemplateType;
  /**   Custom */
  params?: Maybe<Scalars['AWSJSON']>;
  /**   HTTP Template Params */
  http_method?: Maybe<HttpMethod>;
  http_path?: Maybe<Scalars['String']>;
  http_host?: Maybe<Scalars['String']>;
  http_parameters?: Maybe<Array<Maybe<Scalars['String']>>>;
  http_body?: Maybe<Scalars['String']>;
};

export enum WorkflowContractTemplateType {
  Custom = 'custom',
  Http = 'http',
  FileUpload = 'file_upload'
}

export type WorkflowDefinition = WorkflowProcessDefinition & {
  __typename?: 'WorkflowDefinition';
  /**   Document Fields */
  arcus_id: DocumentId;
  tenant_id: Scalars['ID'];
  created_by?: Maybe<Scalars['ID']>;
  created_at: Scalars['String'];
  updated_by?: Maybe<Scalars['ID']>;
  updated_at: Scalars['String'];
  source?: Maybe<Scalars['String']>;
  deleted_at?: Maybe<Scalars['String']>;
  /**   Process Definition fields */
  name: Scalars['String'];
  description: Scalars['String'];
  raci_array?: Maybe<RaciArray>;
  definition_type: WorkflowProcessDefinitionType;
  context?: Maybe<WorkflowContext>;
  context_views?: Maybe<Array<Maybe<WorkflowContextView>>>;
  template: WorkflowTemplate;
};

export type WorkflowDefinitionInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  raci_array?: Maybe<RaciArrayInput>;
  context?: Maybe<WorkflowContextInput>;
  template?: Maybe<WorkflowTemplateInput>;
};

/**   A union representing the different types of definitions */
export type WorkflowProcessDefinition = {
  name: Scalars['String'];
  description: Scalars['String'];
  raci_array?: Maybe<RaciArray>;
  definition_type: WorkflowProcessDefinitionType;
  context?: Maybe<WorkflowContext>;
  context_views?: Maybe<Array<Maybe<WorkflowContextView>>>;
  /**
   *  Standard Document Fields
   * Arcus ID
   */
  arcus_id: DocumentId;
  /**   The GlideCloud Tenant ID which "owns" this document */
  tenant_id: Scalars['ID'];
  /**   Identifying a GlideCloud Principle */
  created_by?: Maybe<Scalars['ID']>;
  /**   Date of creation */
  created_at: Scalars['String'];
  /**   Identifying a GlideCloud Principle */
  updated_by?: Maybe<Scalars['ID']>;
  /**   DateTime of last update */
  updated_at: Scalars['String'];
  /**   A source string, for deriving an update */
  source?: Maybe<Scalars['String']>;
  /**   Only present if accessing a soft-deleted document */
  deleted_at?: Maybe<Scalars['String']>;
};

export type WorkflowProcessDefinitionId = {
  __typename?: 'WorkflowProcessDefinitionID';
  id: DocumentId;
  definition_type?: Maybe<WorkflowProcessDefinitionType>;
};

export type WorkflowProcessDefinitionIdInput = {
  id: Scalars['ID'];
  definition_type: WorkflowProcessDefinitionType;
};

export type WorkflowProcessDefinitionTree = {
  __typename?: 'WorkflowProcessDefinitionTree';
  definition?: Maybe<WorkflowProcessDefinition>;
  children: Array<Maybe<WorkflowProcessDefinitionTree>>;
};

export enum WorkflowProcessDefinitionType {
  Workflows = 'workflows',
  Steps = 'steps'
}

export type WorkflowRaciNotificationTemplateReference = {
  __typename?: 'WorkflowRaciNotificationTemplateReference';
  template_id: DocumentId;
  extra_params: Scalars['AWSJSON'];
};

export type WorkflowRaciNotificationTemplateReferenceInput = {
  template_id: Scalars['ID'];
  extra_params?: Maybe<Scalars['AWSJSON']>;
};

export type WorkflowRaciNotificationTemplates = {
  __typename?: 'WorkflowRaciNotificationTemplates';
  started: Array<Maybe<WorkflowRaciNotificationTemplateReference>>;
  completed: Array<Maybe<WorkflowRaciNotificationTemplateReference>>;
  paused: Array<Maybe<WorkflowRaciNotificationTemplateReference>>;
  cancelled: Array<Maybe<WorkflowRaciNotificationTemplateReference>>;
};

export type WorkflowRaciNotificationTemplatesInput = {
  started?: Maybe<Array<Maybe<WorkflowRaciNotificationTemplateReferenceInput>>>;
  completed?: Maybe<Array<Maybe<WorkflowRaciNotificationTemplateReferenceInput>>>;
  paused?: Maybe<Array<Maybe<WorkflowRaciNotificationTemplateReferenceInput>>>;
  cancelled?: Maybe<Array<Maybe<WorkflowRaciNotificationTemplateReferenceInput>>>;
};

export enum WorkflowStepCompletionTrigger {
  Manual = 'manual',
  RequiredCompletionContracts = 'required_completion_contracts'
}

export type WorkflowStepContractIdInput = {
  stepId: Scalars['ID'];
  contractName: Scalars['String'];
  contract_type: WorkflowStepContractType;
};

/**
 *  The name of the contract (always unique within a step), its `type`, and the
 * parameters map to submit for the contract. Each key in the parameters map is the
 * `name` of one of the contract's clauses (always unique within a contract).
 */
export type WorkflowStepContractSubmitInput = {
  name: Scalars['String'];
  parameters: Scalars['AWSJSON'];
  contract_type: WorkflowStepContractType;
};

export enum WorkflowStepContractType {
  Completion = 'completion',
  Startup = 'startup'
}

export type WorkflowStepDefinition = WorkflowProcessDefinition & {
  __typename?: 'WorkflowStepDefinition';
  /**   Document Fields */
  arcus_id: DocumentId;
  tenant_id: Scalars['ID'];
  created_by?: Maybe<Scalars['ID']>;
  created_at: Scalars['String'];
  updated_by?: Maybe<Scalars['ID']>;
  updated_at: Scalars['String'];
  source?: Maybe<Scalars['String']>;
  deleted_at?: Maybe<Scalars['String']>;
  /**   Process Definition fields */
  name: Scalars['String'];
  description: Scalars['String'];
  raci_array?: Maybe<RaciArray>;
  definition_type: WorkflowProcessDefinitionType;
  context?: Maybe<WorkflowContext>;
  context_views?: Maybe<Array<Maybe<WorkflowContextView>>>;
  /**
   *  Step-specific fields
   * Triggers describe how & when a Step should start & complete
   */
  startup_triggers: Array<WorkflowStepStartupTrigger>;
  completion_triggers: Array<WorkflowStepCompletionTrigger>;
  /**   Contracts describe data inputs that might be required for completing the step */
  startup_contracts: Array<Maybe<WorkflowContract>>;
  completion_contracts: Array<Maybe<WorkflowContract>>;
};

/**
 *  Supports partial inputs for updates, i.e. fields that are not desired
 * to be updated can not be set in the mutation.
 * However this means that GraphQL types might not reflect required inputs
 * for creating a Workflow Step Definition.
 */
export type WorkflowStepDefinitionInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  context?: Maybe<WorkflowContextInput>;
  raci_array?: Maybe<RaciArrayInput>;
  startup_triggers?: Maybe<Array<Maybe<WorkflowStepStartupTrigger>>>;
  completion_triggers?: Maybe<Array<Maybe<WorkflowStepCompletionTrigger>>>;
  /**
   *  Contract Names must be unique in any list of Contracts
   * Contracts can be partially updated, e.g. if the step has
   * 3 contracts, then [{"name":"contract1"},{"name":"contract2","required":true}]
   * will ensure that 'contract1' is left unchanged whereas 'contract2' sets "required" to true
   */
  startup_contracts?: Maybe<Array<Maybe<WorkflowContractInput>>>;
  completion_contracts?: Maybe<Array<Maybe<WorkflowContractInput>>>;
};

export enum WorkflowStepStartupTrigger {
  Manual = 'manual',
  RequiredStartupContracts = 'required_startup_contracts'
}

export type WorkflowTemplate = {
  type: WorkflowTemplateType;
};

export type WorkflowTemplateInput = {
  type: WorkflowTemplateType;
  manual_steps?: Maybe<WorkflowTemplateManualStepsInput>;
};

export type WorkflowTemplateManualSteps = WorkflowTemplate & {
  __typename?: 'WorkflowTemplateManualSteps';
  type: WorkflowTemplateType;
  child_identifiers: Array<WorkflowProcessDefinitionId>;
};

export type WorkflowTemplateManualStepsInput = {
  child_identifiers: Array<WorkflowProcessDefinitionIdInput>;
};

export enum WorkflowTemplateType {
  ManualSteps = 'manual_steps'
}

export type WorkflowTree = {
  __typename?: 'WorkflowTree';
  /**   Same as WorkflowProcessDefinitionTree */
  definition: WorkflowProcessDefinition;
  children: Array<Maybe<WorkflowTree>>;
  id: Scalars['ID'];
  root_id: Scalars['ID'];
  parent_id?: Maybe<Scalars['ID']>;
  raci_array?: Maybe<RaciArray>;
  raci_mappings: Array<Maybe<RaciArrayRoleMapping>>;
  projections: Scalars['AWSJSON'];
  state: WorkflowTreeState;
  state_history: Array<WorkflowTreeState>;
};

export type WorkflowTreeAggregationInput = {
  /**   A unique, client-provided name to correlate results */
  name: Scalars['String'];
  /**   The kind of aggregation to use */
  kind: WorkflowTreeAggregationType;
  /**   Should be provided if the 'kind' option has extra config options */
  config?: Maybe<Scalars['AWSJSON']>;
};

export enum WorkflowTreeAggregationType {
  CurrentState = 'current_state'
}

export type WorkflowTreeSearchPage = {
  __typename?: 'WorkflowTreeSearchPage';
  data: Array<Maybe<WorkflowTree>>;
  /**
   *  Cursor to pass in the QueryInput for the next page of results.
   * The exact same query must be passed except for the cursor in
   * order for pagination to work as expected.
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   *  A map of aggregation name to Elasticsearch aggregations.
   * At time of writing this is forwarded directly from the Elasticsearch API..
   * The service should likely formalize this type at some point
   * for better dev UX.
   */
  aggregations?: Maybe<Scalars['AWSJSON']>;
};

export type WorkflowTreeSearchQueryInput = {
  /**   Defaults to all states, unless list is provided */
  states?: Maybe<Array<Maybe<WorkflowTreeState>>>;
  /**   Load Trees that were initialized from a specific Definition */
  definition_ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**   Search for WorkflowTrees of a specific process type. */
  definition_types?: Maybe<Array<Maybe<WorkflowProcessDefinitionType>>>;
  /**   Search for trees with specific roles in their RACI array. */
  raci_role_assignments?: Maybe<Array<Maybe<WorkflowTreeSearchRaciRoleAssignmentInput>>>;
  /**   Search for trees that have been assigned to specific principles. */
  raci_mapping_assignments?: Maybe<Array<Maybe<WorkflowTreeSearchRaciMappingAssignmentInput>>>;
  /**
   *  Indicates whether the trees should be loaded recursively.
   * Note that this does NOT apply to the search query itself
   * and is only a convenience for loading full trees in the matches.
   */
  recursive?: Maybe<Scalars['Boolean']>;
  /**   !!! DEPRECATED !!! Prefer using `sort`. */
  sort_by?: Maybe<WorkflowTreeSearchQuerySortBy>;
  /**   !!! DEPRECATED !!! Prefer using `sort`. */
  order?: Maybe<WorkflowTreeSearchQueryOrder>;
  /**
   *  Sort the output by custom parameters. Each subsequent element
   * of the given list is a tiebreaker for the previous element.
   * Takes precedence if set with deprecated `sort_by` and `order` fields.
   * Defaults to `[{field: updated_at, order: desc}]`
   */
  sort?: Maybe<Array<Maybe<WorkflowTreeSearchSortInput>>>;
  /**   The number of WorkflowTrees to return, defaults to 10 */
  limit?: Maybe<Scalars['Int']>;
  /**   Used to paginate results */
  cursor?: Maybe<Scalars['String']>;
  /**
   *  Aggregation API
   * Any search with at least one aggregation will return 0 hits
   */
  aggs?: Maybe<Array<Maybe<WorkflowTreeAggregationInput>>>;
};

export enum WorkflowTreeSearchQueryOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export enum WorkflowTreeSearchQuerySortBy {
  UpdatedAt = 'updated_at',
  State = 'state'
}

export type WorkflowTreeSearchRaciMappingAssignmentInput = {
  /**   Search for workflows with the given principle IDs assigned. */
  principle_ids: Array<Scalars['ID']>;
  /**
   *  Narrow down the search by looking for specific roles the
   * given principle IDs have been assigned to.
   */
  role_names?: Maybe<Array<Scalars['String']>>;
};

export type WorkflowTreeSearchRaciRoleAssignmentInput = {
  /**
   *  Role names that have been assigned to any of
   * the given RACI roles.
   */
  role_names: Array<Scalars['String']>;
  /**   Defaults to all roles if not set. */
  raci_roles?: Maybe<Array<RaciRole>>;
};

export type WorkflowTreeSearchSortInput = {
  field: WorkflowTreeSearchQuerySortBy;
  order: WorkflowTreeSearchQueryOrder;
};

export enum WorkflowTreeState {
  Stopped = 'stopped',
  Completed = 'completed',
  Cancelled = 'cancelled',
  Initialized = 'initialized',
  Waiting = 'waiting',
  Started = 'started',
  Paused = 'paused'
}

export type CommentCreateOrUpdateMutationVariables = Exact<{
  input?: Maybe<CommentInput>;
}>;


export type CommentCreateOrUpdateMutation = (
  { __typename?: 'Mutation' }
  & { commentCreateOrUpdate?: Maybe<(
    { __typename?: 'CommentResultSuccess' }
    & { comment: (
      { __typename?: 'Comment' }
      & Pick<Comment, 'id' | 'entity_type' | 'entity_id' | 'body' | 'created_at'>
      & { created_by?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'tenantId' | 'email' | 'phone' | 'firstName' | 'lastName'>
        & { organizations?: Maybe<Array<Maybe<(
          { __typename?: 'UserOrganization' }
          & Pick<UserOrganization, 'id' | 'name' | 'subdomain' | 'roles'>
        )>>> }
      )> }
    ) }
  )> }
);

export type ConfirmUserMutationVariables = Exact<{
  userConfirmationInput?: Maybe<UserConfirmationInput>;
}>;


export type ConfirmUserMutation = (
  { __typename?: 'Mutation' }
  & { userManagement?: Maybe<{ __typename?: 'UserRegisterResultSuccess' } | (
    { __typename: 'UserConfirmationResultSuccess' }
    & { userConfirmation: (
      { __typename?: 'UserConfirmation' }
      & Pick<UserConfirmation, 'code' | 'username'>
    ) }
  ) | { __typename?: 'UserConfirmationCodeResendResultSuccess' } | { __typename?: 'UserPasswordResetResultSuccess' } | { __typename?: 'UserAlreadyExistsError' } | { __typename?: 'UserAlreadyConfirmedError' } | (
    { __typename?: 'UserNotFoundError' }
    & Pick<UserNotFoundError, 'message' | 'username'>
  ) | (
    { __typename?: 'CodeMismatchError' }
    & Pick<CodeMismatchError, 'username' | 'code' | 'message'>
  ) | (
    { __typename?: 'NotAuthorizedException' }
    & Pick<NotAuthorizedException, 'message' | 'username'>
  )> }
);

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = (
  { __typename?: 'Query' }
  & { currentUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'email' | 'firstName' | 'id' | 'lastName' | 'phone' | 'tenantId'>
    & { organizations?: Maybe<Array<Maybe<(
      { __typename?: 'UserOrganization' }
      & Pick<UserOrganization, 'id' | 'name' | 'roles' | 'subdomain'>
    )>>> }
  )> }
);

export type FileCreateMutationVariables = Exact<{
  input: FileCreateInput;
}>;


export type FileCreateMutation = (
  { __typename?: 'Mutation' }
  & { fileCreate?: Maybe<(
    { __typename?: 'FileInfo' }
    & Pick<FileInfo, 'type' | 'name' | 'description' | 'url'>
    & { metaFields?: Maybe<Array<Maybe<(
      { __typename?: 'MetaField' }
      & Pick<MetaField, 'name' | 'value'>
    )>>> }
  )> }
);

export type FilesByWorkflowQueryVariables = Exact<{
  workflowId: Scalars['String'];
}>;


export type FilesByWorkflowQuery = (
  { __typename?: 'Query' }
  & { filesByWorkflow?: Maybe<Array<Maybe<(
    { __typename?: 'FileUploadRecord' }
    & Pick<FileUploadRecord, 'id' | 'key' | 'type' | 'name' | 'workflowId' | 'stepId' | 'contractName' | 'url'>
  )>>> }
);

export type IndustriesListQueryVariables = Exact<{ [key: string]: never; }>;


export type IndustriesListQuery = (
  { __typename?: 'Query' }
  & { industriesList?: Maybe<(
    { __typename?: 'IndustriesListResultSuccess' }
    & Pick<IndustriesListResultSuccess, 'nextToken' | 'scannedCount'>
    & { items?: Maybe<Array<Maybe<(
      { __typename?: 'Industry' }
      & Pick<Industry, 'id' | 'name' | 'description'>
    )>>> }
  )> }
);

export type IndustryCreateMutationVariables = Exact<{
  input?: Maybe<IndustryInput>;
}>;


export type IndustryCreateMutation = (
  { __typename?: 'Mutation' }
  & { industryCreate?: Maybe<(
    { __typename?: 'IndustryResultSuccess' }
    & { industry?: Maybe<(
      { __typename?: 'Industry' }
      & Pick<Industry, 'id' | 'name' | 'description'>
    )> }
  )> }
);

export type IndustryRetrieveQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type IndustryRetrieveQuery = (
  { __typename?: 'Query' }
  & { industryRetrieve?: Maybe<(
    { __typename?: 'Industry' }
    & Pick<Industry, 'id' | 'name' | 'description'>
  )> }
);

export type ResetPasswordMutationVariables = Exact<{
  userPasswordResetInput: UserConfirmationInput;
}>;


export type ResetPasswordMutation = (
  { __typename?: 'Mutation' }
  & { userManagement?: Maybe<(
    { __typename: 'UserRegisterResultSuccess' }
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'email' | 'firstName' | 'id' | 'lastName' | 'tenantId' | 'phone'>
      & { organizations?: Maybe<Array<Maybe<(
        { __typename?: 'UserOrganization' }
        & Pick<UserOrganization, 'id' | 'name' | 'roles' | 'subdomain'>
      )>>> }
    ) }
  ) | (
    { __typename: 'UserConfirmationResultSuccess' }
    & { userConfirmation: (
      { __typename?: 'UserConfirmation' }
      & Pick<UserConfirmation, 'code' | 'username'>
    ) }
  ) | (
    { __typename: 'UserConfirmationCodeResendResultSuccess' }
    & { codeDeliveryDetails: (
      { __typename?: 'CodeDeliveryDetails' }
      & Pick<CodeDeliveryDetails, 'attributeName' | 'deliveryMedium' | 'destination'>
    ) }
  ) | (
    { __typename: 'UserPasswordResetResultSuccess' }
    & { codeDeliveryDetails: (
      { __typename?: 'CodeDeliveryDetails' }
      & Pick<CodeDeliveryDetails, 'attributeName' | 'deliveryMedium' | 'destination'>
    ) }
  ) | (
    { __typename?: 'UserAlreadyExistsError' }
    & Pick<UserAlreadyExistsError, 'message' | 'username'>
  ) | (
    { __typename?: 'UserAlreadyConfirmedError' }
    & Pick<UserAlreadyConfirmedError, 'message' | 'username'>
  ) | (
    { __typename?: 'UserNotFoundError' }
    & Pick<UserNotFoundError, 'message' | 'username'>
  ) | (
    { __typename?: 'CodeMismatchError' }
    & Pick<CodeMismatchError, 'username' | 'code' | 'message'>
  ) | (
    { __typename?: 'NotAuthorizedException' }
    & Pick<NotAuthorizedException, 'message' | 'username'>
  )> }
);

export type ServiceLineCreateMutationVariables = Exact<{
  input?: Maybe<ServiceLineInput>;
}>;


export type ServiceLineCreateMutation = (
  { __typename?: 'Mutation' }
  & { serviceLineCreate?: Maybe<(
    { __typename?: 'ServiceLineResultSuccess' }
    & { serviceLine?: Maybe<(
      { __typename?: 'ServiceLine' }
      & Pick<ServiceLine, 'id' | 'industryId' | 'name' | 'description'>
    )> }
  )> }
);

export type ServiceLineRetrieveQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ServiceLineRetrieveQuery = (
  { __typename?: 'Query' }
  & { serviceLineRetrieve?: Maybe<(
    { __typename?: 'ServiceLine' }
    & Pick<ServiceLine, 'id' | 'industryId' | 'name' | 'description'>
  )> }
);

export type ServiceLinesListQueryVariables = Exact<{ [key: string]: never; }>;


export type ServiceLinesListQuery = (
  { __typename?: 'Query' }
  & { serviceLinesList?: Maybe<(
    { __typename?: 'ServiceLinesListResultSuccess' }
    & Pick<ServiceLinesListResultSuccess, 'nextToken' | 'scannedCount'>
    & { items: Array<Maybe<(
      { __typename?: 'ServiceLine' }
      & Pick<ServiceLine, 'id' | 'industryId' | 'name' | 'description'>
    )>> }
  )> }
);

export type SiteCreateMutationVariables = Exact<{
  input?: Maybe<SiteInput>;
}>;


export type SiteCreateMutation = (
  { __typename?: 'Mutation' }
  & { siteCreate?: Maybe<(
    { __typename?: 'SiteResultSuccess' }
    & { site: (
      { __typename?: 'Site' }
      & Pick<Site, 'id' | 'name'>
      & { address?: Maybe<(
        { __typename?: 'Address' }
        & Pick<Address, 'street' | 'locality' | 'region' | 'postalCode' | 'country'>
      )>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'latitude' | 'longitude' | 'altitude'>
      )> }
    ) }
  )> }
);

export type SitesListQueryVariables = Exact<{ [key: string]: never; }>;


export type SitesListQuery = (
  { __typename?: 'Query' }
  & { sitesList?: Maybe<(
    { __typename?: 'SitesListResultSuccess' }
    & Pick<SitesListResultSuccess, 'nextToken' | 'scannedCount'>
    & { items?: Maybe<Array<Maybe<(
      { __typename?: 'Site' }
      & Pick<Site, 'id' | 'name'>
      & { address?: Maybe<(
        { __typename?: 'Address' }
        & Pick<Address, 'street' | 'locality' | 'region' | 'postalCode' | 'country'>
      )>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'latitude' | 'longitude' | 'altitude'>
      )> }
    )>>> }
  )> }
);

export type TaskCreateMutationVariables = Exact<{
  input?: Maybe<TaskInput>;
}>;


export type TaskCreateMutation = (
  { __typename?: 'Mutation' }
  & { taskCreate?: Maybe<(
    { __typename?: 'TaskResultSuccess' }
    & { task?: Maybe<(
      { __typename?: 'Task' }
      & Pick<Task, 'id' | 'sequence' | 'name' | 'type' | 'priority' | 'description'>
      & { serviceLine?: Maybe<(
        { __typename?: 'ServiceLine' }
        & Pick<ServiceLine, 'id' | 'industryId' | 'name' | 'description'>
      )>, subjects?: Maybe<Array<Maybe<(
        { __typename?: 'Site' }
        & Pick<Site, 'id' | 'name'>
        & { address?: Maybe<(
          { __typename?: 'Address' }
          & Pick<Address, 'street' | 'locality' | 'region' | 'postalCode' | 'country'>
        )>, position?: Maybe<(
          { __typename?: 'Position' }
          & Pick<Position, 'latitude' | 'longitude' | 'altitude'>
        )> }
      )>>>, workflow?: Maybe<(
        { __typename?: 'TaskWorkflow' }
        & Pick<TaskWorkflow, 'id' | 'stepId'>
      )> }
    )> }
  )> }
);

export type TasksListQueryVariables = Exact<{ [key: string]: never; }>;


export type TasksListQuery = (
  { __typename?: 'Query' }
  & { tasksList?: Maybe<(
    { __typename?: 'TasksListResultSuccess' }
    & Pick<TasksListResultSuccess, 'nextToken' | 'scannedCount'>
    & { items: Array<Maybe<(
      { __typename?: 'Task' }
      & Pick<Task, 'id' | 'sequence' | 'name' | 'type' | 'priority' | 'description'>
      & { serviceLine?: Maybe<(
        { __typename?: 'ServiceLine' }
        & Pick<ServiceLine, 'id' | 'industryId' | 'name' | 'description'>
      )>, subjects?: Maybe<Array<Maybe<(
        { __typename?: 'Site' }
        & Pick<Site, 'id' | 'name'>
        & { address?: Maybe<(
          { __typename?: 'Address' }
          & Pick<Address, 'street' | 'locality' | 'region' | 'postalCode' | 'country'>
        )>, position?: Maybe<(
          { __typename?: 'Position' }
          & Pick<Position, 'latitude' | 'longitude' | 'altitude'>
        )> }
      )>>>, workflow?: Maybe<(
        { __typename?: 'TaskWorkflow' }
        & Pick<TaskWorkflow, 'id' | 'stepId'>
      )> }
    )>> }
  )> }
);

export type RegisterUserMutationVariables = Exact<{
  userRegisterInput: UserRegisterInput;
}>;


export type RegisterUserMutation = (
  { __typename?: 'Mutation' }
  & { userManagement?: Maybe<(
    { __typename?: 'UserRegisterResultSuccess' }
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'tenantId' | 'email' | 'phone' | 'firstName' | 'lastName'>
      & { organizations?: Maybe<Array<Maybe<(
        { __typename?: 'UserOrganization' }
        & Pick<UserOrganization, 'id' | 'name' | 'subdomain' | 'roles'>
      )>>> }
    ) }
  ) | { __typename?: 'UserConfirmationResultSuccess' } | { __typename?: 'UserConfirmationCodeResendResultSuccess' } | { __typename?: 'UserPasswordResetResultSuccess' } | (
    { __typename?: 'UserAlreadyExistsError' }
    & Pick<UserAlreadyExistsError, 'message' | 'username'>
  ) | { __typename?: 'UserAlreadyConfirmedError' } | { __typename?: 'UserNotFoundError' } | { __typename?: 'CodeMismatchError' } | (
    { __typename?: 'NotAuthorizedException' }
    & Pick<NotAuthorizedException, 'message' | 'username'>
  )> }
);


export const CommentCreateOrUpdateDocument = gql`
    mutation CommentCreateOrUpdate($input: CommentInput) {
  commentCreateOrUpdate(input: $input) {
    comment {
      id
      entity_type
      entity_id
      body
      created_at
      created_by {
        id
        tenantId
        email
        phone
        firstName
        lastName
        organizations {
          id
          name
          subdomain
          roles
        }
      }
    }
  }
}
    `;
export type CommentCreateOrUpdateMutationFn = Apollo.MutationFunction<CommentCreateOrUpdateMutation, CommentCreateOrUpdateMutationVariables>;

/**
 * __useCommentCreateOrUpdateMutation__
 *
 * To run a mutation, you first call `useCommentCreateOrUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCommentCreateOrUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [commentCreateOrUpdateMutation, { data, loading, error }] = useCommentCreateOrUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCommentCreateOrUpdateMutation(baseOptions?: Apollo.MutationHookOptions<CommentCreateOrUpdateMutation, CommentCreateOrUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CommentCreateOrUpdateMutation, CommentCreateOrUpdateMutationVariables>(CommentCreateOrUpdateDocument, options);
      }
export type CommentCreateOrUpdateMutationHookResult = ReturnType<typeof useCommentCreateOrUpdateMutation>;
export type CommentCreateOrUpdateMutationResult = Apollo.MutationResult<CommentCreateOrUpdateMutation>;
export type CommentCreateOrUpdateMutationOptions = Apollo.BaseMutationOptions<CommentCreateOrUpdateMutation, CommentCreateOrUpdateMutationVariables>;
export const ConfirmUserDocument = gql`
    mutation ConfirmUser($userConfirmationInput: UserConfirmationInput) {
  userManagement(userConfirmationInput: $userConfirmationInput) {
    ... on UserConfirmationResultSuccess {
      __typename
      userConfirmation {
        code
        username
      }
    }
    ... on CodeMismatchError {
      username
      code
      message
    }
    ... on UserNotFoundError {
      message
      username
    }
    ... on NotAuthorizedException {
      message
      username
    }
  }
}
    `;
export type ConfirmUserMutationFn = Apollo.MutationFunction<ConfirmUserMutation, ConfirmUserMutationVariables>;

/**
 * __useConfirmUserMutation__
 *
 * To run a mutation, you first call `useConfirmUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmUserMutation, { data, loading, error }] = useConfirmUserMutation({
 *   variables: {
 *      userConfirmationInput: // value for 'userConfirmationInput'
 *   },
 * });
 */
export function useConfirmUserMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmUserMutation, ConfirmUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfirmUserMutation, ConfirmUserMutationVariables>(ConfirmUserDocument, options);
      }
export type ConfirmUserMutationHookResult = ReturnType<typeof useConfirmUserMutation>;
export type ConfirmUserMutationResult = Apollo.MutationResult<ConfirmUserMutation>;
export type ConfirmUserMutationOptions = Apollo.BaseMutationOptions<ConfirmUserMutation, ConfirmUserMutationVariables>;
export const CurrentUserDocument = gql`
    query CurrentUser {
  currentUser {
    email
    firstName
    id
    lastName
    phone
    tenantId
    organizations {
      id
      name
      roles
      subdomain
    }
  }
}
    `;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const FileCreateDocument = gql`
    mutation FileCreate($input: FileCreateInput!) {
  fileCreate(input: $input) {
    type
    name
    description
    url
    metaFields {
      name
      value
    }
  }
}
    `;
export type FileCreateMutationFn = Apollo.MutationFunction<FileCreateMutation, FileCreateMutationVariables>;

/**
 * __useFileCreateMutation__
 *
 * To run a mutation, you first call `useFileCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFileCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [fileCreateMutation, { data, loading, error }] = useFileCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFileCreateMutation(baseOptions?: Apollo.MutationHookOptions<FileCreateMutation, FileCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FileCreateMutation, FileCreateMutationVariables>(FileCreateDocument, options);
      }
export type FileCreateMutationHookResult = ReturnType<typeof useFileCreateMutation>;
export type FileCreateMutationResult = Apollo.MutationResult<FileCreateMutation>;
export type FileCreateMutationOptions = Apollo.BaseMutationOptions<FileCreateMutation, FileCreateMutationVariables>;
export const FilesByWorkflowDocument = gql`
    query FilesByWorkflow($workflowId: String!) {
  filesByWorkflow(workflowId: $workflowId) {
    id
    key
    type
    name
    workflowId
    stepId
    contractName
    url
  }
}
    `;

/**
 * __useFilesByWorkflowQuery__
 *
 * To run a query within a React component, call `useFilesByWorkflowQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilesByWorkflowQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilesByWorkflowQuery({
 *   variables: {
 *      workflowId: // value for 'workflowId'
 *   },
 * });
 */
export function useFilesByWorkflowQuery(baseOptions: Apollo.QueryHookOptions<FilesByWorkflowQuery, FilesByWorkflowQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FilesByWorkflowQuery, FilesByWorkflowQueryVariables>(FilesByWorkflowDocument, options);
      }
export function useFilesByWorkflowLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FilesByWorkflowQuery, FilesByWorkflowQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FilesByWorkflowQuery, FilesByWorkflowQueryVariables>(FilesByWorkflowDocument, options);
        }
export type FilesByWorkflowQueryHookResult = ReturnType<typeof useFilesByWorkflowQuery>;
export type FilesByWorkflowLazyQueryHookResult = ReturnType<typeof useFilesByWorkflowLazyQuery>;
export type FilesByWorkflowQueryResult = Apollo.QueryResult<FilesByWorkflowQuery, FilesByWorkflowQueryVariables>;
export const IndustriesListDocument = gql`
    query IndustriesList {
  industriesList {
    items {
      ... on Industry {
        id
        name
        description
      }
    }
    nextToken
    scannedCount
  }
}
    `;

/**
 * __useIndustriesListQuery__
 *
 * To run a query within a React component, call `useIndustriesListQuery` and pass it any options that fit your needs.
 * When your component renders, `useIndustriesListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIndustriesListQuery({
 *   variables: {
 *   },
 * });
 */
export function useIndustriesListQuery(baseOptions?: Apollo.QueryHookOptions<IndustriesListQuery, IndustriesListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IndustriesListQuery, IndustriesListQueryVariables>(IndustriesListDocument, options);
      }
export function useIndustriesListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IndustriesListQuery, IndustriesListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IndustriesListQuery, IndustriesListQueryVariables>(IndustriesListDocument, options);
        }
export type IndustriesListQueryHookResult = ReturnType<typeof useIndustriesListQuery>;
export type IndustriesListLazyQueryHookResult = ReturnType<typeof useIndustriesListLazyQuery>;
export type IndustriesListQueryResult = Apollo.QueryResult<IndustriesListQuery, IndustriesListQueryVariables>;
export const IndustryCreateDocument = gql`
    mutation IndustryCreate($input: IndustryInput) {
  industryCreate(input: $input) {
    industry {
      id
      name
      description
    }
  }
}
    `;
export type IndustryCreateMutationFn = Apollo.MutationFunction<IndustryCreateMutation, IndustryCreateMutationVariables>;

/**
 * __useIndustryCreateMutation__
 *
 * To run a mutation, you first call `useIndustryCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useIndustryCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [industryCreateMutation, { data, loading, error }] = useIndustryCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useIndustryCreateMutation(baseOptions?: Apollo.MutationHookOptions<IndustryCreateMutation, IndustryCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<IndustryCreateMutation, IndustryCreateMutationVariables>(IndustryCreateDocument, options);
      }
export type IndustryCreateMutationHookResult = ReturnType<typeof useIndustryCreateMutation>;
export type IndustryCreateMutationResult = Apollo.MutationResult<IndustryCreateMutation>;
export type IndustryCreateMutationOptions = Apollo.BaseMutationOptions<IndustryCreateMutation, IndustryCreateMutationVariables>;
export const IndustryRetrieveDocument = gql`
    query IndustryRetrieve($id: ID!) {
  industryRetrieve(id: $id) {
    id
    name
    description
  }
}
    `;

/**
 * __useIndustryRetrieveQuery__
 *
 * To run a query within a React component, call `useIndustryRetrieveQuery` and pass it any options that fit your needs.
 * When your component renders, `useIndustryRetrieveQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIndustryRetrieveQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useIndustryRetrieveQuery(baseOptions: Apollo.QueryHookOptions<IndustryRetrieveQuery, IndustryRetrieveQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IndustryRetrieveQuery, IndustryRetrieveQueryVariables>(IndustryRetrieveDocument, options);
      }
export function useIndustryRetrieveLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IndustryRetrieveQuery, IndustryRetrieveQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IndustryRetrieveQuery, IndustryRetrieveQueryVariables>(IndustryRetrieveDocument, options);
        }
export type IndustryRetrieveQueryHookResult = ReturnType<typeof useIndustryRetrieveQuery>;
export type IndustryRetrieveLazyQueryHookResult = ReturnType<typeof useIndustryRetrieveLazyQuery>;
export type IndustryRetrieveQueryResult = Apollo.QueryResult<IndustryRetrieveQuery, IndustryRetrieveQueryVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($userPasswordResetInput: UserConfirmationInput!) {
  userManagement(userPasswordResetInput: $userPasswordResetInput) {
    ... on UserPasswordResetResultSuccess {
      __typename
      codeDeliveryDetails {
        attributeName
        deliveryMedium
        destination
      }
    }
    ... on UserRegisterResultSuccess {
      __typename
      user {
        email
        firstName
        id
        lastName
        tenantId
        phone
        organizations {
          id
          name
          roles
          subdomain
        }
      }
    }
    ... on UserConfirmationResultSuccess {
      __typename
      userConfirmation {
        code
        username
      }
    }
    ... on UserConfirmationCodeResendResultSuccess {
      __typename
      codeDeliveryDetails {
        attributeName
        deliveryMedium
        destination
      }
    }
    ... on UserNotFoundError {
      message
      username
    }
    ... on NotAuthorizedException {
      message
      username
    }
    ... on CodeMismatchError {
      username
      code
      message
    }
    ... on UserAlreadyExistsError {
      message
      username
    }
    ... on UserAlreadyConfirmedError {
      message
      username
    }
  }
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      userPasswordResetInput: // value for 'userPasswordResetInput'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const ServiceLineCreateDocument = gql`
    mutation serviceLineCreate($input: ServiceLineInput) {
  serviceLineCreate(input: $input) {
    serviceLine {
      id
      industryId
      name
      description
    }
  }
}
    `;
export type ServiceLineCreateMutationFn = Apollo.MutationFunction<ServiceLineCreateMutation, ServiceLineCreateMutationVariables>;

/**
 * __useServiceLineCreateMutation__
 *
 * To run a mutation, you first call `useServiceLineCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useServiceLineCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [serviceLineCreateMutation, { data, loading, error }] = useServiceLineCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useServiceLineCreateMutation(baseOptions?: Apollo.MutationHookOptions<ServiceLineCreateMutation, ServiceLineCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ServiceLineCreateMutation, ServiceLineCreateMutationVariables>(ServiceLineCreateDocument, options);
      }
export type ServiceLineCreateMutationHookResult = ReturnType<typeof useServiceLineCreateMutation>;
export type ServiceLineCreateMutationResult = Apollo.MutationResult<ServiceLineCreateMutation>;
export type ServiceLineCreateMutationOptions = Apollo.BaseMutationOptions<ServiceLineCreateMutation, ServiceLineCreateMutationVariables>;
export const ServiceLineRetrieveDocument = gql`
    query ServiceLineRetrieve($id: ID!) {
  serviceLineRetrieve(id: $id) {
    id
    industryId
    name
    description
  }
}
    `;

/**
 * __useServiceLineRetrieveQuery__
 *
 * To run a query within a React component, call `useServiceLineRetrieveQuery` and pass it any options that fit your needs.
 * When your component renders, `useServiceLineRetrieveQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useServiceLineRetrieveQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useServiceLineRetrieveQuery(baseOptions: Apollo.QueryHookOptions<ServiceLineRetrieveQuery, ServiceLineRetrieveQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ServiceLineRetrieveQuery, ServiceLineRetrieveQueryVariables>(ServiceLineRetrieveDocument, options);
      }
export function useServiceLineRetrieveLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ServiceLineRetrieveQuery, ServiceLineRetrieveQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ServiceLineRetrieveQuery, ServiceLineRetrieveQueryVariables>(ServiceLineRetrieveDocument, options);
        }
export type ServiceLineRetrieveQueryHookResult = ReturnType<typeof useServiceLineRetrieveQuery>;
export type ServiceLineRetrieveLazyQueryHookResult = ReturnType<typeof useServiceLineRetrieveLazyQuery>;
export type ServiceLineRetrieveQueryResult = Apollo.QueryResult<ServiceLineRetrieveQuery, ServiceLineRetrieveQueryVariables>;
export const ServiceLinesListDocument = gql`
    query ServiceLinesList {
  serviceLinesList {
    items {
      ... on ServiceLine {
        id
        industryId
        name
        description
      }
    }
    nextToken
    scannedCount
  }
}
    `;

/**
 * __useServiceLinesListQuery__
 *
 * To run a query within a React component, call `useServiceLinesListQuery` and pass it any options that fit your needs.
 * When your component renders, `useServiceLinesListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useServiceLinesListQuery({
 *   variables: {
 *   },
 * });
 */
export function useServiceLinesListQuery(baseOptions?: Apollo.QueryHookOptions<ServiceLinesListQuery, ServiceLinesListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ServiceLinesListQuery, ServiceLinesListQueryVariables>(ServiceLinesListDocument, options);
      }
export function useServiceLinesListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ServiceLinesListQuery, ServiceLinesListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ServiceLinesListQuery, ServiceLinesListQueryVariables>(ServiceLinesListDocument, options);
        }
export type ServiceLinesListQueryHookResult = ReturnType<typeof useServiceLinesListQuery>;
export type ServiceLinesListLazyQueryHookResult = ReturnType<typeof useServiceLinesListLazyQuery>;
export type ServiceLinesListQueryResult = Apollo.QueryResult<ServiceLinesListQuery, ServiceLinesListQueryVariables>;
export const SiteCreateDocument = gql`
    mutation SiteCreate($input: SiteInput) {
  siteCreate(input: $input) {
    site {
      id
      name
      address {
        street
        locality
        region
        postalCode
        country
      }
      position {
        latitude
        longitude
        altitude
      }
    }
  }
}
    `;
export type SiteCreateMutationFn = Apollo.MutationFunction<SiteCreateMutation, SiteCreateMutationVariables>;

/**
 * __useSiteCreateMutation__
 *
 * To run a mutation, you first call `useSiteCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSiteCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [siteCreateMutation, { data, loading, error }] = useSiteCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSiteCreateMutation(baseOptions?: Apollo.MutationHookOptions<SiteCreateMutation, SiteCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SiteCreateMutation, SiteCreateMutationVariables>(SiteCreateDocument, options);
      }
export type SiteCreateMutationHookResult = ReturnType<typeof useSiteCreateMutation>;
export type SiteCreateMutationResult = Apollo.MutationResult<SiteCreateMutation>;
export type SiteCreateMutationOptions = Apollo.BaseMutationOptions<SiteCreateMutation, SiteCreateMutationVariables>;
export const SitesListDocument = gql`
    query SitesList {
  sitesList {
    items {
      id
      name
      address {
        street
        locality
        region
        postalCode
        country
      }
      position {
        latitude
        longitude
        altitude
      }
    }
    nextToken
    scannedCount
  }
}
    `;

/**
 * __useSitesListQuery__
 *
 * To run a query within a React component, call `useSitesListQuery` and pass it any options that fit your needs.
 * When your component renders, `useSitesListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSitesListQuery({
 *   variables: {
 *   },
 * });
 */
export function useSitesListQuery(baseOptions?: Apollo.QueryHookOptions<SitesListQuery, SitesListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SitesListQuery, SitesListQueryVariables>(SitesListDocument, options);
      }
export function useSitesListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SitesListQuery, SitesListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SitesListQuery, SitesListQueryVariables>(SitesListDocument, options);
        }
export type SitesListQueryHookResult = ReturnType<typeof useSitesListQuery>;
export type SitesListLazyQueryHookResult = ReturnType<typeof useSitesListLazyQuery>;
export type SitesListQueryResult = Apollo.QueryResult<SitesListQuery, SitesListQueryVariables>;
export const TaskCreateDocument = gql`
    mutation TaskCreate($input: TaskInput) {
  taskCreate(input: $input) {
    task {
      id
      sequence
      name
      type
      priority
      serviceLine {
        id
        industryId
        name
        description
      }
      description
      subjects {
        ... on Site {
          id
          name
          address {
            street
            locality
            region
            postalCode
            country
          }
          position {
            latitude
            longitude
            altitude
          }
        }
      }
      workflow {
        id
        stepId
      }
    }
  }
}
    `;
export type TaskCreateMutationFn = Apollo.MutationFunction<TaskCreateMutation, TaskCreateMutationVariables>;

/**
 * __useTaskCreateMutation__
 *
 * To run a mutation, you first call `useTaskCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTaskCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [taskCreateMutation, { data, loading, error }] = useTaskCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useTaskCreateMutation(baseOptions?: Apollo.MutationHookOptions<TaskCreateMutation, TaskCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TaskCreateMutation, TaskCreateMutationVariables>(TaskCreateDocument, options);
      }
export type TaskCreateMutationHookResult = ReturnType<typeof useTaskCreateMutation>;
export type TaskCreateMutationResult = Apollo.MutationResult<TaskCreateMutation>;
export type TaskCreateMutationOptions = Apollo.BaseMutationOptions<TaskCreateMutation, TaskCreateMutationVariables>;
export const TasksListDocument = gql`
    query TasksList {
  tasksList {
    items {
      id
      sequence
      name
      type
      priority
      serviceLine {
        id
        industryId
        name
        description
      }
      description
      subjects {
        ... on Site {
          id
          name
          address {
            street
            locality
            region
            postalCode
            country
          }
          position {
            latitude
            longitude
            altitude
          }
        }
      }
      workflow {
        id
        stepId
      }
    }
    nextToken
    scannedCount
  }
}
    `;

/**
 * __useTasksListQuery__
 *
 * To run a query within a React component, call `useTasksListQuery` and pass it any options that fit your needs.
 * When your component renders, `useTasksListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTasksListQuery({
 *   variables: {
 *   },
 * });
 */
export function useTasksListQuery(baseOptions?: Apollo.QueryHookOptions<TasksListQuery, TasksListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TasksListQuery, TasksListQueryVariables>(TasksListDocument, options);
      }
export function useTasksListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TasksListQuery, TasksListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TasksListQuery, TasksListQueryVariables>(TasksListDocument, options);
        }
export type TasksListQueryHookResult = ReturnType<typeof useTasksListQuery>;
export type TasksListLazyQueryHookResult = ReturnType<typeof useTasksListLazyQuery>;
export type TasksListQueryResult = Apollo.QueryResult<TasksListQuery, TasksListQueryVariables>;
export const RegisterUserDocument = gql`
    mutation RegisterUser($userRegisterInput: UserRegisterInput!) {
  userManagement(userRegisterInput: $userRegisterInput) {
    ... on UserRegisterResultSuccess {
      user {
        id
        tenantId
        email
        phone
        firstName
        lastName
        organizations {
          id
          name
          subdomain
          roles
        }
      }
    }
    ... on NotAuthorizedException {
      message
      username
    }
    ... on UserAlreadyExistsError {
      message
      username
    }
  }
}
    `;
export type RegisterUserMutationFn = Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      userRegisterInput: // value for 'userRegisterInput'
 *   },
 * });
 */
export function useRegisterUserMutation(baseOptions?: Apollo.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, options);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "Asset": [],
    "Error": [
      "CodeMismatchError",
      "NotAuthorizedException",
      "UserAlreadyConfirmedError",
      "UserAlreadyExistsError",
      "UserNotFoundError"
    ],
    "SiteLookupResult": [
      "SiteLookupPositionResults",
      "SiteLookupAddressResults"
    ],
    "TaskSubject": [
      "Site"
    ],
    "UserItf": [
      "User"
    ],
    "UserManagementResult": [
      "UserRegisterResultSuccess",
      "UserConfirmationResultSuccess",
      "UserConfirmationCodeResendResultSuccess",
      "UserPasswordResetResultSuccess",
      "UserAlreadyExistsError",
      "UserAlreadyConfirmedError",
      "UserNotFoundError",
      "CodeMismatchError",
      "NotAuthorizedException"
    ],
    "WorkflowContext": [
      "WorkflowContextBoolean",
      "WorkflowContextInteger",
      "WorkflowContextNested",
      "WorkflowContextString"
    ],
    "WorkflowContextView": [],
    "WorkflowContractClauseValidator": [
      "WorkflowContractClauseBooleanValidator",
      "WorkflowContractClauseStringEnumValidator"
    ],
    "WorkflowContractTemplate": [
      "WorkflowContractCustomTemplate",
      "WorkflowContractFileUploadTemplate",
      "WorkflowContractHttpTemplate"
    ],
    "WorkflowProcessDefinition": [
      "WorkflowDefinition",
      "WorkflowStepDefinition"
    ],
    "WorkflowTemplate": [
      "WorkflowTemplateManualSteps"
    ]
  }
};
      export default result;
    