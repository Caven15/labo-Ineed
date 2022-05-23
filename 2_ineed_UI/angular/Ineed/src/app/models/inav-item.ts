export interface INavItem {
    title: string;
    url?: string;
    isVisible? : boolean;
    children? : INavItem[
        //route enfants
    ];
    imgSrc?: string;
}
