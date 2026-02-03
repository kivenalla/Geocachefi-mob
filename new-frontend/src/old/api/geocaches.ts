"use client"
import axios from "axios";
import { Geocache, GeocacheMapDetails } from "../model/Geocache";
import { Filters } from "../model/Filters";
import axiosPublic from "@/old/utils/axiosPublic";
import axiosAuth from "@/old/utils/axiosAuth";

export interface SearchRequest{
    filters: Filters
    orderBy?: "newest"
    skip?: number
    take?: number
}

export const getGeoCaches = async (filters?: Filters) => {
    const geocaches = await axiosAuth.get(`/geocaches`, {params: filters});
    return geocaches.data as Array<Geocache>;
};

export const getCache = async (id: string) => {
    const path = "/geocaches/" + id;
    const response = await axiosAuth.get(path);
    return response.data as Geocache;
};

export const searchGeoCaches = async (
    filters: Filters,
    orderBy?: string,
    skip?: number,
    take?: number
): Promise<Array<Geocache>> => {
    try {
        const response = await axiosAuth.post("/geocaches/search", {
            filters,
            orderBy,
            skip,
            take,
        } as SearchRequest);
        
        return response.data as Array<Geocache>;
    } catch (e: any) {
        if (axios.isAxiosError(e)) {
            if (e.response?.status === 401) {
                console.warn("Unauthorized request – user session may have expired.");
            } else {
                console.error("API error:", e.response?.status, e.response?.data || e.message);
            }
        } else {
            console.error("Unexpected error:", e);
        }
        
        return [];
    }
};

export const searchGeoCacheMapDetails = async (filters: Filters, orderBy?: string): Promise<Array<GeocacheMapDetails>> => {
    const response = await axiosAuth.post("/geocaches/mapsearch", {
        filters,
        orderBy
    } as SearchRequest);
    return response.data as Array<GeocacheMapDetails>;
};
