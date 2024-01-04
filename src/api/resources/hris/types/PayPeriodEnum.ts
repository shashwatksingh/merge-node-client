/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * * `HOUR` - HOUR
 * * `DAY` - DAY
 * * `WEEK` - WEEK
 * * `EVERY_TWO_WEEKS` - EVERY_TWO_WEEKS
 * * `SEMIMONTHLY` - SEMIMONTHLY
 * * `MONTH` - MONTH
 * * `QUARTER` - QUARTER
 * * `EVERY_SIX_MONTHS` - EVERY_SIX_MONTHS
 * * `YEAR` - YEAR
 */
export type PayPeriodEnum =
    | "HOUR"
    | "DAY"
    | "WEEK"
    | "EVERY_TWO_WEEKS"
    | "SEMIMONTHLY"
    | "MONTH"
    | "QUARTER"
    | "EVERY_SIX_MONTHS"
    | "YEAR";

export const PayPeriodEnum = {
    Hour: "HOUR",
    Day: "DAY",
    Week: "WEEK",
    EveryTwoWeeks: "EVERY_TWO_WEEKS",
    Semimonthly: "SEMIMONTHLY",
    Month: "MONTH",
    Quarter: "QUARTER",
    EverySixMonths: "EVERY_SIX_MONTHS",
    Year: "YEAR",
} as const;
