import type { CybersecurityRequirement } from "./cybersecurity-requirement";
import type { ArchitecturalDesign } from "./architectural-design";

/**
 *  网络安全规范（Cybersecurity Specification）
 * @property {string} name - 网络安全规范名称
 * @property {string} label - 网络安全规范标签
 * @property {string} description - 网络安全规范描述
 * @property {CybersecurityRequirement[]} cybersecurityRequirements - 网络安全要求列表
 * @property {ArchitecturalDesign} architecturalDesign - 架构设计
 */
export declare interface CybersecuritySpecification {
    name: string;
    label: string;
    description: string;
    cybersecurityRequirements: CybersecurityRequirement[];
    architecturalDesign: ArchitecturalDesign;
}
