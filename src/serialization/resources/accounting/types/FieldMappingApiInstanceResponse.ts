/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const FieldMappingApiInstanceResponse: core.serialization.ObjectSchema<
    serializers.accounting.FieldMappingApiInstanceResponse.Raw,
    Merge.accounting.FieldMappingApiInstanceResponse
> = core.serialization.object({
    account: core.serialization.property(
        "Account",
        core.serialization
            .list(
                core.serialization.lazyObject(async () => (await import("../../..")).accounting.FieldMappingApiInstance)
            )
            .optional()
    ),
    accountingAttachment: core.serialization.property(
        "AccountingAttachment",
        core.serialization
            .list(
                core.serialization.lazyObject(async () => (await import("../../..")).accounting.FieldMappingApiInstance)
            )
            .optional()
    ),
    balanceSheet: core.serialization.property(
        "BalanceSheet",
        core.serialization
            .list(
                core.serialization.lazyObject(async () => (await import("../../..")).accounting.FieldMappingApiInstance)
            )
            .optional()
    ),
    cashFlowStatement: core.serialization.property(
        "CashFlowStatement",
        core.serialization
            .list(
                core.serialization.lazyObject(async () => (await import("../../..")).accounting.FieldMappingApiInstance)
            )
            .optional()
    ),
    companyInfo: core.serialization.property(
        "CompanyInfo",
        core.serialization
            .list(
                core.serialization.lazyObject(async () => (await import("../../..")).accounting.FieldMappingApiInstance)
            )
            .optional()
    ),
    contact: core.serialization.property(
        "Contact",
        core.serialization
            .list(
                core.serialization.lazyObject(async () => (await import("../../..")).accounting.FieldMappingApiInstance)
            )
            .optional()
    ),
    incomeStatement: core.serialization.property(
        "IncomeStatement",
        core.serialization
            .list(
                core.serialization.lazyObject(async () => (await import("../../..")).accounting.FieldMappingApiInstance)
            )
            .optional()
    ),
    creditNote: core.serialization.property(
        "CreditNote",
        core.serialization
            .list(
                core.serialization.lazyObject(async () => (await import("../../..")).accounting.FieldMappingApiInstance)
            )
            .optional()
    ),
    item: core.serialization.property(
        "Item",
        core.serialization
            .list(
                core.serialization.lazyObject(async () => (await import("../../..")).accounting.FieldMappingApiInstance)
            )
            .optional()
    ),
    purchaseOrder: core.serialization.property(
        "PurchaseOrder",
        core.serialization
            .list(
                core.serialization.lazyObject(async () => (await import("../../..")).accounting.FieldMappingApiInstance)
            )
            .optional()
    ),
    trackingCategory: core.serialization.property(
        "TrackingCategory",
        core.serialization
            .list(
                core.serialization.lazyObject(async () => (await import("../../..")).accounting.FieldMappingApiInstance)
            )
            .optional()
    ),
    journalEntry: core.serialization.property(
        "JournalEntry",
        core.serialization
            .list(
                core.serialization.lazyObject(async () => (await import("../../..")).accounting.FieldMappingApiInstance)
            )
            .optional()
    ),
    taxRate: core.serialization.property(
        "TaxRate",
        core.serialization
            .list(
                core.serialization.lazyObject(async () => (await import("../../..")).accounting.FieldMappingApiInstance)
            )
            .optional()
    ),
    invoice: core.serialization.property(
        "Invoice",
        core.serialization
            .list(
                core.serialization.lazyObject(async () => (await import("../../..")).accounting.FieldMappingApiInstance)
            )
            .optional()
    ),
    payment: core.serialization.property(
        "Payment",
        core.serialization
            .list(
                core.serialization.lazyObject(async () => (await import("../../..")).accounting.FieldMappingApiInstance)
            )
            .optional()
    ),
    expense: core.serialization.property(
        "Expense",
        core.serialization
            .list(
                core.serialization.lazyObject(async () => (await import("../../..")).accounting.FieldMappingApiInstance)
            )
            .optional()
    ),
    vendorCredit: core.serialization.property(
        "VendorCredit",
        core.serialization
            .list(
                core.serialization.lazyObject(async () => (await import("../../..")).accounting.FieldMappingApiInstance)
            )
            .optional()
    ),
    transaction: core.serialization.property(
        "Transaction",
        core.serialization
            .list(
                core.serialization.lazyObject(async () => (await import("../../..")).accounting.FieldMappingApiInstance)
            )
            .optional()
    ),
    generalLedgerTransaction: core.serialization.property(
        "GeneralLedgerTransaction",
        core.serialization
            .list(
                core.serialization.lazyObject(async () => (await import("../../..")).accounting.FieldMappingApiInstance)
            )
            .optional()
    ),
});

export declare namespace FieldMappingApiInstanceResponse {
    interface Raw {
        Account?: serializers.accounting.FieldMappingApiInstance.Raw[] | null;
        AccountingAttachment?: serializers.accounting.FieldMappingApiInstance.Raw[] | null;
        BalanceSheet?: serializers.accounting.FieldMappingApiInstance.Raw[] | null;
        CashFlowStatement?: serializers.accounting.FieldMappingApiInstance.Raw[] | null;
        CompanyInfo?: serializers.accounting.FieldMappingApiInstance.Raw[] | null;
        Contact?: serializers.accounting.FieldMappingApiInstance.Raw[] | null;
        IncomeStatement?: serializers.accounting.FieldMappingApiInstance.Raw[] | null;
        CreditNote?: serializers.accounting.FieldMappingApiInstance.Raw[] | null;
        Item?: serializers.accounting.FieldMappingApiInstance.Raw[] | null;
        PurchaseOrder?: serializers.accounting.FieldMappingApiInstance.Raw[] | null;
        TrackingCategory?: serializers.accounting.FieldMappingApiInstance.Raw[] | null;
        JournalEntry?: serializers.accounting.FieldMappingApiInstance.Raw[] | null;
        TaxRate?: serializers.accounting.FieldMappingApiInstance.Raw[] | null;
        Invoice?: serializers.accounting.FieldMappingApiInstance.Raw[] | null;
        Payment?: serializers.accounting.FieldMappingApiInstance.Raw[] | null;
        Expense?: serializers.accounting.FieldMappingApiInstance.Raw[] | null;
        VendorCredit?: serializers.accounting.FieldMappingApiInstance.Raw[] | null;
        Transaction?: serializers.accounting.FieldMappingApiInstance.Raw[] | null;
        GeneralLedgerTransaction?: serializers.accounting.FieldMappingApiInstance.Raw[] | null;
    }
}
