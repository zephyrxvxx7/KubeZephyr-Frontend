/**
 *
 * @export
 * @interface ResourceQuotaBase
 */
export interface ResourceQuotaBase {
  /**
   *
   * @type {number}
   * @memberof ResourceQuotaBase
   */
  limit_cpu: number;
  /**
   *
   * @type {number}
   * @memberof ResourceQuotaBase
   */
  limit_memory: number;
  /**
   *
   * @type {number}
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
   * @type {number}
   * @memberof ResourceQuotaBase
   */
  request_storage: number;
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
   * @type {number}
   * @memberof ResourceQuotaInUpdate
   */
  limit_cpu?: number;
  /**
   *
   * @type {number}
   * @memberof ResourceQuotaInUpdate
   */
  limit_memory?: number;
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
   * @type {number}
   * @memberof ResourceQuotaInUpdate
   */
  request_storage?: number;
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
