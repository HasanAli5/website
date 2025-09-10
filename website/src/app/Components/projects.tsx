import { Component } from "react";
import Card from "./card";
import { scrambord } from "./data";

class Projects extends Component<{},{}> {
    render() {
        return(
            <>
                <h2 className="text-3xl px-5 font-bold">Projects</h2>
                <div className="m-5 p-5 flex flex-col gap-2">
                <Card
                    project={scrambord}
                />
                </div>
            </>
        );
    }
}
export default Projects;