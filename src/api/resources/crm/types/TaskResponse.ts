/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

export interface TaskResponse {
    model: Merge.crm.Task;
    warnings: Merge.crm.WarningValidationProblem[];
    errors: Merge.crm.ErrorValidationProblem[];
    logs?: Merge.crm.DebugModeLog[];
}
