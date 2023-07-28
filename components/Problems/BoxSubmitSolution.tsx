import { CSSProperties } from "react";
import BoxContainer from "../BoxContainer";
import ButtonRedirect from "../ui/Button/ButtonRedirect";

interface Props {
    style?: CSSProperties;
}

const BoxSubmitSolution = ({ style }: Props) => (
    <BoxContainer style={style} >
        <ButtonRedirect redirectUrl="submit" variant="primary">
            Submit Solution
        </ButtonRedirect>
    </BoxContainer>
);

export default BoxSubmitSolution;
