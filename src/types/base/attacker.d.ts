/**
 * 攻击者类型（Attacker Type）
 * @description 包括个人（Person）、组织（Organization）和团体（Group）
 */
export declare type AttackerType = "Person" | "Group" | "Organization"

/**
 * 攻击者（Attacker）
 * @property {string} name - 攻击者名称
 * @property {string} label - 攻击者标签
 * @property {string} description - 攻击者描述
 * @property {AttackerType} type - 攻击者类型
 */
export declare interface Attacker {
    name: string;
    label: string;
    description: string;
    type: AttackerType;
}
