/**
 * 架构组件（Architectural Components）
 * @property {string} name - 架构组件名称
 * @property {string} label - 架构组件标签
 * @property {string} description - 架构组件描述
 */
export declare interface ArchitecturalComponent {
    name: string;
    label: string;
    description: string;
}

/**
 * 架构组件边界（Architectural Component Boundaries）
 * @property {string} name - 架构组件边界名称
 * @property {string} label - 架构组件边界标签
 * @property {string} description - 架构组件边界描述
 */
export declare interface ArchitecturalComponentBoundary {
    name: string;
    label: string;
    description: string;
}

/**
 * 架构组件接口（Architectural Component Interfaces）
 * @property {string} name - 架构组件接口名称
 * @property {string} label - 架构组件接口标签
 * @property {string} description - 架构组件接口描述
 */
export declare interface ArchitecturalComponentInterface {
    name: string;
    label: string;
    description: string;
}

/**
 * 架构组件交互（Architectural Component Interactions）
 * @property {string} name - 架构组件交互名称
 * @property {string} label - 架构组件交互标签
 * @property {string} description - 架构组件交互描述
 */
export declare interface ArchitecturalComponentInteraction {
    name: string;
    label: string;
    description: string;
}

/**
 * 架构设计（Architectural Design）
 * @property {string} name - 架构设计名称
 * @property {string} label - 架构设计标签
 * @property {string} description - 架构设计描述
 * @property {ArchitecturalComponent[]} components - 架构组件列表
 * @property {ArchitecturalComponentBoundary[]} boundaries - 架构组件边界列表
 * @property {ArchitecturalComponentInterface[]} interfaces - 架构组件接口列表
 * @property {ArchitecturalComponentInteraction[]} interactions - 架构组件交互列表
 */
export declare interface ArchitecturalDesign {
    name: string;
    label: string;
    description: string;
    components: ArchitecturalComponent[];
    boundaries: ArchitecturalComponentBoundary[];
    interfaces: ArchitecturalComponentInterface[];
    interactions: ArchitecturalComponentInteraction[];
}
