/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface CustomObjectClassesCustomObjectsRetrieveRequest {
    /**
     * Whether to include the original data Merge fetched from the third-party to produce these models.
     */
    includeRemoteData?: boolean;
    /**
     * Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format.
     */
    includeRemoteFields?: boolean;
}
