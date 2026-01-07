/**
 * 不利影响（Adverse Consequence）
 * @property {string} Involving_Vehicle - 涉及车辆
 * @property {string} Involving_Vehicle_Function - 涉及车辆功能
 * @property {string} Affecting_Road_User - 影响道路用户
 */
export declare type AdverseConsequence = "Involving_Vehicle" | "Involving_Vehicle_Function" | "Affecting_Road_User"

/**
 * 危害场景（Damage Scenario）
 * @property {string} name - 危害场景名称
 * @property {string} label - 危害场景标签
 * @property {string} description - 危害场景描述
 * @property {AdverseConsequence} adverseConsequence - 不利影响
 */
export declare interface DamageScenario {
    name: string;
    label: string;
    description: string;
    adverseConsequence: AdverseConsequence;
}
