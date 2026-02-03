"use client"
import Modal from "react-bootstrap/Modal";
import { GeoCacheTypeIconUrls, Geocache, defaultGeoCacheTypeIconUrl } from "@/old/model/Geocache";
// import { Link } from "react-router-dom";
import styles from "./GeocacheModal.module.scss";
import { useEffect, useState } from "react";
import { getCache } from "@/old/api/geocaches";
import Spinner from "@/old/components/Spinner";
import Link from "next/link";
import { Button } from "react-bootstrap";

const ICON_DIMENSIONS = [36 / 1.5, 27 / 1.5];

interface ModalProps {
    isOpen: boolean;
    toggle: () => void;
    cacheId: string | null;
    drawDistance: (coords: { lat: number; lng: number }) => void;
}

const GeocacheModal = (props: ModalProps) => {
    const [cache, setCache] = useState<Geocache | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (props.cacheId !== null) {
            setIsLoading(true);
            setError(null); 
            getCache(props.cacheId)
                .then(c => {
                    setCache(c);
                    setIsLoading(false);
                })
                .catch(err => {
                    setIsLoading(false);
                    if (err?.response?.status === 401) {
                        setError("Sinulla ei ole oikeutta tähän sisältöön.");
                    } else {
                        setError("Virhe tapahtui kätkön lataamisessa.");
                    }
                });
        }
    }, [props.cacheId]);

    const cacheSizeTranslations: Record<string, string> = {
        "Micro": "Mikro",
        "Small": "Pieni",
        "Regular": "Normaali",
        "Large": "Suuri",
        "Virtual": "Virtuaali",
        "Other": "Muu",
        "Unknown": "Tuntematon"
    };


    const handlePremiumCont = (isPremiumOnly: boolean) => {
        if (isPremiumOnly) {
            return (
                <div className={styles["flex-row bottom-space"]}>
                    <label className={styles["cache-attribute"]}>PREMIUM</label>
                </div>
            );
        }
    };

    const formatCoordinate = (coord?: number) => {
        if (coord === undefined) return "***";

        const deg = Math.trunc(coord);
        const minFloat = Math.abs((coord - deg) * 60);
        const min = Math.trunc(minFloat);
        const sec = (minFloat - min) * 60;

        return `${deg}° ${min}' ${sec.toFixed(2)}"`;
    };

    const formatTime = (num: number) => {
        return num < 10 ? `0${num}` : num.toString();
    };

    const formatDate = (rawDate: string) => {
        const date = new Date(rawDate);
        return `${formatTime(date.getDate())}.${formatTime(date.getMonth() + 1)}.${date.getFullYear()}`;
    };
    const setContent = () => {
        if (error) {
            return <div className={styles["error-message"]}>{error}</div>;
        }

        if (props.cacheId && cache && !isLoading) {
            return (
                <div>
                    <div className={styles["cache-name"]}>{cache.name}</div>
                    <hr  className="yellow-hr"/>
                    <div className={styles["cache-code bottom-space"]}>{`(${cache.referenceCode})`}</div>

                    {handlePremiumCont(cache.isPremiumOnly)}

                    <div className={styles["flex-row"]}>
                        <img width={ICON_DIMENSIONS[0]} height={ICON_DIMENSIONS[1]} src={GeoCacheTypeIconUrls[cache.type] || defaultGeoCacheTypeIconUrl} /> <div className="cache-text">{cache.type}</div>
                    </div>

                    <div className={styles["flex-row"]}>
                        <div className={styles["cache-attribute"]}>N</div><div className={styles["cache-text"]}>{formatCoordinate(cache.postedCoordinates.latitude)}</div>
                    </div>
                    <div className={styles["flex-row"]}>
                        <div className={styles["cache-attribute"]}>E</div> <div className={styles["cache-text"]}>{formatCoordinate(cache.postedCoordinates.longitude)}</div>
                    </div>
                    <div className={styles["cache-text bottom-space"]}>{cache.location.state}</div>

                    <div className={styles["flex-row"]}>
                        <div className={styles["cache-attribute"]}>Piilottaja:</div> <div className={styles["cache-text"]}>{cache.ownerAlias}</div>
                    </div>
                    <div className={styles["flex-row"]}>
                        <div className={styles["cache-attribute"]}>Piilotettu:</div> <div className={styles["cache-text"]}>{formatDate(cache.placedDate)}</div>
                    </div>

                    <div className={styles["flex-row"]}>
                        <div className={styles["cache-attribute"]}>Koko:</div> <div className={styles["cache-text"]}> {cache.geocacheSize?.name ? cacheSizeTranslations[cache.geocacheSize.name] : ""}</div>
                    </div>
                    <div className={styles["flex-row"]}>
                        <div className={styles["cache-attribute"]}>Vaikeus:</div> <div className={styles["cache-text"]}>{cache.difficulty}/5</div>
                    </div>
                    <div className={styles["flex-row"]}>
                        <div className={styles["cache-attribute"]}>Maasto:</div> <div className={styles["cache-text"]}>{cache.terrain}/5</div>
                    </div>
                    <br></br>

                    <div className={styles["button-column"]}>
                        <Link href={`/geocaches/${cache.referenceCode}`} className={styles["button-wrapper"]}>
                            <button type="button" className={styles["cache-button"]}>
                                Lisätietoja
                            </button>
                        </Link>

                        <Button
                            variant="light"
                            onClick={() => {
                                if (cache?.postedCoordinates) {
                                    props.drawDistance({
                                        lat: cache.postedCoordinates.latitude,
                                        lng: cache.postedCoordinates.longitude
                                    });
                                }
                                props.toggle();
                            }}
                            className={styles["distance-button"]}
                        >
                            Näytä etäisyys
                        </Button>

                    </div>


                </div>
            );
        }
        else {
            return (
                <div style={{display: "flex", alignItems: "center", "flexDirection": "column"}}>
                    <p>Ladataan...</p>
                    <Spinner />
                </div>
            );
        }
    };
    return (
        <Modal show={props.isOpen} onHide={props.toggle}>
            <Modal.Header
                closeButton className={`${styles["border-0"]}`}
                data-testid="cache-modal-header"
            >
            </Modal.Header>
            <Modal.Body>
                {setContent()}
            </Modal.Body>
        </Modal>
    );
};

export default GeocacheModal;