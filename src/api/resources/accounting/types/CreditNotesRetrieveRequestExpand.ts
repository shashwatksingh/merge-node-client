/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type CreditNotesRetrieveRequestExpand =
    | "line_items"
    | "line_items,tracking_categories"
    | "payments"
    | "payments,line_items"
    | "payments,line_items,tracking_categories"
    | "payments,tracking_categories"
    | "tracking_categories";

export const CreditNotesRetrieveRequestExpand = {
    LineItems: "line_items",
    LineItemsTrackingCategories: "line_items,tracking_categories",
    Payments: "payments",
    PaymentsLineItems: "payments,line_items",
    PaymentsLineItemsTrackingCategories: "payments,line_items,tracking_categories",
    PaymentsTrackingCategories: "payments,tracking_categories",
    TrackingCategories: "tracking_categories",
} as const;
