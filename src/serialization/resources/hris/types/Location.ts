/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const Location: core.serialization.ObjectSchema<serializers.hris.Location.Raw, Merge.hris.Location> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
        name: core.serialization.string().optional(),
        phoneNumber: core.serialization.property("phone_number", core.serialization.string().optional()),
        street1: core.serialization.property("street_1", core.serialization.string().optional()),
        street2: core.serialization.property("street_2", core.serialization.string().optional()),
        city: core.serialization.string().optional(),
        state: core.serialization.string().optional(),
        zipCode: core.serialization.property("zip_code", core.serialization.string().optional()),
        country: core.serialization.lazy(async () => (await import("../../..")).hris.LocationCountry).optional(),
        locationType: core.serialization.property(
            "location_type",
            core.serialization.lazy(async () => (await import("../../..")).hris.LocationLocationType).optional()
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
                .list(core.serialization.lazyObject(async () => (await import("../../..")).hris.RemoteData))
                .optional()
        ),
    });

export declare namespace Location {
    interface Raw {
        id?: string | null;
        remote_id?: string | null;
        name?: string | null;
        phone_number?: string | null;
        street_1?: string | null;
        street_2?: string | null;
        city?: string | null;
        state?: string | null;
        zip_code?: string | null;
        country?: serializers.hris.LocationCountry.Raw | null;
        location_type?: serializers.hris.LocationLocationType.Raw | null;
        remote_was_deleted?: boolean | null;
        modified_at?: string | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: serializers.hris.RemoteData.Raw[] | null;
    }
}
