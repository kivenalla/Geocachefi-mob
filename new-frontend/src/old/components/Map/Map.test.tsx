// import Map from "./Map";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MapContainerWrapper } from "@/old/context/MapContainerWrapper";
import Map from '@/old/components/Map';

test("component loads", async () => {
    
    render(
        <MapContainerWrapper>
            <Map geocaches={[]} />
        </MapContainerWrapper>
    );
    expect(screen.getByText("OpenStreetMap")).toBeVisible();
});
