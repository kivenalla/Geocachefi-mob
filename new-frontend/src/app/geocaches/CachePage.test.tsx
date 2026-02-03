import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as GeocacheApi from "../../api/geocaches";
import { BrowserRouter } from "react-router-dom";
import { Geocache } from "@/old/model/Geocache";

jest.mock("axios");

jest.mock("next/navigation", () => ({
  useParams: jest.fn().mockReturnValue({ cacheId: "zyx" }),
}));
jest.mock("@/old/images/gcfi.svg", () => "mocked-file.svg");
jest.mock("@/old/images/premium_on.png", () => "mocked-file.png");

import CachePage from "./index";

test("component loads", async () => {
    const cache: Geocache = {
        referenceCode: "zyx",
        name: "Esimerkkikätkö",
        placedDate: "",
        publishedDate: "",
        type: "multikätkö",
        size: "Joku",
        postedCoordinates: {
            latitude: 0,
            longitude: 0
        },
        lastVisitedDate: "",
        isPremiumOnly: false,
        shortDescription: "",
        longDescription: "",
        hints: "Ei vihjeitä",
        location: {
            country: "",
            countryId: 0,
            state: "",
            stateId: 0,
        },
        ownerAlias: "",
        difficulty: 0,
        terrain: 0
    };
    jest.spyOn(GeocacheApi, "getCache").mockResolvedValue(cache);
    // jest.spyOn(GeocacheApi, "getCache").mockImplementation(async () => {
    //     return cache;
    // });

    render(<CachePage />, { wrapper: BrowserRouter });
    await waitFor(() => {
        expect(screen.getByText("Kätkön id:tä ei annettu tai sitä ei löytynyt. Id: (zyx)")).toBeVisible();
    });

    /* We need to render with a parameter to make this second test
    
    render(<CachePage />, { wrapper: BrowserRouter });
    await waitFor(() => {
        expect(screen.getByText("Esimerkkikätkö")).toBeVisible();
    });
    */
});
