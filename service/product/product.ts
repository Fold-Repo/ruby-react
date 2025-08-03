import { ENDPOINT } from "@/constants";
import { axiosNoAuth } from "@/lib";

export const getProducts = async (params = {}) => {
    const response = await axiosNoAuth.get(ENDPOINT.PRODUCT.PRODUCTS, {
        params
    });
    return response?.data;
};

export const getProductMetas = async () => {
    const response = await axiosNoAuth.get(ENDPOINT.PRODUCT.PRODUCT_METAS);
    return response?.data;
};

export const getProductId = async (id: string | number) => {
    const response = await axiosNoAuth.get(ENDPOINT.PRODUCT.PRODUCT_ID(id));
    return response?.data;
};

export const getRelatedProduct = async (id: string | number) => {
    const response = await axiosNoAuth.get(ENDPOINT.PRODUCT.RELATED(id));
    return response?.data;
};
