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
