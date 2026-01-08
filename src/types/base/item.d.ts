import type { Component } from "./component";

/**
 * 整件（Item）
 * @property {string} name - 整件名称
 * @property {string} label - 整件标签
 * @property {string} description - 整件描述
 * @property {Component[]} components - 组件列表
 */
export declare interface Item {
    name: string;
    label: string;
    description: string;
    components: Component[];
}

/**
 * 非开发的整件（Out-of-Context Item）
 * @description 不需要开发的特殊整件（自身已满足网络安全要求），可被其他整件可信地集成。
 * @property {boolean} notDeveloped - 非开发标志，值为 true
 */
export declare interface OutOfContextItem extends Item {
    notDeveloped: true;
}
