/**
 * 攻击可行性评估方法（Attack Feasibility Assessment Approach）
 * @description 包括攻击潜力评估（Attack_Potential_Based）、CVSS评估（CVSS_Based）和攻击向量评估（Attack_Vector_Based）。
 */
export declare type AttackFeasibilityAssessmentApproach = "Attack_Potential_Based" | "CVSS_Based" | "Attack_Vector_Based";

/**
 * 攻击可行性评估方法详情（Attack Feasibility Assessment Approach Detail）
 * @property {string} name - 攻击可行性评估方法名称
 * @property {string} label - 攻击可行性评估方法标签
 * @property {string} description - 攻击可行性评估方法描述
 * @property {AttackFeasibilityAssessmentApproach} assessmentApproach - 攻击可行性评估方法
 */
export declare interface AttackFeasibilityDetail {
    name: string;
    label: string;
    description: string;
    assessmentApproach: AttackFeasibilityAssessmentApproach;
}

/**
 * 攻击可行性（Attack Feasibility）
 * @property {string} name - 攻击可行性名称
 * @property {string} label - 攻击可行性标签
 * @property {string} description - 攻击可行性描述
 * @property {AttackFeasibilityAssessmentApproach} approach - 攻击可行性评估方法
 */
export declare interface AttackFeasibility {
    name: string;
    label: string;
    description: string;
    approach: AttackFeasibilityAssessmentApproach;
}
