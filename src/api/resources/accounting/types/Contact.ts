/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Contact Object
 * ### Description
 * A `Contact` is an individual or business entity to which products and services are sold to or purchased from. The `Contact` model contains both Customers, in which products and services are sold to, and Vendors (or Suppliers), in which products and services are purchased from.
 * * A `Contact` is a Vendor/Supplier if the `is_supplier` property is true.
 * * A `Contact` is a customer if the `is_customer` property is true.
 *
 * ### Usage Example
 * Fetch from the `LIST Contacts` endpoint and view a company's contacts.
 */
export interface Contact {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The contact's name. */
    name?: string;
    /** Whether the contact is a supplier. */
    isSupplier?: boolean;
    /** Whether the contact is a customer. */
    isCustomer?: boolean;
    /** The contact's email address. */
    emailAddress?: string;
    /** The contact's tax number. */
    taxNumber?: string;
    /**
     * The contact's status
     *
     * * `ACTIVE` - ACTIVE
     * * `ARCHIVED` - ARCHIVED
     */
    status?: Merge.accounting.ContactStatus;
    /** The currency the contact's transactions are in. */
    currency?: string;
    /** When the third party's contact was updated. */
    remoteUpdatedAt?: Date;
    /** The company the contact belongs to. */
    company?: string;
    /** `Address` object IDs for the given `Contacts` object. */
    addresses?: (Merge.accounting.ContactAddressesItem | undefined)[];
    /** `AccountingPhoneNumber` object for the given `Contacts` object. */
    phoneNumbers?: Merge.accounting.AccountingPhoneNumber[];
    /** Indicates whether or not this object has been deleted in the third party platform. */
    remoteWasDeleted?: boolean;
    createdAt?: Date;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: Date;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.accounting.RemoteData[];
}
