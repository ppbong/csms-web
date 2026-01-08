/**
 * 测试方法（Testing Method）
 * @description 包括功能测试（Functional_Testing）、漏洞扫描（Vulnerability_Scanning）、模糊测试（Fuzz_Testing）和渗透测试（Penetration_Testing）。
 */
export declare type TestingMethod = "Functional_Testing" | "Vulnerability_Scanning" | "Fuzz_Testing" | "Penetration_Testing";

/**
 * 测试方法详情（Testing Method Detail）
 * @property {string} name - 测试方法名称
 * @property {string} label - 测试方法标签
 * @property {string} description - 测试方法描述
 * @property {TestingMethod} testingMethod - 测试方法
 */
export declare interface TestingMethodDetail {
    name: string;
    label: string;
    description: string;
    testingMethod: TestingMethod;
}
