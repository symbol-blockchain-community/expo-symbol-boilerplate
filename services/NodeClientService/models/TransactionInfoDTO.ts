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
import type { TransactionInfoDTOMeta } from './TransactionInfoDTOMeta';
import {
    TransactionInfoDTOMetaFromJSON,
    TransactionInfoDTOMetaFromJSONTyped,
    TransactionInfoDTOMetaToJSON,
} from './TransactionInfoDTOMeta';
import type { TransactionInfoDTOTransaction } from './TransactionInfoDTOTransaction';
import {
    TransactionInfoDTOTransactionFromJSON,
    TransactionInfoDTOTransactionFromJSONTyped,
    TransactionInfoDTOTransactionToJSON,
} from './TransactionInfoDTOTransaction';

/**
 * 
 * @export
 * @interface TransactionInfoDTO
 */
export interface TransactionInfoDTO {
    /**
     * Internal resource identifier.
     * @type {string}
     * @memberof TransactionInfoDTO
     */
    id: string;
    /**
     * 
     * @type {TransactionInfoDTOMeta}
     * @memberof TransactionInfoDTO
     */
    meta: TransactionInfoDTOMeta;
    /**
     * 
     * @type {TransactionInfoDTOTransaction}
     * @memberof TransactionInfoDTO
     */
    transaction: TransactionInfoDTOTransaction;
}

/**
 * Check if a given object implements the TransactionInfoDTO interface.
 */
export function instanceOfTransactionInfoDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "meta" in value;
    isInstance = isInstance && "transaction" in value;

    return isInstance;
}

export function TransactionInfoDTOFromJSON(json: any): TransactionInfoDTO {
    return TransactionInfoDTOFromJSONTyped(json, false);
}

export function TransactionInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionInfoDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'meta': TransactionInfoDTOMetaFromJSON(json['meta']),
        'transaction': TransactionInfoDTOTransactionFromJSON(json['transaction']),
    };
}

export function TransactionInfoDTOToJSON(value?: TransactionInfoDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'meta': TransactionInfoDTOMetaToJSON(value.meta),
        'transaction': TransactionInfoDTOTransactionToJSON(value.transaction),
    };
}

