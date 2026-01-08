/**
 * 攻击潜力核心参数（Attack Potential Core Parameter）
 */
export declare type AttackPotentialCoreParameter =
    | "elapsed time"
    | "specialist expertise"
    | "knowledge of the item or component"
    | "window of opportunity"
    | "equipment";

/**
 * 攻击潜力核心参数缩写（Attack Potential Core Parameter Short）
 */
export declare type AttackPotentialCoreParameterShort = "ET" | "SE" | "KoIC" | "WoO" | "Eq";

/**
 * 攻击潜力核心参数标签（Attack Potential Core Parameter Label）
 */
export declare type AttackPotentialCoreParameterLabel = "耗费时间" | "专业技能" | "专项知识" | "机会窗口" | "设备支持";

/**
 * 攻击潜力核心参数选项（Attack Potential Core Parameter Option）
 * @property {number} id - 攻击潜力核心参数选项ID
 * @property {AttackPotentialCoreParameter} parameter - 攻击潜力核心参数
 * @property {AttackPotentialCoreParameterShort} parameterShort - 攻击潜力核心参数简称
 * @property {AttackPotentialCoreParameterLabel} parameterLabel - 攻击潜力核心参数标签
 */
export declare interface AttackPotentialCoreParameterOption {
    id: number;
    parameter: AttackPotentialCoreParameter;
    parameterShort: AttackPotentialCoreParameterShort;
    parameterLabel: AttackPotentialCoreParameterLabel;
}

/**
 * 耗费时间（Elapsed Time）
 */
export declare type ElapsedTime = "<=1 day" | "<=1 week" | "<=1 month" | "<=6 months" | ">6 months";

/**
 * 耗费时间标签（Elapsed Time Label）
 */
export declare type ElapsedTimeLabel = "<=1 天" | "<=1 周" | "<=1 个月" | "<=6 个月" | ">6 个月";

/**
 * 耗费时间选项（Elapsed Time Option）
 * @property {number} id - 耗费时间选项ID
 * @property {ElapsedTime} parameter - 耗费时间
 * @property {ElapsedTimeLabel} parameterLabel - 耗费时间标签
 */
export declare interface ElapsedTimeOption {
    id: number;
    parameter: ElapsedTime;
    parameterLabel: ElapsedTimeLabel;
}

/**
 * 专业技能（Specialist Expertise）
 */
export declare type SpecialistExpertise = "Layman" | "Proficient" | "Expert" | "Multiple experts";

/**
 * 专业技能标签（Specialist Expertise Label）
 */
export declare type SpecialistExpertiseLabel = "新手" | "专业人员" | "专家" | "多个专家";

/**
 * 专业技能选项（Specialist Expertise Option）
 * @property {number} id - 专业技能选项ID
 * @property {SpecialistExpertise} parameter - 专业技能
 * @property {SpecialistExpertiseLabel} parameterLabel - 专业技能标签
 */
export declare interface SpecialistExpertiseOption {
    id: number;
    parameter: SpecialistExpertise;
    parameterLabel: SpecialistExpertiseLabel;
}

/**
 * 专项知识（Knowledge Of The Item Or Component）
 */
export declare type KnowledgeOfTheItemOrComponent =
    | "Public information"
    | "Restricted information"
    | "Confidential information"
    | "Strictly confidential information";

/**
 * 专项知识标签（Knowledge Of The Item Or Component Label）
 */
export declare type KnowledgeOfTheItemOrComponentLabel = "公开信息" | "受限信息" | "机密信息" | "严格机密信息";

/**
 * 专项知识选项（Knowledge Of The Item Or Component Option）
 * @property {number} id - 专项知识选项ID
 * @property {KnowledgeOfTheItemOrComponent} parameter - 专项知识
 * @property {KnowledgeOfTheItemOrComponentLabel} parameterLabel - 专项知识标签
 */
export declare interface KnowledgeOfTheItemOrComponentOption {
    id: number;
    parameter: KnowledgeOfTheItemOrComponent;
    parameterLabel: KnowledgeOfTheItemOrComponentLabel;
}

/**
 * 机会窗口（Window Of Opportunity）
 */
export declare type WindowOfOpportunity = "Unlimited" | "Easy" | "Moderate" | "Difficult";

/**
 * 机会窗口标签（Window Of Opportunity Label）
 */
export declare type WindowOfOpportunityLabel = "无限制" | "容易" | "中等" | "困难";

/**
 * 机会窗口选项（Window Of Opportunity Option）
 * @property {number} id - 机会窗口选项ID
 * @property {WindowOfOpportunityOption} parameter - 机会窗口
 * @property {WindowOfOpportunityLabel} parameterLabel - 机会窗口标签
 */
export declare interface WindowOfOpportunityOption {
    id: number;
    parameter: WindowOfOpportunity;
    parameterLabel: WindowOfOpportunityLabel;
}

/**
 * 设备支持（Equipment）
 */
export declare type Equipment = "Standard" | "Specialized" | "Bespoke" | "Multiple bespoke";

/**
 * 设备支持标签（Equipment Label）
 */
export declare type EquipmentLabel = "标准设备" | "专业设备" | "定制设备" | "多个定制设备";

/**
 * 设备支持选项（Equipment Option）
 * @property {number} id - 设备支持选项ID
 * @property {Equipment} parameter - 设备支持
 * @property {EquipmentLabel} parameterLabel - 设备支持标签
 */
export declare interface EquipmentOption {
    id: number;
    parameter: Equipment;
    parameterLabel: EquipmentLabel;
}

/**
 * 攻击潜力聚合（Attack Potential Aggregation）
 * @property {ElapsedTime} elapsedTime - 耗费时间
 * @property {SpecialistExpertise} specialistExpertise - 专业技能
 * @property {KnowledgeOfTheItemOrComponent} knowledgeOfTheItemOrComponent - 专项知识
 * @property {WindowOfOpportunityOption} windowOfOpportunity - 机会窗口
 * @property {Equipment} equipment - 设备支持
 */
export declare interface AttackPotentialAggregation {
    elapsedTime: ElapsedTime;
    specialistExpertise: SpecialistExpertise;
    knowledgeOfTheItemOrComponent: KnowledgeOfTheItemOrComponent;
    windowOfOpportunity: WindowOfOpportunity;
    equipment: Equipment;
}

/**
 * 攻击潜力聚合值（Attack Potential Aggregation Value）
 * @property {number} elapsedTimeValue - 耗费时间值
 * @property {number} specialistExpertiseValue - 专业技能值
 * @property {number} knowledgeOfTheItemOrComponentValue - 专项知识值
 * @property {number} windowOfOpportunityValue - 机会窗口值
 * @property {number} equipmentValue - 设备支持值
 * @property {number} value - 攻击潜力值
 */
export declare interface AttackPotentialAggregationValue {
    elapsedTimeValue: number;
    specialistExpertiseValue: number;
    knowledgeOfTheItemOrComponentValue: number;
    windowOfOpportunityValue: number;
    equipmentValue: number;
    value: number;
}
