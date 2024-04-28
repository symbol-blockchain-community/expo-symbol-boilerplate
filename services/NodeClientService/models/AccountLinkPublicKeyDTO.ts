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
 * @interface AccountLinkPublicKeyDTO
 */
export interface AccountLinkPublicKeyDTO {
    /**
     * 
     * @type {string}
     * @memberof AccountLinkPublicKeyDTO
     */
    publicKey: string;
}

/**
 * Check if a given object implements the AccountLinkPublicKeyDTO interface.
 */
export function instanceOfAccountLinkPublicKeyDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "publicKey" in value;

    return isInstance;
}

export function AccountLinkPublicKeyDTOFromJSON(json: any): AccountLinkPublicKeyDTO {
    return AccountLinkPublicKeyDTOFromJSONTyped(json, false);
}

export function AccountLinkPublicKeyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountLinkPublicKeyDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'publicKey': json['publicKey'],
    };
}

export function AccountLinkPublicKeyDTOToJSON(value?: AccountLinkPublicKeyDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'publicKey': value.publicKey,
    };
}

