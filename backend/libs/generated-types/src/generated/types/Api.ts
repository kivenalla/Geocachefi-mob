/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface RealApiRegisterDto {
  /** @format email */
  email: string;
  name: string;
  /** @minLength 8 */
  password: string;
}

export interface RealApiLoginDto {
  /** @format email */
  email: string;
  /** @minLength 8 */
  password: string;
}

export interface RealApiUser {
  isGuestUser: boolean;
  isPremiumUser: boolean;
  isAdminUser: boolean;
  id: string;
  email: string;
  name: string;
  passwordHash: string;
  tokenVersion: number;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  roles?: RealApiUserRolesEnum[];
}

export interface RealApiSearchRequestDto {
  filters: object;
  orderBy?: string;
  skip?: number;
  take?: number;
}

export enum RealApiUserRolesEnum {
  GuestUser = "guest_user",
  PremiumUser = "premium_user",
  AdminUser = "admin_user",
  SuperUser = "super_user",
}

export namespace Users {
  /**
   * No description
   * @tags Users
   * @name UsersControllerRegister
   * @request POST:/users/register
   * @response `201` `void`
   */
  export namespace UsersControllerRegister {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RealApiRegisterDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Users
   * @name UsersControllerLogin
   * @request POST:/users/login
   * @response `201` `void`
   */
  export namespace UsersControllerLogin {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RealApiLoginDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Users
   * @name UsersControllerLogout
   * @request POST:/users/logout
   * @secure
   * @response `201` `void`
   */
  export namespace UsersControllerLogout {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Users
   * @name UsersControllerMe
   * @request GET:/users/me
   * @secure
   * @response `200` `RealApiUser`
   */
  export namespace UsersControllerMe {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = RealApiUser;
  }
}

export namespace Geocaches {
  /**
   * No description
   * @tags Geocaches
   * @name GeocachesControllerList
   * @request GET:/geocaches
   * @response `200` `(object)[]`
   */
  export namespace GeocachesControllerList {
    export type RequestParams = {};
    export type RequestQuery = {
      limit: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = object[];
  }

  /**
   * No description
   * @tags Geocaches
   * @name GeocachesControllerGetById
   * @request GET:/geocaches/{id}
   * @response `200` `object`
   */
  export namespace GeocachesControllerGetById {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = object;
  }

  /**
   * No description
   * @tags Geocaches
   * @name GeocachesControllerSearch
   * @request POST:/geocaches/search
   * @response `201` `(object)[]`
   */
  export namespace GeocachesControllerSearch {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RealApiSearchRequestDto;
    export type RequestHeaders = {};
    export type ResponseBody = object[];
  }

  /**
   * No description
   * @tags Geocaches
   * @name GeocachesControllerMapSearch
   * @request POST:/geocaches/mapsearch
   * @response `201` `(object)[]`
   */
  export namespace GeocachesControllerMapSearch {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RealApiSearchRequestDto;
    export type RequestHeaders = {};
    export type ResponseBody = object[];
  }
}

export namespace Oauth {
  /**
   * No description
   * @tags OAuth
   * @name OAuthControllerLogin
   * @request GET:/oauth/authorize
   * @response `200` `void`
   */
  export namespace OAuthControllerLogin {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags OAuth
   * @name OAuthControllerCallback
   * @request GET:/oauth/login
   * @response `200` `void`
   */
  export namespace OAuthControllerCallback {
    export type RequestParams = {};
    export type RequestQuery = {
      code: string;
      state: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags OAuth
   * @name OAuthControllerRefresh
   * @request POST:/oauth/refresh
   * @response `201` `object`
   */
  export namespace OAuthControllerRefresh {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = object;
  }
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key],
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.JsonApi]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) => {
      if (input instanceof FormData) {
        return input;
      }

      return Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData());
    },
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const responseToParse = responseFormat ? response.clone() : response;
      const data = !responseFormat
        ? r
        : await responseToParse[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Geocache api
 * @version 1.0
 * @contact
 *
 * The Geocache api API description
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags App
   * @name AppControllerGetHello
   * @request GET:/
   * @response `200` `string`
   */
  appControllerGetHello = (params: RequestParams = {}) =>
    this.request<string, any>({
      path: `/`,
      method: "GET",
      format: "json",
      ...params,
    });

  users = {
    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerRegister
     * @request POST:/users/register
     * @response `201` `void`
     */
    usersControllerRegister: (
      data: RealApiRegisterDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/users/register`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerLogin
     * @request POST:/users/login
     * @response `201` `void`
     */
    usersControllerLogin: (data: RealApiLoginDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerLogout
     * @request POST:/users/logout
     * @secure
     * @response `201` `void`
     */
    usersControllerLogout: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/logout`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerMe
     * @request GET:/users/me
     * @secure
     * @response `200` `RealApiUser`
     */
    usersControllerMe: (params: RequestParams = {}) =>
      this.request<RealApiUser, any>({
        path: `/users/me`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  geocaches = {
    /**
     * No description
     *
     * @tags Geocaches
     * @name GeocachesControllerList
     * @request GET:/geocaches
     * @response `200` `(object)[]`
     */
    geocachesControllerList: (
      query: {
        limit: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object[], any>({
        path: `/geocaches`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Geocaches
     * @name GeocachesControllerGetById
     * @request GET:/geocaches/{id}
     * @response `200` `object`
     */
    geocachesControllerGetById: (id: string, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/geocaches/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Geocaches
     * @name GeocachesControllerSearch
     * @request POST:/geocaches/search
     * @response `201` `(object)[]`
     */
    geocachesControllerSearch: (
      data: RealApiSearchRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<object[], any>({
        path: `/geocaches/search`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Geocaches
     * @name GeocachesControllerMapSearch
     * @request POST:/geocaches/mapsearch
     * @response `201` `(object)[]`
     */
    geocachesControllerMapSearch: (
      data: RealApiSearchRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<object[], any>({
        path: `/geocaches/mapsearch`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  oauth = {
    /**
     * No description
     *
     * @tags OAuth
     * @name OAuthControllerLogin
     * @request GET:/oauth/authorize
     * @response `200` `void`
     */
    oAuthControllerLogin: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/oauth/authorize`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags OAuth
     * @name OAuthControllerCallback
     * @request GET:/oauth/login
     * @response `200` `void`
     */
    oAuthControllerCallback: (
      query: {
        code: string;
        state: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/oauth/login`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OAuth
     * @name OAuthControllerRefresh
     * @request POST:/oauth/refresh
     * @response `201` `object`
     */
    oAuthControllerRefresh: (params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/oauth/refresh`,
        method: "POST",
        format: "json",
        ...params,
      }),
  };
}
