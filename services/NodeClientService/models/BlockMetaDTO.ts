/* tslint:disable */
/* eslint-disable */
/**
 * Catapult REST Endpoints
 * OpenAPI Specification of catapult-rest
 *
 * The version of the OpenAPI document: 1.0.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface BlockMetaDTO
 */
export interface BlockMetaDTO {
    /**
     * 
     * @type {string}
     * @memberof BlockMetaDTO
     */
    hash: string;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof BlockMetaDTO
     */
    totalFee: string;
    /**
     * 
     * @type {string}
     * @memberof BlockMetaDTO
     */
    generationHash: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BlockMetaDTO
     */
    stateHashSubCacheMerkleRoots: Array<string>;
    /**
     * Total number of [transactions](https://docs.symbolplatform.com/concepts/transaction.html) confirmed in this block, including *embedded* transactions (i.e. transactions contained within aggregate transactions).
     * 
     * @type {number}
     * @memberof BlockMetaDTO
     */
    totalTransactionsCount: number;
    /**
     * Number of [transactions](https://docs.symbolplatform.com/concepts/transaction.html) confirmed in this block. This does not count *embedded* transactions (i.e. transactions contained within aggregate transactions).
     * 
     * @type {number}
     * @memberof BlockMetaDTO
     */
    transactionsCount: number;
    /**
     * Number of statements (of any kind) present in this block. Bear in mind that some of them (like [resolution statements](https://docs.symbolplatform.com/concepts/receipt.html#resolution-statement)) are triggered by transactions present in the block, but in general, [transaction statements](https://docs.symbolplatform.com/concepts/receipt.html#transaction-statement) are not.
     * 
     * @type {number}
     * @memberof BlockMetaDTO
     */
    statementsCount: number;
}

/**
 * Check if a given object implements the BlockMetaDTO interface.
 */
export function instanceOfBlockMetaDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "hash" in value;
    isInstance = isInstance && "totalFee" in value;
    isInstance = isInstance && "generationHash" in value;
    isInstance = isInstance && "stateHashSubCacheMerkleRoots" in value;
    isInstance = isInstance && "totalTransactionsCount" in value;
    isInstance = isInstance && "transactionsCount" in value;
    isInstance = isInstance && "statementsCount" in value;

    return isInstance;
}

export function BlockMetaDTOFromJSON(json: any): BlockMetaDTO {
    return BlockMetaDTOFromJSONTyped(json, false);
}

export function BlockMetaDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockMetaDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hash': json['hash'],
        'totalFee': json['totalFee'],
        'generationHash': json['generationHash'],
        'stateHashSubCacheMerkleRoots': json['stateHashSubCacheMerkleRoots'],
        'totalTransactionsCount': json['totalTransactionsCount'],
        'transactionsCount': json['transactionsCount'],
        'statementsCount': json['statementsCount'],
    };
}

export function BlockMetaDTOToJSON(value?: BlockMetaDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hash': value.hash,
        'totalFee': value.totalFee,
        'generationHash': value.generationHash,
        'stateHashSubCacheMerkleRoots': value.stateHashSubCacheMerkleRoots,
        'totalTransactionsCount': value.totalTransactionsCount,
        'transactionsCount': value.transactionsCount,
        'statementsCount': value.statementsCount,
    };
}
