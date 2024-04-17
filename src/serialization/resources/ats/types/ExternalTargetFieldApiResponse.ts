/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const ExternalTargetFieldApiResponse: core.serialization.ObjectSchema<
    serializers.ats.ExternalTargetFieldApiResponse.Raw,
    Merge.ats.ExternalTargetFieldApiResponse
> = core.serialization.object({
    activity: core.serialization.property(
        "Activity",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).ats.ExternalTargetFieldApi))
            .optional()
    ),
    application: core.serialization.property(
        "Application",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).ats.ExternalTargetFieldApi))
            .optional()
    ),
    attachment: core.serialization.property(
        "Attachment",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).ats.ExternalTargetFieldApi))
            .optional()
    ),
    candidate: core.serialization.property(
        "Candidate",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).ats.ExternalTargetFieldApi))
            .optional()
    ),
    department: core.serialization.property(
        "Department",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).ats.ExternalTargetFieldApi))
            .optional()
    ),
    eeoc: core.serialization.property(
        "EEOC",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).ats.ExternalTargetFieldApi))
            .optional()
    ),
    scheduledInterview: core.serialization.property(
        "ScheduledInterview",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).ats.ExternalTargetFieldApi))
            .optional()
    ),
    job: core.serialization.property(
        "Job",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).ats.ExternalTargetFieldApi))
            .optional()
    ),
    jobInterviewStage: core.serialization.property(
        "JobInterviewStage",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).ats.ExternalTargetFieldApi))
            .optional()
    ),
    offer: core.serialization.property(
        "Offer",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).ats.ExternalTargetFieldApi))
            .optional()
    ),
    office: core.serialization.property(
        "Office",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).ats.ExternalTargetFieldApi))
            .optional()
    ),
    rejectReason: core.serialization.property(
        "RejectReason",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).ats.ExternalTargetFieldApi))
            .optional()
    ),
    scorecard: core.serialization.property(
        "Scorecard",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).ats.ExternalTargetFieldApi))
            .optional()
    ),
    tag: core.serialization.property(
        "Tag",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).ats.ExternalTargetFieldApi))
            .optional()
    ),
    remoteUser: core.serialization.property(
        "RemoteUser",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).ats.ExternalTargetFieldApi))
            .optional()
    ),
});

export declare namespace ExternalTargetFieldApiResponse {
    interface Raw {
        Activity?: serializers.ats.ExternalTargetFieldApi.Raw[] | null;
        Application?: serializers.ats.ExternalTargetFieldApi.Raw[] | null;
        Attachment?: serializers.ats.ExternalTargetFieldApi.Raw[] | null;
        Candidate?: serializers.ats.ExternalTargetFieldApi.Raw[] | null;
        Department?: serializers.ats.ExternalTargetFieldApi.Raw[] | null;
        EEOC?: serializers.ats.ExternalTargetFieldApi.Raw[] | null;
        ScheduledInterview?: serializers.ats.ExternalTargetFieldApi.Raw[] | null;
        Job?: serializers.ats.ExternalTargetFieldApi.Raw[] | null;
        JobInterviewStage?: serializers.ats.ExternalTargetFieldApi.Raw[] | null;
        Offer?: serializers.ats.ExternalTargetFieldApi.Raw[] | null;
        Office?: serializers.ats.ExternalTargetFieldApi.Raw[] | null;
        RejectReason?: serializers.ats.ExternalTargetFieldApi.Raw[] | null;
        Scorecard?: serializers.ats.ExternalTargetFieldApi.Raw[] | null;
        Tag?: serializers.ats.ExternalTargetFieldApi.Raw[] | null;
        RemoteUser?: serializers.ats.ExternalTargetFieldApi.Raw[] | null;
    }
}