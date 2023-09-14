/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const RolesEnum: core.serialization.Schema<serializers.filestorage.RolesEnum.Raw, Merge.filestorage.RolesEnum> =
    core.serialization.enum_(["READ", "WRITE", "OWNER"]);

export declare namespace RolesEnum {
    type Raw = "READ" | "WRITE" | "OWNER";
}