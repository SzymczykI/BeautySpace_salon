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