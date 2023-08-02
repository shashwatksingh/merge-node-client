/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const MethodEnum: core.serialization.Schema<serializers.crm.MethodEnum.Raw, Merge.crm.MethodEnum> =
    core.serialization.enum_(["GET", "OPTIONS", "HEAD", "POST", "PUT", "PATCH", "DELETE"]);

export declare namespace MethodEnum {
    type Raw = "GET" | "OPTIONS" | "HEAD" | "POST" | "PUT" | "PATCH" | "DELETE";
}
