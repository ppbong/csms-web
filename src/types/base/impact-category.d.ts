/**
 *  影响类别（Impact Category）
 * @description 包含安全影响（Safety）、财产影响（Financial）、运行影响（Operational）、隐私影响（Privacy）
 */
export declare type ImpactCategory = "Safety" | "Financial" | "Operational" | "Privacy"

/**
 *  影响类别缩写（Impact Category Short）
 * @description 包含安全影响缩写（S）、财产影响缩写（F）、运行影响缩写（O）、隐私影响缩写（P）
 */
export declare type ImpactCategoryShort = "S" | "F" | "O" | "P"

/**
 *  影响类别详情（Impact Category Detail）
 * @property {string} name - 影响类别名称
 * @property {string} label - 影响类别标签
 * @property {string} description - 影响类别描述
 * @property {ImpactCategory} impactCategory - 影响类别
 * @property {ImpactCategoryShort} impactCategoryShort - 影响类别缩写
 */
export declare interface ImpactCategoryDetail {
    name: string;
    label: string;
    description: string;
    impactCategory: ImpactCategory;
    impactCategoryShort: ImpactCategoryShort;
}
