import type { Asset } from "./asset";
import type  { CybersecurityProperty } from "./cybersecurity-property";
import type { DamageScenario } from "./damage-scenario";
import type { AttackPath } from "./attack-path";

/**
 * 受攻击的网络安全属性（Compromised Cybersecurity Property）
 * @property {Asset} asset - 资产
 * @property {CybersecurityProperty[]} cybersecurityProperties - 受攻击的网络安全属性列表
 */
export declare interface CompromisedCybersecurityProperty {
    asset: Asset;
    cybersecurityProperties: CybersecurityProperty[];
}

/**
 * 威胁场景（Threat Scenario）
 * @description 描述了一个潜在的攻击场景，包括受攻击的资产和网络安全属性，以及可能的危害场景和攻击路径。
 * @property {string} name - 威胁场景名称
 * @property {string} label - 威胁场景标签
 * @property {string} description - 威胁场景描述
 * @property {CompromisedCybersecurityProperty[]} compromisedCybersecurityProperties - 受攻击的网络安全属性列表
 * @property {DamageScenario} damageScenario - 危害场景
 * @property {AttackPath[]} attackPaths - 攻击路径列表
 */
export declare interface ThreatScenario {
    name: string;
    label: string;
    description: string;
    compromisedCybersecurityProperties: CompromisedCybersecurityProperty[];
    damageScenario: DamageScenario;
    attackPaths: AttackPath[];
}
