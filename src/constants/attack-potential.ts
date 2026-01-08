import type { AttackPotentialCoreParameterOption, AttackPotentialCoreParameter, AttackPotentialCoreParameterShort, AttackPotentialCoreParameterLabel } from "../types/base/attack-potential";
import type { ElapsedTimeOption, ElapsedTime, ElapsedTimeLabel } from "../types/base/attack-potential";
import type { SpecialistExpertiseOption, SpecialistExpertise, SpecialistExpertiseLabel } from "../types/base/attack-potential";
import type { KnowledgeOfTheItemOrComponentOption, KnowledgeOfTheItemOrComponent, KnowledgeOfTheItemOrComponentLabel } from "../types/base/attack-potential";
import type { WindowOfOpportunityOption, WindowOfOpportunity, WindowOfOpportunityLabel } from "../types/base/attack-potential";
import type { EquipmentOption, Equipment, EquipmentLabel } from "../types/base/attack-potential";
import type { AttackPotentialAggregation, AttackPotentialAggregationValue } from "../types/base/attack-potential";

/**
 * 攻击潜力核心参数选项（Attack Potential Core Parameter Options）
 */
export const AttackPotentialCoreParameterOptions: AttackPotentialCoreParameterOption[] = [
    {
        id: 1,
        parameter: "elapsed time",
        parameterShort: "ET",
        parameterLabel: "耗费时间",
    },
    {
        id: 2,
        parameter: "specialist expertise",
        parameterShort: "SE",
        parameterLabel: "专业技能",
    },
    {
        id: 3,
        parameter: "specialist expertise",
        parameterShort: "SE",
        parameterLabel: "专项知识",
    },
    {
        id: 4,
        parameter: "window of opportunity",
        parameterShort: "WoO",
        parameterLabel: "机会窗口",
    },
    {
        id: 5,
        parameter: "equipment",
        parameterShort: "Eq",
        parameterLabel: "设备支持",
    },
];

/**
 * 获取攻击潜力核心参数标签（Get Attack Potential Core Parameter Label）
 * @param parameter 攻击潜力核心参数（Attack Potential Core Parameter）
 * @returns 攻击潜力核心参数标签（Attack Potential Core Parameter Label）
 */
export const getAttackPotentialCoreParameterLabel = (parameter: AttackPotentialCoreParameter): AttackPotentialCoreParameterLabel => {
    const option = AttackPotentialCoreParameterOptions.find((item) => item.parameter === parameter);
    if (!option) {
        throw new Error(`Attack potential core parameter ${parameter} invalid`);
    }
    return option.parameterLabel;
};

/**
 * 获取攻击潜力核心参数简称（Get Attack Potential Core Parameter Short）
 * @param parameter 攻击潜力核心参数（Attack Potential Core Parameter）
 * @returns 攻击潜力核心参数简称（Attack Potential Core Parameter Short）
 */
export const getAttackPotentialCoreParameterShort = (parameter: AttackPotentialCoreParameter): AttackPotentialCoreParameterShort => {
    const option = AttackPotentialCoreParameterOptions.find((item) => item.parameter === parameter);
    if (!option) {
        throw new Error(`Attack potential core parameter ${parameter} invalid`);
    }
    return option.parameterShort;
};

/**
 * 获取攻击潜力核心参数（Get Attack Potential Core Parameter）
 * @param label 攻击潜力核心参数标签（Attack Potential Core Parameter Label）
 * @returns 攻击潜力核心参数（Attack Potential Core Parameter）
 */
export const getAttackPotentialCoreParameter = (label: AttackPotentialCoreParameterLabel): AttackPotentialCoreParameter => {
    const option = AttackPotentialCoreParameterOptions.find((item) => item.parameterLabel === label);
    if (!option) {
        throw new Error(`Attack potential core parameter ${label} invalid`);
    }
    return option.parameter;
};

/**
 * 耗费时间选项（Elapsed Time Option）
 */
export const ElapsedTimeOptions : ElapsedTimeOption[] = [
    {
        id: 1,
        parameter: "<=1 day",
        parameterLabel: "<=1 天",
    },
    {
        id: 2,
        parameter: "<=1 week",
        parameterLabel: "<=1 周",
    },
    {
        id: 3,
        parameter: "<=1 month",
        parameterLabel: "<=1 个月",
    },
    {
        id: 4,
        parameter: "<=6 months",
        parameterLabel: "<=6 个月",
    },
    {
        id: 5,
        parameter: ">6 months",
        parameterLabel: ">6 个月",
    },
];

/**
 * 获取耗费时间标签（Get Elapsed Time Label）
 * @param parameter 耗费时间（Elapsed Time）
 * @returns 耗费时间标签（Elapsed Time Label）
 */
export const getElapsedTimeLabel = (parameter: ElapsedTime): ElapsedTimeLabel => {
    const option = ElapsedTimeOptions.find((item) => item.parameter === parameter);
    if (!option) {
        throw new Error(`Elapsed time ${parameter} invalid`);
    }
    return option.parameterLabel;
};

/**
 * 获取耗费时间（Get Elapsed Time）
 * @param label 耗费时间标签（Elapsed Time Label）
 * @returns 耗费时间（Elapsed Time）
 */
export const getElapsedTime = (label: ElapsedTimeLabel): ElapsedTime => {
    const option = ElapsedTimeOptions.find((item) => item.parameterLabel === label);
    if (!option) {
        throw new Error(`Elapsed time ${label} invalid`);
    }
    return option.parameter;
};

/**
 * 获取耗费时间值（Get Elapsed Time Value）
 * @param elapsedTime 耗费时间（Elapsed Time）
 * @returns 耗费时间值（Elapsed Time Value）
 */
export const getElapsedTimeValue = (elapsedTime: ElapsedTime): number => {
    switch (elapsedTime) {
        case "<=1 day":
            return 0;
        case "<=1 week":
            return 1;
        case "<=1 month":
            return 4;
        case "<=6 months":
            return 17;
        case ">6 months":
            return 19;
        default:
            throw new Error(`Elapsed time ${elapsedTime} invalid`);
    }
}

/**
 * 专业技能选项（Specialist Expertise Option）
 */
export const SpecialistExpertiseOptions : SpecialistExpertiseOption[] = [
    {
        id: 1,
        parameter: "Layman",
        parameterLabel: "新手",
    },
    {
        id: 2,
        parameter: "Proficient",
        parameterLabel: "专业人员",
    },
    {
        id: 3,
        parameter: "Expert",
        parameterLabel: "专家",
    },
    {
        id: 4,
        parameter: "Multiple experts",
        parameterLabel: "多个专家",
    },
];

/**
 * 获取专业技能标签（Get Specialist Expertise Label）
 * @param parameter 专业技能（Specialist Expertise）
 * @returns 专业技能标签（Specialist Expertise Label）
 */
export const getSpecialistExpertiseLabel = (parameter: SpecialistExpertise): SpecialistExpertiseLabel => {
    const option = SpecialistExpertiseOptions.find((item) => item.parameter === parameter);
    if (!option) {
        throw new Error(`Specialist expertise ${parameter} invalid`);
    }
    return option.parameterLabel;
};

/**
 * 获取专业技能（Get Specialist Expertise）
 * @param label 专业技能标签（Specialist Expertise Label）
 * @returns 专业技能（Specialist Expertise）
 */
export const getSpecialistExpertise = (label: SpecialistExpertiseLabel): SpecialistExpertise => {
    const option = SpecialistExpertiseOptions.find((item) => item.parameterLabel === label);
    if (!option) {
        throw new Error(`Specialist expertise ${label} invalid`);
    }
    return option.parameter;
};

/**
 * 获取专业技能值（Get Specialist Expertise Value）
 * @param specialistExpertise 专业技能（Specialist Expertise）
 * @returns 专业技能值（Specialist Expertise Value）
 */
export const getSpecialistExpertiseValue = (specialistExpertise: SpecialistExpertise): number => {
    switch (specialistExpertise) {
        case "Layman":
            return 0;
        case "Proficient":
            return 3;
        case "Expert":
            return 6;
        case "Multiple experts":
            return 8;
        default:
            throw new Error(`Specialist expertise ${specialistExpertise} invalid`);
    }
}

/**
 * 专项知识选项（Knowledge Of The Item Or Component Option）
 */
export const KnowledgeOfTheItemOrComponentOptions : KnowledgeOfTheItemOrComponentOption[] = [
    {
        id: 1,
        parameter: "Public information",
        parameterLabel: "公开信息",
    },
    {
        id: 2,
        parameter: "Restricted information",
        parameterLabel: "受限信息",
    },
    {
        id: 3,
        parameter: "Confidential information",
        parameterLabel: "机密信息",
    },
    {
        id: 4,
        parameter: "Strictly confidential information",
        parameterLabel: "严格机密信息",
    },
];

/**
 * 获取专项知识标签（Get Knowledge Of The Item Or Component Label）
 * @param parameter 专项知识（Knowledge Of The Item Or Component）
 * @returns 专项知识标签（Knowledge Of The Item Or Component Label）
 */
export const getKnowledgeOfTheItemOrComponentLabel = (parameter: KnowledgeOfTheItemOrComponent): KnowledgeOfTheItemOrComponentLabel => {
    const option = KnowledgeOfTheItemOrComponentOptions.find((item) => item.parameter === parameter);
    if (!option) {
        throw new Error(`Knowledge of the item or component ${parameter} invalid`);
    }
    return option.parameterLabel;
};

/**
 * 获取专项知识（Get Knowledge Of The Item Or Component）
 * @param label 专项知识标签（Knowledge Of The Item Or Component Label）
 * @returns 专项知识（Knowledge Of The Item Or Component）
 */
export const getKnowledgeOfTheItemOrComponent = (label: KnowledgeOfTheItemOrComponentLabel): KnowledgeOfTheItemOrComponent => {
    const option = KnowledgeOfTheItemOrComponentOptions.find((item) => item.parameterLabel === label);
    if (!option) {
        throw new Error(`Knowledge of the item or component ${label} invalid`);
    }
    return option.parameter;
};

/**
 * 获取专项知识值（Get Knowledge Of The Item Or Component Value）
 * @param knowledgeOfTheItemOrComponent 专项知识（Knowledge Of The Item Or Component）
 * @returns 专项知识值（Knowledge Of The Item Or Component Value）
 */
export const getKnowledgeOfTheItemOrComponentValue = (knowledgeOfTheItemOrComponent: KnowledgeOfTheItemOrComponent): number => {
    switch (knowledgeOfTheItemOrComponent) {
        case "Public information":
            return 0;
        case "Restricted information":
            return 3;
        case "Confidential information":
            return 7;
        case "Strictly confidential information":
            return 11;
        default:
            throw new Error(`Knowledge of the item or component ${knowledgeOfTheItemOrComponent} invalid`);
    }
}

/**
 * 机会窗口选项（Window Of Opportunity Option）
 */
export const WindowOfOpportunityOptions : WindowOfOpportunityOption[] = [
    {
        id: 1,
        parameter: "Unlimited",
        parameterLabel: "无限制",
    },
    {
        id: 2,
        parameter: "Easy",
        parameterLabel: "容易",
    },
    {
        id: 3,
        parameter: "Moderate",
        parameterLabel: "中等",
    },
    {
        id: 4,
        parameter: "Difficult",
        parameterLabel: "困难",
    },
];

/**
 * 获取机会窗口标签（Get Window Of Opportunity Label）
 * @param parameter 机会窗口（Window Of Opportunity）
 * @returns 机会窗口标签（Window Of Opportunity Label）
 */
export const getWindowOfOpportunityLabel = (parameter: WindowOfOpportunity): WindowOfOpportunityLabel => {
    const option = WindowOfOpportunityOptions.find((item) => item.parameter === parameter);
    if (!option) {
        throw new Error(`Window of opportunity ${parameter} invalid`);
    }
    return option.parameterLabel;
};

/**
 * 获取机会窗口（Get Window Of Opportunity）
 * @param label 机会窗口标签（Window Of Opportunity Label）
 * @returns 机会窗口（Window Of Opportunity）
 */
export const getWindowOfOpportunity = (label: WindowOfOpportunityLabel): WindowOfOpportunity => {
    const option = WindowOfOpportunityOptions.find((item) => item.parameterLabel === label);
    if (!option) {
        throw new Error(`Window of opportunity ${label} invalid`);
    }
    return option.parameter;
};

/**
 * 获取机会窗口值（Get Window Of Opportunity Value）
 * @param windowOfOpportunity 机会窗口（Window Of Opportunity）
 * @returns 机会窗口值（Window Of Opportunity Value）
 */
export const getWindowOfOpportunityValue = (windowOfOpportunity: WindowOfOpportunity): number => {
    switch (windowOfOpportunity) {
        case "Unlimited":
            return 0;
        case "Easy":
            return 1;
        case "Moderate":
            return 4;
        case "Difficult":
            return 10;
        default:
            throw new Error(`Window of opportunity ${windowOfOpportunity} invalid`);
    }
}

/**
 * 设备支持选项（Equipment Option）
 */
export const EquipmentOptions : EquipmentOption[] = [
    {
        id: 1,
        parameter: "Standard",
        parameterLabel: "标准设备",
    },
    {
        id: 2,
        parameter: "Specialized",
        parameterLabel: "专业设备",
    },
    {
        id: 3,
        parameter: "Bespoke",
        parameterLabel: "定制设备",
    },
    {
        id: 4,
        parameter: "Multiple bespoke",
        parameterLabel: "多个定制设备",
    },
];

/**
 * 获取设备支持标签（Get Equipment Label）
 * @param parameter 设备支持（Equipment）
 * @returns 设备支持标签（Equipment Label）
 */
export const getEquipmentLabel = (parameter: Equipment): EquipmentLabel => {
    const option = EquipmentOptions.find((item) => item.parameter === parameter);
    if (!option) {
        throw new Error(`Equipment ${parameter} invalid`);
    }
    return option.parameterLabel;
};

/**
 * 获取设备支持（Get Equipment）
 * @param label 设备支持标签（Equipment Label）
 * @returns 设备支持（Equipment）
 */
export const getEquipment = (label: EquipmentLabel): Equipment => {
    const option = EquipmentOptions.find((item) => item.parameterLabel === label);
    if (!option) {
        throw new Error(`Equipment ${label} invalid`);
    }
    return option.parameter;
};

/**
 * 获取设备支持值（Get Equipment Value）
 * @param equipment 设备支持（Equipment）
 * @returns 设备支持值（Equipment Value）
 */
export const getEquipmentValue = (equipment: Equipment): number => {
    switch (equipment) {
        case "Standard":
            return 0;
        case "Specialized":
            return 4;
        case "Bespoke":
            return 7;
        case "Multiple bespoke":
            return 9;
        default:
            throw new Error(`Equipment ${equipment} invalid`);
    }
}

/**
 * 获取攻击潜力聚合值（Get Attack Potential Aggregation Value）
 * @param attackPotentialAggregation 攻击潜力聚合（Attack Potential Aggregation）
 * @returns 攻击潜力聚合值（Attack Potential Aggregation Value）
 */
export const getAttackPotentialAggregationValue = (attackPotentialAggregation: AttackPotentialAggregation): AttackPotentialAggregationValue => {
    const elapsedTimeValue = getElapsedTimeValue(attackPotentialAggregation.elapsedTime);
    const specialistExpertiseValue = getSpecialistExpertiseValue(attackPotentialAggregation.specialistExpertise);
    const knowledgeOfTheItemOrComponentValue = getKnowledgeOfTheItemOrComponentValue(attackPotentialAggregation.knowledgeOfTheItemOrComponent);
    const windowOfOpportunityValue = getWindowOfOpportunityValue(attackPotentialAggregation.windowOfOpportunity);
    const equipmentValue = getEquipmentValue(attackPotentialAggregation.equipment);
    const value = elapsedTimeValue + specialistExpertiseValue + knowledgeOfTheItemOrComponentValue + windowOfOpportunityValue + equipmentValue;
    
    return {
        elapsedTimeValue,
        specialistExpertiseValue,
        knowledgeOfTheItemOrComponentValue,
        windowOfOpportunityValue,
        equipmentValue,
        value,
    };
}
