import { Component, ReactNode } from "react";
import CardBody from "./cardbody";
import { Project } from "./interfaces";


type Props = {
    project:Project;
}

class Card extends Component<Props,{}>{
    render(){
        let project = this.props.project;
        return(
            <>
                <div className="card card-side w-full rounded-3xl">
                    {project.image!=undefined &&
                    <figure>
                    <img
                        src={project.image}
                        className="w-25"
                        alt="Icon" />
                    </figure>
                    }
                    <CardBody
                    project={project}
                    />
                </div>
            </>
        );        
    }
}
export default Card;