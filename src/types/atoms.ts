export interface buttonProperty {
    onClick?(e?: MouseEvent): void;
    className?: string;
}
export interface headerProperty {
    onClick?(e?: MouseEvent): void;
    className?: string;
}
export interface siderProperty {
    onClick?(e?: MouseEvent): void;
    className?: string;
}
export interface contentProperty {
    onClick?(e?: MouseEvent): void;
    className?: string;
}

export interface menuProperty {
    mode: 'horizontal' | 'vertical' | 'inline',
    onClick?(item: any): void;
    className?: string;
}
export interface h2Property {
    onClick?(): void;
    className?: string;
}
export interface h4Property {
    onClick?(): void;
    className?: string;
}
export interface divProperty {
    onClick?(): void;
    className?: string;
}
export interface spanProperty {
    onClick?(): void;
    className?: string;
}