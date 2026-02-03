"use client"
import { useState, useEffect, useCallback, useContext } from "react";
import { searchGeoCaches } from "@/old/api/geocaches";
import styles from "./HomePage.module.scss";
import { Geocache } from "@/old/model/Geocache";
import GeocacheList from "@/old/components/GeocacheList";
import { Button } from "react-bootstrap";
import Spinner from "@/old/components/Spinner";
import UserContext from "@/old/context/UserContext";


const TAKE_AMOUNT = 6;

const HomePage = () => {

    const [geocaches, setGeocaches] = useState<Array<Geocache>>([]);
    const [cachesIndex, setCachesIndex] = useState(0);
    const [loadingCaches, setLoadingCaches] = useState(false);
    const { user } = useContext(UserContext);
    const fetchMoreCaches = useCallback(async () => {
        setLoadingCaches(true);
        const newCaches = await searchGeoCaches({}, "newest", cachesIndex, TAKE_AMOUNT);
        setGeocaches([...geocaches, ...newCaches]);
        setCachesIndex(cachesIndex + TAKE_AMOUNT);
        setLoadingCaches(false);
    }, [cachesIndex, geocaches]);

    useEffect(() => {
        if (cachesIndex == 0) {
            fetchMoreCaches();
        }
    }, [cachesIndex, fetchMoreCaches]);


    return (
        <>
            <div className={styles["home-page-banner-container"]}>
                <img src="/gcfi-frontpage-banner.jpg" className={styles["home-page-banner"]}></img>
                <h1 className={styles["home-page-banner-title"]}>Tervetuloa geokätköilemään</h1>
            </div>
            <div className={styles["home-page-content"]}>
                {
                    user && !loadingCaches ? <>
                        <div className={styles["feed-section"]}>
                            <div className={styles["feed-header"]}>
                                <h3>Uusimmat geokätköt</h3>
                            </div>
                            <GeocacheList geocaches={geocaches} />
                            {loadingCaches && <Spinner />}
                            <Button disabled={loadingCaches} variant="light" className={styles["load-button"]} onClick={fetchMoreCaches}>Näytä lisää</Button>
                        </div>
                        <div className={styles["feed-section"]}>
                            <div className={styles["feed-header"]}>
                                <h3>Tulevat miitit</h3>
                            </div>
                            <p>Miitti-dataa</p>
                            <Button variant="light" className={styles["load-button"]}>Näytä lisää</Button>
                        </div>
                    </> : <>
                    <div className={'text-3xl font-bold'}>
                        Kirjaudu sisään nähdäksesi geokätköjä!
                    </div>
                    </>
                }
                
            </div>
        </>
    );
};

export default HomePage;
