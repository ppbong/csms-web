import type { Component } from "./component";
import type { Item } from "./item";

/**
 * 网络安全事件（Cybersecurity Event）
 * @property {string} name - 事件名称
 * @property {string} label - 事件标签
 * @property {string} description - 事件描述
 * @property {Component | Item} relevant - 相关组件或整件
 */
export declare interface CybersecurityEvent {
    name: string;
    label: string;
    description: string;
    relevant: Component | Item;
}
