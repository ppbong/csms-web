import type { CybersecurityProperty } from "./cybersecurity-property";

/**
 * 资产（Assets）
 * @property {string} name - 资产名称
 * @property {string} label - 资产标签
 * @property {string} description - 资产描述
 * @property {CybersecurityProperty[]} cybersecurityProperties - 资产网络安全属性列表
 */
export declare interface Asset {
    name: string;
    label: string;
    description: string;
    cybersecurityProperties: CybersecurityProperty[];
}
