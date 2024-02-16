/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../../../..";

/**
 * @example
 *     {
 *         endUserEmailAddress: "string",
 *         endUserOrganizationName: "string",
 *         endUserOriginId: "string",
 *         categories: []
 *     }
 */
export interface EndUserDetailsRequest {
    /** Your end user's email address. This is purely for identification purposes - setting this value will not cause any emails to be sent. */
    endUserEmailAddress: string;
    /** Your end user's organization. */
    endUserOrganizationName: string;
    /** This unique identifier typically represents the ID for your end user in your product's database. This value must be distinct from other Linked Accounts' unique identifiers. */
    endUserOriginId: string;
    /** The integration categories to show in Merge Link. */
    categories: Merge.accounting.CategoriesEnum[];
    /** The slug of a specific pre-selected integration for this linking flow token. For examples of slugs, see https://docs.merge.dev/guides/merge-link/single-integration/. */
    integration?: string;
    /** An integer number of minutes between [30, 720 or 10080 if for a Magic Link URL] for how long this token is valid. Defaults to 30. */
    linkExpiryMins?: number;
    /** Whether to generate a Magic Link URL. Defaults to false. For more information on Magic Link, see https://merge.dev/blog/integrations-fast-say-hello-to-magic-link. */
    shouldCreateMagicLinkUrl?: boolean;
    /** An array of objects to specify the models and fields that will be disabled for a given Linked Account. Each object uses model_id, enabled_actions, and disabled_fields to specify the model, method, and fields that are scoped for a given Linked Account. */
    commonModels?: Merge.accounting.CommonModelScopesBodyRequest[];
}
