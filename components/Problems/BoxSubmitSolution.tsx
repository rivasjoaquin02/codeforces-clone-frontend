import { CSSProperties } from "react";
import ButtonRedirect from "../ui/Button/ButtonRedirect";

interface Props {
    style?: CSSProperties;
}

const BoxSubmitSolution = ({ style }: Props) => (
    <div className="box-container box border glass" style={style}>
        <ButtonRedirect redirectUrl="submit" variant="secondary">
            Submit Solution
        </ButtonRedirect>
    </div>
);

export default BoxSubmitSolution;
