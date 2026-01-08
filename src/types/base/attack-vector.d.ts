/**
 * 攻击向量标准（Attack Vector Criteria）
 * @description 包含物理攻击（Physical）、本地攻击（Local）、相邻攻击（Adjacent）和网络攻击（Network）
 */
export declare type AttackVectorCriteria = "Physical" | "Local" | "Adjacent" | "Network";

/**
 * 攻击向量标准标签（Attack Vector Criteria Label）
 * @description 包含物理攻击（Physical）、本地攻击（Local）、相邻攻击（Adjacent）和网络攻击（Network）
 */
export declare type AttackVectorCriteriaLabel = "物理攻击" | "本地攻击" | "相邻攻击" | "网络攻击";

/**
 * 攻击向量标准条目（Attack Vector Criteria Entry）
 * @description 包含攻击向量标准值（Attack Vector Criteria Value）和攻击向量标准标签（Attack Vector Criteria Label）
 */
export declare interface AttackVectorCriteriaEntry {
    criteria: AttackVectorCriteria;
    label: AttackVectorCriteriaLabel;
}
