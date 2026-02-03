import "./AttributesFilter.scss";
import { ChangeEvent, useState } from "react";
import { Attributes } from "../../../model/Filters";
import MapFilterItem from "../../MapFilterItem";

interface Props {
    onChange: (attributes: Attributes) => void;
    attributes?: Attributes;
    eventKey: string;
}

interface AttributeData {
    key: keyof Attributes;
    title: string;
    opposite?: keyof Attributes;
}

const ATTRIBUTE_CONFIG: AttributeData[] = [
    { key: "abandonedStructureYes", title: "Raunioita", opposite: "abandonedStructureNo" },
    { key: "abandonedStructureNo", title: "Ei raunioita", opposite: "abandonedStructureYes" },
    { key: "available247Yes", title: "Käytettävissä ympäri vuorokauden", opposite: "available247No" },
    { key: "available247No", title: "Ei saatavilla ympäri vuorokauden", opposite: "available247Yes" },
    { key: "bicyclesYes", title: "Soveltuu polkupyörille", opposite: "bicyclesNo" },
    { key: "bicyclesNo", title: "Ei sovellu polkupyörille", opposite: "bicyclesYes" },
    { key: "difficultClimbYes", title: "Vaikea nousu", opposite: "difficultClimbNo" },
    { key: "difficultClimbNo", title: "Ei vaikeaa nousua", opposite: "difficultClimbYes" },
    { key: "fieldPuzzleYes", title: "Field puzzle", opposite: "fieldPuzzleNo" },
    { key: "fieldPuzzleNo", title: "Ei field puzzlea", opposite: "fieldPuzzleYes" },
    { key: "shortHikeYes", title: "Lyhyt, alle 1 km:n matka", opposite: "shortHikeNo" },
    { key: "shortHikeNo", title: "Vähintään 1 km:n matka", opposite: "shortHikeYes" },
    { key: "nightCacheYes", title: "Käyntiä suositellaan yöllä", opposite: "nightCacheNo" },
    { key: "nightCacheNo", title: "Yökäyntiä ei suositella", opposite: "nightCacheYes" },
    { key: "parkingNearbyYes", title: "Pysäköintialue", opposite: "parkingNearbyNo" },
    { key: "parkingNearbyNo", title: "Ei parkkipaikkaa", opposite: "parkingNearbyYes" },
    { key: "parkAndGrabYes", title: "Drive-in -kätkö", opposite: "parkAndGrabNo" },
    { key: "parkAndGrabNo", title: "Ei drive-in -kätkö", opposite: "parkAndGrabYes" },
    { key: "teamworkCacheYes", title: "Tiimityökätkö", opposite: "teamworkCacheNo" },
    { key: "teamworkCacheNo", title: "Ei ryhmätyökätköä", opposite: "teamworkCacheYes" },
    { key: "treeClimbingYes", title: "Puuhunkiipeämiskätkö", opposite: "treeClimbingNo" },
    { key: "treeClimbingNo", title: "Ei puukiipeilykätköä", opposite: "treeClimbingYes" },
    { key: "winterYes", title: "Löytyy myös lumisena aikana", opposite: "winterNo" },
    { key: "winterNo", title: "Ei löydy lumisena aikana", opposite: "winterYes" },
];

const DEFAULT_DISPLAY_VALUE = false;

const getIsDisabled = (oppositeKey: keyof Attributes | undefined, attributes?: Attributes): boolean => {
    if (oppositeKey && attributes?.[oppositeKey]) {
        return true;
    }
    return false;
};

const AttributesFilter = ({ onChange, attributes, eventKey }: Props) => {
    const [attrArray] = useState(ATTRIBUTE_CONFIG);

    const modifyAttributes = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name as keyof Attributes;
        const value = e.target.checked;

        onChange({
            ...attributes,
            [name]: value,
        });
    };

    return (
        <MapFilterItem header="Attribuutit" eventKey={eventKey}>
            <div className="check-box-filters">
                {attrArray.map((attr) => {
                    const isDisabled = getIsDisabled(attr.opposite, attributes);
                    const isChecked = attributes?.[attr.key] || DEFAULT_DISPLAY_VALUE;

                    return (
                        <div key={attr.key} className="check-box-filters">
                            <div className={isDisabled ? "check-box-filter disabled" : "check-box-filter"}>
                                <input
                                    id={attr.key}
                                    type="checkbox"
                                    name={attr.key}
                                    onChange={modifyAttributes}
                                    disabled={isDisabled}
                                    checked={isChecked}
                                />
                                <label htmlFor={attr.key}>{attr.title}</label>
                            </div>
                        </div>
                    );
                })}
            </div>
        </MapFilterItem>
    );
};

export default AttributesFilter;
