/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Lead Object
 * ### Description
 * The `Lead` object is used to represent an individual who is a potential customer.
 * ### Usage Example
 * TODO
 */
export interface LeadRequest {
    /** The lead's owner. */
    owner?: Merge.crm.LeadRequestOwner;
    /** The lead's source. */
    leadSource?: string;
    /** The lead's title. */
    title?: string;
    /** The lead's company. */
    company?: string;
    /** The lead's first name. */
    firstName?: string;
    /** The lead's last name. */
    lastName?: string;
    addresses?: Merge.crm.AddressRequest[];
    emailAddresses?: Merge.crm.EmailAddressRequest[];
    phoneNumbers?: Merge.crm.PhoneNumberRequest[];
    /** When the lead was converted. */
    convertedDate?: Date;
    /** The contact of the converted lead. */
    convertedContact?: Merge.crm.LeadRequestConvertedContact;
    /** The account of the converted lead. */
    convertedAccount?: Merge.crm.LeadRequestConvertedAccount;
    integrationParams?: Record<string, unknown>;
    linkedAccountParams?: Record<string, unknown>;
    remoteFields?: Merge.crm.RemoteFieldRequest[];
}
