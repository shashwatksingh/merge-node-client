/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const Contact: core.serialization.ObjectSchema<serializers.accounting.Contact.Raw, Merge.accounting.Contact> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
        name: core.serialization.string().optional(),
        isSupplier: core.serialization.property("is_supplier", core.serialization.boolean().optional()),
        isCustomer: core.serialization.property("is_customer", core.serialization.boolean().optional()),
        emailAddress: core.serialization.property("email_address", core.serialization.string().optional()),
        taxNumber: core.serialization.property("tax_number", core.serialization.string().optional()),
        status: core.serialization.lazy(async () => (await import("../../..")).accounting.ContactStatus).optional(),
        currency: core.serialization.string().optional(),
        remoteUpdatedAt: core.serialization.property("remote_updated_at", core.serialization.string().optional()),
        company: core.serialization.string().optional(),
        addresses: core.serialization.list(core.serialization.string().optional()).optional(),
        phoneNumbers: core.serialization.property(
            "phone_numbers",
            core.serialization
                .list(
                    core.serialization.lazyObject(
                        async () => (await import("../../..")).accounting.AccountingPhoneNumber
                    )
                )
                .optional()
        ),
        remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
        modifiedAt: core.serialization.property("modified_at", core.serialization.string().optional()),
        fieldMappings: core.serialization.property(
            "field_mappings",
            core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
        ),
        remoteData: core.serialization.property(
            "remote_data",
            core.serialization
                .list(core.serialization.lazyObject(async () => (await import("../../..")).accounting.RemoteData))
                .optional()
        ),
    });

export declare namespace Contact {
    interface Raw {
        id?: string | null;
        remote_id?: string | null;
        name?: string | null;
        is_supplier?: boolean | null;
        is_customer?: boolean | null;
        email_address?: string | null;
        tax_number?: string | null;
        status?: serializers.accounting.ContactStatus.Raw | null;
        currency?: string | null;
        remote_updated_at?: string | null;
        company?: string | null;
        addresses?: (string | null | undefined)[] | null;
        phone_numbers?: serializers.accounting.AccountingPhoneNumber.Raw[] | null;
        remote_was_deleted?: boolean | null;
        modified_at?: string | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: serializers.accounting.RemoteData.Raw[] | null;
    }
}
