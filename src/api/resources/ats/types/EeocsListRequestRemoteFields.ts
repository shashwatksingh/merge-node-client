/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type EeocsListRequestRemoteFields =
    | "disability_status"
    | "disability_status,gender"
    | "disability_status,gender,race"
    | "disability_status,gender,race,veteran_status"
    | "disability_status,gender,veteran_status"
    | "disability_status,race"
    | "disability_status,race,veteran_status"
    | "disability_status,veteran_status"
    | "gender"
    | "gender,race"
    | "gender,race,veteran_status"
    | "gender,veteran_status"
    | "race"
    | "race,veteran_status"
    | "veteran_status";

export const EeocsListRequestRemoteFields = {
    DisabilityStatus: "disability_status",
    DisabilityStatusGender: "disability_status,gender",
    DisabilityStatusGenderRace: "disability_status,gender,race",
    DisabilityStatusGenderRaceVeteranStatus: "disability_status,gender,race,veteran_status",
    DisabilityStatusGenderVeteranStatus: "disability_status,gender,veteran_status",
    DisabilityStatusRace: "disability_status,race",
    DisabilityStatusRaceVeteranStatus: "disability_status,race,veteran_status",
    DisabilityStatusVeteranStatus: "disability_status,veteran_status",
    Gender: "gender",
    GenderRace: "gender,race",
    GenderRaceVeteranStatus: "gender,race,veteran_status",
    GenderVeteranStatus: "gender,veteran_status",
    Race: "race",
    RaceVeteranStatus: "race,veteran_status",
    VeteranStatus: "veteran_status",
} as const;
