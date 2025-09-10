import { Component, ReactNode } from "react";
import { Project } from "./interfaces";

type Props = {
    project:Project;
}

class CardBody extends Component<Props,{}>{
    render(){
        let project = this.props.project;
        return(
            <div id={project.id} className="card-body">
            <div className="card-title">{project.title}</div>
            <p>{project.year}, {project.description}</p>
            <div className="card-actions justify-end">
                <a href={project.link} className="btn btn-soft btn-success">Preview</a>
                <a href={project.link} className="btn btn-soft btn-success">Go To Repo</a>
            </div>
            </div>
        );
    }
}

export default CardBody;