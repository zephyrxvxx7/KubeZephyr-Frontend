/**
 *
 * @export
 * @interface ResourceQuotaBase
 */
export interface ResourceQuotaBase {
  /**
   *
   * @type {string}
   * @memberof ResourceQuotaBase
   */
  limit_cpu: string;
  /**
   *
   * @type {number}
   * @memberof ResourceQuotaBase
   */
  limit_memory: string;
  /**
   *
   * @type {string}
   * @memberof ResourceQuotaBase
   */
  persistentvolumeclaims: number;
  /**
   *
   * @type {number}
   * @memberof ResourceQuotaBase
   */
  pods: number;
  /**
   *
   * @type {string}
   * @memberof ResourceQuotaBase
   */
  request_storage: string;
}
/**
 *
 * @export
 * @interface ResourceQuotaInResponse
 */
export interface ResourceQuotaInResponse {
  /**
   *
   * @type {ResourceQuotaBase}
   * @memberof ResourceQuotaInResponse
   */
  resource_quota: ResourceQuotaBase;
}
/**
 *
 * @export
 * @interface ResourceQuotaInUpdate
 */
export interface ResourceQuotaInUpdate {
  /**
   *
   * @type {string}
   * @memberof ResourceQuotaInUpdate
   */
  limit_cpu?: string;
  /**
   *
   * @type {string}
   * @memberof ResourceQuotaInUpdate
   */
  limit_memory?: string;
  /**
   *
   * @type {number}
   * @memberof ResourceQuotaInUpdate
   */
  persistentvolumeclaims?: number;
  /**
   *
   * @type {number}
   * @memberof ResourceQuotaInUpdate
   */
  pods?: number;
  /**
   *
   * @type {string}
   * @memberof ResourceQuotaInUpdate
   */
  request_storage?: string;
}
/**
 *
 * @export
 * @interface ResourceUsedInResponse
 */
export interface ResourceUsedInResponse {
  /**
   *
   * @type {ResourceQuotaBase}
   * @memberof ResourceUsedInResponse
   */
  resource_used: ResourceQuotaBase;
}
