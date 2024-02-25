/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

export interface AccountIntegration {
    /** Company name. */
    name: string;
    /** Category or categories this integration belongs to. Multiple categories should be comma separated, i.e. [ats, hris]. */
    categories?: Merge.ticketing.CategoriesEnum[];
    /** Company logo in rectangular shape. <b>Upload an image with a clear background.</b> */
    image?: string;
    /** Company logo in square shape. <b>Upload an image with a white background.</b> */
    squareImage?: string;
    /** The color of this integration used for buttons and text throughout the app and landing pages. <b>Choose a darker, saturated color.</b> */
    color?: string;
    slug?: string;
    /** Mapping of API endpoints to documentation urls for support. Example: {'GET': [['/common-model-scopes', 'https://docs.merge.dev/accounting/common-model-scopes/#common_model_scopes_retrieve'],['/common-model-actions', 'https://docs.merge.dev/accounting/common-model-actions/#common_model_actions_retrieve']], 'POST': []} */
    apiEndpointsToDocumentationUrls?: Record<string, unknown>;
    /** Setup guide URL for third party webhook creation. Exposed in Merge Docs. */
    webhookSetupGuideUrl?: string;
    /** Category or categories this integration is in beta status for. */
    categoryBetaStatus?: Record<string, unknown>;
}
