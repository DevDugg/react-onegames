import React from "react";
// Importing images
import death from "../images/death.png";
import ghost from "../images/ghost.png";
import last from "../images/last.png";
import sekiro from "../images/sekiro.png";
// Importing components
import GridItem from "./GridItem";

const Grid = ( { grid } ) => {
    return(
        <div className={ grid ? "grid" : "vertical" }>
            <div className="column">
                <GridItem img={ghost} title="GHOST OF TSUSHIMA" rating={92} />
                <GridItem img={death} title="Death Stranding" rating={92} />
                <GridItem img={last} title="The last of us part ||" rating={92} />
                <GridItem img={sekiro} title="Sekiro shadow die twice" rating={92} />
            </div>

            <div className="column">
                <GridItem img={death} title="Death Stranding" rating={92} />
                <GridItem img={last} title="The last of us part ||" rating={92} />
                <GridItem img={ghost} title="GHOST OF TSUSHIMA" rating={92} />
                <GridItem img={sekiro} title="Sekiro shadow die twice" rating={92} />
            </div>

            <div className="column">
                <GridItem img={sekiro} title="Sekiro shadow die twice" rating={92} />
                <GridItem img={last} title="The last of us part ||" rating={92} />
                <GridItem img={death} title="Death Stranding" rating={92} />
                <GridItem img={ghost} title="GHOST OF TSUSHIMA" rating={92} />
            </div>

            <div className="column">
                <GridItem img={sekiro} title="Sekiro shadow die twice" rating={92} />
                <GridItem img={ghost} title="GHOST OF TSUSHIMA" rating={92} />
                <GridItem img={last} title="The last of us part ||" rating={92} />
                <GridItem img={death} title="Death Stranding" rating={92} />
            </div>
        </div>
    );
}

export default Grid;