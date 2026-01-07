import type { CybersecurityRequirement } from "./cybersecurity-requirement";

/**
 *  网络安全目标（Cybersecurity Goal）
 * @description 基于对潜在威胁场景的分析，定义了一个网络安全目标。
 * @property {string} name - 网络安全目标名称
 * @property {string} label - 网络安全目标标签
 * @property {string} description - 网络安全目标描述
 * @property {CybersecurityRequirement} cybersecurityRequirement - 网络安全要求
 * @property {ThreatScenario[]} associatedThreatScenarios - 关联的威胁场景列表
 */
export declare interface CybersecurityGoal {
    name: string;
    label: string;
    description: string;
    cybersecurityRequirement: CybersecurityRequirement;
    associatedThreatScenarios: ThreatScenario[];
}
