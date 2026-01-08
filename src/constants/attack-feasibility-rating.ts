import type { AttackFeasbilityRatingEntry, AttackFeasibilityRating, AttackFeasibilityRatingLabel } from "../types/base/attack-feasibility-rating";
import type { AttackVectorCriteria } from "../types/base/attack-vector";

/**
 * 攻击可行性等级条目列表（Attack Feasibility Rating Entry List）
 */
export const AttackFeasibilityRatingEntries: AttackFeasbilityRatingEntry[] = [
    {
        rating: "High",
        label: "高",
    },
    {
        rating: "Medium",
        label: "中",
    },
    {
        rating: "Low",
        label: "低",
    },
    {
        rating: "Very low",
        label: "非常低",
    },
];

/**
 * 获取攻击可行性等级标签（Get Attack Feasibility Rating Label）
 * @param rating 攻击可行性等级（Attack Feasibility Rating）
 * @returns 攻击可行性等级标签（Attack Feasibility Rating Label）
 */
export const getAttackFeasibilityRatingLabel = (rating: AttackFeasibilityRating): AttackFeasibilityRatingLabel => {
    const entry = AttackFeasibilityRatingEntries.find((entry) => entry.rating === rating);
    if (!entry) {
        throw new Error(`Attack feasibility rating ${rating} invalid`);
    }
    return entry.label;
}

/**
 * 获取攻击可行性等级（Get Attack Feasibility Rating）
 * @param label 攻击可行性等级标签（Attack Feasibility Rating Label）
 * @returns 攻击可行性等级（Attack Feasibility Rating）
 */
export const getAttackFeasibilityRating = (label: AttackFeasibilityRatingLabel): AttackFeasibilityRating => {
    const entry = AttackFeasibilityRatingEntries.find((entry) => entry.label === label);
    if (!entry) {
        throw new Error(`Attack feasibility rating label ${label} invalid`);
    }
    return entry.rating;
}

/**
 * 根据攻击潜在值获取攻击可行性等级（Get Attack Feasibility Rating with Attack Potential Aggregation Value）
 * @param value 攻击潜在聚合值（Attack Potential Aggregation Value）
 * @returns 攻击可行性等级（Attack Feasibility Rating）
 */
export const getAttackFeasibilityRatingWithAttackPotentialAggregationValue = (value: number): AttackFeasibilityRating => {
    if (value >=0 && value <= 9) {
        return "High";
    }

    if (value >= 10 && value <= 13) {
        return "High";
    }

    if (value >= 14 && value <= 19) {
        return "Medium";
    }

    if (value >= 20 && value <= 24) {
        return "Low";
    }

    if (value >= 25) {
        return "Very low";
    }

    throw new Error(`Attack potential value ${value} invalid`);
}

/**
 * 根据CVSS exploitability值获取攻击可行性等级（Get Attack Feasibility Rating with CVSS Exploitability Value）
 * @param value CVSS exploitability值（CVSS Exploitability Value）
 * @returns 攻击可行性等级（Attack Feasibility Rating）
 */
export const getAttackFeasibilityRatingWithCvssExploitabilityValue = (value: number): AttackFeasibilityRating => {
    if (value >= 2.96 && value <= 3.89) {
        return "High";
    }

    if (value >= 2.00 && value <= 2.95) {
        return "Medium";
    }

    if (value >= 1.06 && value <= 1.99) {
        return "Low";
    }

    if (value >= 0.12 && value <= 1.05) {
        return "Very low";
    }

    throw new Error(`CVSS exploitability value ${value} invalid`);
}

/**
 * 根据攻击向量标准值获取攻击可行性等级（Get Attack Feasibility Rating with Attack Vector Criteria）
 * @param criteria 攻击向量标准值（Attack Vector Criteria Value）
 * @returns 攻击可行性等级（Attack Feasibility Rating）
 */
export const getAttackFeasibilityRatingWithAttackVectorCriteria = (criteria: AttackVectorCriteria): AttackFeasibilityRating => {
    switch (criteria) {
        case "Network":
            return "High";
        case "Adjacent":
            return "Medium";
        case "Local":
            return "Low";
        case "Physical":
            return "Very low";
        default:
            throw new Error(`Attack vector criteria ${criteria} invalid`);
    }
}
