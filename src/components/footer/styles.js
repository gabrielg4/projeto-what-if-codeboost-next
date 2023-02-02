import { styled } from "../../styles";
import { Container } from "../../styles/global";

export const StyleFooter = styled("footer", {

   padding: "4rem 0",
    [`${Container}`]: {
        borderTop: "1px solid rgba(255, 255, 255, 0.2);",
        paddingTop: "4rem",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        "& > div": {
            display: "flex",
            alignItems: "flex-start",
            strong: {
                fontWeight: "700",
                fontSize: "1.4rem",
                lineHeight: "21px",
            },
            p: {
                maxWidth: 593,
                marginLeft: "18.6rem",
                flex: 1,
                fontwWeight: "400",
                fontSize: "1.4rem",
                lineHeight: "21px",
                color: "$grey500",
            }
        }
    }
})