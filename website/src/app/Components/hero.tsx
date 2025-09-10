import { Component } from "react";

type Props = {

}
type State = {

}

class Hero extends Component<Props, State> {
    render() {
        return(
            <>
            <div className="hero bg-base-200 h-96">
            <div className="hero-content text-base-content text-center">
                <div>
                <h1 className="text-5xl font-semibold mb-5">Hasan Ali</h1>
                <p className="mb-5">Computer Science Student</p>
                </div>
            </div>
            </div>
            </>
        );
    }
}
export default Hero;