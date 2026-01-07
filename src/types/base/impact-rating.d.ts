/**
 *  影响等级（Impact Rating）
 * @description 包含严重影响（Severe）、较大影响（Major）、中等影响（Moderate）、轻微影响（Negligible）
 */
export declare type ImpactRating = "Severe" | "Major" | "Moderate" | "Negligible"

/**
 *  影响等级缩写（Impact Rating Short）
 * @description 包含严重影响缩写（SE）、较大影响缩写（MA）、中等影响缩写（MO）、轻微影响缩写（NE）
 */
export declare type ImpactRatingShort = "SE" | "MA" | "MO" | "NE"

/**
 *  影响等级详情（Impact Rating Detail）
 * @property {string} name - 影响等级名称
 * @property {string} label - 影响等级标签
 * @property {string} description - 影响等级描述
 * @property {ImpactRating} impactRating - 影响等级
 * @property {ImpactRatingShort} impactRatingShort - 影响等级缩写
 */
export declare interface ImpactRatingDetail {
    name: string;
    label: string;
    description: string;
    impactRating: ImpactRating;
    impactRatingShort: ImpactRatingShort;
}
