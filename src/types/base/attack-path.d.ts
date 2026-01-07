/**
 * 攻击路径节点（Attack Path Node）
 * @property {string} code - 攻击路径节点编码
 * @property {string} name - 攻击路径节点名称
 * @property {string} label - 攻击路径节点标签
 * @property {string} description - 攻击路径节点描述
 * @property {boolean} isRoot - 是否为根节点（默认值：false）
 * @property {boolean} isLeaf - 是否为叶节点（默认值：false）
 * @property {AttackNode[]} children - 子节点列表（默认值：[]）
 * @property {AttackNode} parent - 父节点（默认值：null）
 */
export declare interface AttackNode {
    code: string;
    name: string;
    label: string;
    description: string;
    isRoot: boolean;
    isLeaf: boolean;
    children?: AttackNode[] | [];
    parent?: AttackNode | null;
}

/**
 * 攻击路径（Attack Path）
 * @property {string} code - 攻击路径编码
 * @property {string} name - 攻击路径名称
 * @property {string} label - 攻击路径标签
 * @property {string} description - 攻击路径描述
 * @property {AttackNode[]} nodes - 攻击路径节点列表
 */
export declare interface AttackPath {
    code: string;
    name: string;
    label: string;
    description: string;
    nodes: AttackNode[];
}

/**
 * 攻击路径树（Attack Path Tree）
 * @property {string} code - 攻击路径树编码
 * @property {string} name - 攻击路径树名称
 * @property {string} label - 攻击路径树标签
 * @property {string} description - 攻击路径树描述
 * @property {AttackNode} root - 根节点（默认值：null）
 * @property {AttackNode[]} nodes - 攻击路径树节点列表（默认值：[]）
 * @property {AttackPath[]} attackPaths - 攻击路径列表（默认值：[]）
 */
export declare interface AttackPathTree {
    code: string;
    name: string;
    label: string;
    description: string;
    root?: AttackNode | null;
    nodes?: AttackNode[] | [];
    attackPaths?: AttackPath[] | [];
}
