/**
 * 主要安全属性
 * @description 包括保密性（Confidentiality）、完整性（Integrity）和可用性（Availability）
 */
export declare type PrimaryCybersecurityProperty = "Confidentiality" | "Integrity" | "Availability"

/**
 * 主要安全属性缩写（Primary Cybersecurity Property Short）
 * @description 包含保密性缩写（C）、完整性缩写（I）、可用性缩写（A）
 */
export declare type PrimaryCybersecurityPropertyShort = "C" | "I" | "A"

/**
 * 扩展安全属性
 * @description 包括责任追踪（Accountability）、授权（Authorization）和不可抵赖（Non-repudiation）
 */
export declare type ExtendedCybersecurityProperty = "Accountability" | "Authorization" | "Non-repudiation"

/**
 * 扩展安全属性缩写（Extended Cybersecurity Property Short）
 * @description 包含责任追踪缩写（Ac）、授权缩写（Zu）、不可抵赖缩写（Nr）
 */
export declare type ExtendedCybersecurityPropertyShort = "Ac" | "Zu" | "Nr"

/**
 * 网络安全属性（Cybersecurity Properties）
 * @description 包含主要安全属性（Primary Cybersecurity Property）和扩展安全属性（Extended Cybersecurity Property）
 */
export declare type CybersecurityProperty = PrimaryCybersecurityProperty | ExtendedCybersecurityProperty

/**
 * 网络安全属性缩写（Cybersecurity Properties Short）
 * @description 包含主要安全属性缩写（Primary Cybersecurity Property Short）和扩展安全属性缩写（Extended Cybersecurity Property Short）
 */
export declare type CybersecurityPropertyShort = PrimaryCybersecurityPropertyShort | ExtendedCybersecurityPropertyShort

/**
 * 网络安全属性详情（Cybersecurity Properties Detail）
 * @property {string} name - 网络安全属性名称
 * @property {string} label - 网络安全属性标签
 * @property {string} description - 网络安全属性描述
 * @property {CybersecurityProperty} cybersecurityProperty - 网络安全属性
 * @property {CybersecurityPropertyShort} cybersecurityPropertyShort - 网络安全属性缩写
 */
export declare interface CybersecurityPropertyDetail {
    name: string;
    label: string;
    description: string;
    cybersecurityProperty: CybersecurityProperty;
    cybersecurityPropertyShort: CybersecurityPropertyShort;
}
