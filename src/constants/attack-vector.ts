import type { AttackVectorCriteriaEntry, AttackVectorCriteria, AttackVectorCriteriaLabel } from "../types/base/attack-vector";

/**
 * 攻击向量标准条目（Attack Vector Criteria Entries）
 */
export const attackVectorCriteriaEntries: AttackVectorCriteriaEntry[] = [
    {
        criteria: "Physical",
        label: "物理攻击",
    },
    {
        criteria: "Local",
        label: "本地攻击",
    },
    {
        criteria: "Adjacent",
        label: "相邻攻击",
    },
    {
        criteria: "Network",
        label: "网络攻击",
    },
];

/**
 * 根据攻击向量标准值获取攻击向量标准标签（Get Attack Vector Criteria Label with Attack Vector Criteria）
 * @param criteria 攻击向量标准值（Attack Vector Criteria Value）
 * @returns 攻击向量标准标签（Attack Vector Criteria Label）
 */
export const getAttackVectorCriteriaLabel = (criteria: AttackVectorCriteria): AttackVectorCriteriaLabel => {
    const entry = attackVectorCriteriaEntries.find((entry) => entry.criteria === criteria);
    if (!entry) {
        throw new Error(`Attack vector criteria ${criteria} invalid`);
    }
    return entry.label;
}

/**
 * 根据攻击向量标准标签获取攻击向量标准值（Get Attack Vector Criteria with Attack Vector Criteria Label）
 * @param label 攻击向量标准标签（Attack Vector Criteria Label）
 * @returns 攻击向量标准值（Attack Vector Criteria Value）
 */
export const getAttackVectorCriteria = (label: AttackVectorCriteriaLabel): AttackVectorCriteria => {
    const entry = attackVectorCriteriaEntries.find((entry) => entry.label === label);
    if (!entry) {
        throw new Error(`Attack vector criteria label ${label} invalid`);
    }
    return entry.criteria;
}
