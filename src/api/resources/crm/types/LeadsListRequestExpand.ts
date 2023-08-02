/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type LeadsListRequestExpand =
    | "converted_account"
    | "converted_contact"
    | "converted_contact,converted_account"
    | "owner"
    | "owner,converted_account"
    | "owner,converted_contact"
    | "owner,converted_contact,converted_account";

export const LeadsListRequestExpand = {
    ConvertedAccount: "converted_account",
    ConvertedContact: "converted_contact",
    ConvertedContactConvertedAccount: "converted_contact,converted_account",
    Owner: "owner",
    OwnerConvertedAccount: "owner,converted_account",
    OwnerConvertedContact: "owner,converted_contact",
    OwnerConvertedContactConvertedAccount: "owner,converted_contact,converted_account",
} as const;
