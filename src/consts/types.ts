export interface Dimensions {
    width: number;
    height: number;
    depth: number;
  }
  
export interface Review {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }
  
  export interface Meta {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  }
  
  export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: Dimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: Meta;
    thumbnail: string;
    images: string[];
  }
  
  export interface ProductsResponse {
    products: Product[];
  }

  export interface NavItem {
    name: string;
    newColor: string;
  }
  
  export interface BannerItem {
    text: string;
    link: string;
    image: string;
  }
  
  export interface Data {
    navItems: NavItem[];
    menuItems: string[];
    titles: string[];
    bannerData: BannerItem[];
  }

  export const colors: string[] = ["#34a853", "#fbbc04", "#f28b82", "#fbbc10", "#f28b42"];

  export const titles: string[] = [
    "Random Generated Content 1",
    "Random Generated Content 2",
    "Random Generated Content 3",
  ];

  export interface ProductsState {
    value: any;
    products: ProductsResponse["products"];
    loading: boolean;
    error: string | null;
  }