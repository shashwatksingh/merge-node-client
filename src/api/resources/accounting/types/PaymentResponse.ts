/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

export interface PaymentResponse {
    model: Merge.accounting.Payment;
    warnings: Merge.accounting.WarningValidationProblem[];
    errors: Merge.accounting.ErrorValidationProblem[];
    logs?: Merge.accounting.DebugModeLog[];
}
