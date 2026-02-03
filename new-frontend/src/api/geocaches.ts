"use client"
import { Geocache, GeocacheMapDetails } from "@/old/model/Geocache";
import { Filters } from "@/old/model/Filters";
import axiosPublic from "@/old/utils/axiosPublic";

export interface SearchRequest{
    filters: Filters
    orderBy?: "newest"
    skip?: number
    take?: number
}

export const getGeoCaches = async (filters?: Filters) => {
    const geocaches = await axiosPublic.get(`/geocaches`, {params: filters});
    return geocaches.data as Array<Geocache>;
};

export const getCache = async (id: string) => {
    const path = "/geocaches/" + id;
    const response = await axiosPublic.get(path);
    return response.data as Geocache;
};

export const searchGeoCaches = async (filters: Filters, orderBy?: string, skip?: number, take?: number): Promise<Array<Geocache>> => {
    const response = await axiosPublic.post("/geocaches/search", {
        filters,
        orderBy,
        skip,
        take
    } as SearchRequest);
    return response.data as Array<Geocache>;
};

export const searchGeoCacheMapDetails = async (filters: Filters, orderBy?: string): Promise<Array<GeocacheMapDetails>> => {
    const response = await axiosPublic.post("/geocaches/mapsearch", {
        filters,
        orderBy
    } as SearchRequest);
    return response.data as Array<GeocacheMapDetails>;
};
