import type { CybersecurityPropertyDetail } from "../types/base/cybersecurity-property";

/**
 * 网络安全属性列表（Cybersecurity Properties List）
 */
export const cybersecurityProperties: CybersecurityPropertyDetail[] = [
    {
        name: "Confidentiality",
        label: "机密性",
        description: "The property of ensuring that information is not disclosed to unauthorized individuals or entities.",
        cybersecurityProperty: "Confidentiality",
        cybersecurityPropertyShort: "C",
    },
    {
        name: "Integrity",
        label: "完整性",
        description: "The property of maintaining the accuracy and trustworthiness of information.",
        cybersecurityProperty: "Integrity",
        cybersecurityPropertyShort: "I",
    },
    {
        name: "Availability",
        label: "可用性",
        description: "The property of ensuring that information is accessible when needed.",
        cybersecurityProperty: "Availability",
        cybersecurityPropertyShort: "A",
    },
    {
        name: "Accountability",
        label: "责任性",
        description: "The property of assigning responsibility for actions taken by individuals or entities.",
        cybersecurityProperty: "Accountability",
        cybersecurityPropertyShort: "Ac",
    },
    {
        name: "Authorization",
        label: "授权性",
        description: "The property of determining whether individuals or entities have the right to perform certain actions.",
        cybersecurityProperty: "Authorization",
        cybersecurityPropertyShort: "Zu",
    },
    {
        name: "Non-repudiation",
        label: "不可抵赖性",
        description: "The property of preventing individuals or entities from denying the authenticity of their actions.",
        cybersecurityProperty: "Non-repudiation",
        cybersecurityPropertyShort: "Nr",
    }
];
