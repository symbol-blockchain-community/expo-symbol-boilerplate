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
import type { NetworkTypeEnum } from './NetworkTypeEnum';
import {
    NetworkTypeEnumFromJSON,
    NetworkTypeEnumFromJSONTyped,
    NetworkTypeEnumToJSON,
} from './NetworkTypeEnum';

/**
 * 
 * @export
 * @interface EmbeddedMultisigAccountModificationTransactionDTO
 */
export interface EmbeddedMultisigAccountModificationTransactionDTO {
    /**
     * Public key.
     * @type {string}
     * @memberof EmbeddedMultisigAccountModificationTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof EmbeddedMultisigAccountModificationTransactionDTO
     */
    version: number;
    /**
     * 
     * @type {NetworkTypeEnum}
     * @memberof EmbeddedMultisigAccountModificationTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof EmbeddedMultisigAccountModificationTransactionDTO
     */
    type: number;
    /**
     * Number of signatures needed to remove a cosignatory.
     * If we are modifying an existing multisig account, this indicates the relative change of the minimum cosignatories.
     * 
     * @type {number}
     * @memberof EmbeddedMultisigAccountModificationTransactionDTO
     */
    minRemovalDelta: number;
    /**
     * Number of signatures needed to approve a transaction.
     * If we are modifying an existing multisig account, this indicates the relative change of the minimum cosignatories.
     * 
     * @type {number}
     * @memberof EmbeddedMultisigAccountModificationTransactionDTO
     */
    minApprovalDelta: number;
    /**
     * Array of cosignatory accounts to add.
     * @type {Array<string>}
     * @memberof EmbeddedMultisigAccountModificationTransactionDTO
     */
    addressAdditions: Array<string>;
    /**
     * Array of cosignatory accounts to delete.
     * @type {Array<string>}
     * @memberof EmbeddedMultisigAccountModificationTransactionDTO
     */
    addressDeletions: Array<string>;
}

/**
 * Check if a given object implements the EmbeddedMultisigAccountModificationTransactionDTO interface.
 */
export function instanceOfEmbeddedMultisigAccountModificationTransactionDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "minRemovalDelta" in value;
    isInstance = isInstance && "minApprovalDelta" in value;
    isInstance = isInstance && "addressAdditions" in value;
    isInstance = isInstance && "addressDeletions" in value;

    return isInstance;
}

export function EmbeddedMultisigAccountModificationTransactionDTOFromJSON(json: any): EmbeddedMultisigAccountModificationTransactionDTO {
    return EmbeddedMultisigAccountModificationTransactionDTOFromJSONTyped(json, false);
}

export function EmbeddedMultisigAccountModificationTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedMultisigAccountModificationTransactionDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'signerPublicKey': json['signerPublicKey'],
        'version': json['version'],
        'network': NetworkTypeEnumFromJSON(json['network']),
        'type': json['type'],
        'minRemovalDelta': json['minRemovalDelta'],
        'minApprovalDelta': json['minApprovalDelta'],
        'addressAdditions': json['addressAdditions'],
        'addressDeletions': json['addressDeletions'],
    };
}

export function EmbeddedMultisigAccountModificationTransactionDTOToJSON(value?: EmbeddedMultisigAccountModificationTransactionDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'signerPublicKey': value.signerPublicKey,
        'version': value.version,
        'network': NetworkTypeEnumToJSON(value.network),
        'type': value.type,
        'minRemovalDelta': value.minRemovalDelta,
        'minApprovalDelta': value.minApprovalDelta,
        'addressAdditions': value.addressAdditions,
        'addressDeletions': value.addressDeletions,
    };
}

