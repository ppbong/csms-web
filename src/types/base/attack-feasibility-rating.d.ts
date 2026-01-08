/**
 * 攻击可行性等级（Attack Feasibility Rating）
 * @description 包括高（High）、中（Medium）、低（Low）和非常低（Very low）。
 */
export declare type AttackFeasibilityRating = "High" | "Medium" | "Low" | "Very low";

/**
 * 攻击可行性等级标签（Attack Feasibility Rating Label）
 * @description 包括高（High）、中（Medium）、低（Low）和非常低（Very low）。
 */
export declare type AttackFeasibilityRatingLabel = "高" | "中" | "低" | "非常低";

/**
 * 攻击可行性等级条目（Attack Feasibility Rating Entry）
 * @description 包括高（High）、中（Medium）、低（Low）和非常低（Very low）。
 */
export declare interface AttackFeasbilityRatingEntry {
    rating: AttackFeasibilityRating;
    label: AttackFeasibilityRatingLabel;
}
