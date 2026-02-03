"use client";

import Link from "next/link";
import Image from "next/image";
import { Geocache, GeoCacheTypeIconUrls, defaultGeoCacheTypeIconUrl } from "@/old/model/Geocache";
import "@/old/styles/common.scss";
import "./GeocacheList.scss";
import GeocacheTitle from "@/old/components/GeocacheTitle";

interface Props {
    geocaches: Array<Geocache>;
}

const ICON_DIMENSIONS = [36 / 1.5, 27 / 1.5];

export default function GeocacheList({ geocaches }: Props) {
    return (
        <ul className="geocachelist">
            {geocaches.map((cache) => (
                <li key={cache.referenceCode}>
                    <Link href={`/geocaches/${cache.referenceCode}`}>
                        <div className="geocache-item">
                            <div className="flex-row">
                                <Image
                                    width={ICON_DIMENSIONS[0]}
                                    height={ICON_DIMENSIONS[1]}
                                    src={GeoCacheTypeIconUrls[cache.type] || defaultGeoCacheTypeIconUrl}
                                    alt={cache.type}
                                />
                                <GeocacheTitle date={new Date(cache.placedDate)} />
                            </div>
                            <hr className="yellow-hr" />
                            <b>{cache.name}</b>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
