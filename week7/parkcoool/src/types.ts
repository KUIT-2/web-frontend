export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    onStock: boolean;
}

export interface ModalState {
    title: string;
    enabled: boolean;
    product: Product;
}

export interface Filter {
    searchQuery: string;
    onStock: boolean;
}
