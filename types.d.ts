export interface Props {
    categories: [Category]
  }

export interface Category {
    title: string;
    description: string;
    slug: {
        current: string;
    }
}

export interface Service {
    title: string;
    description: string;
    slug: {
        current: string;
    };
    price: number;
    category: {object};
    images: [object]
}