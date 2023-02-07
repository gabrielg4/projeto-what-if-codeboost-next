import { styled } from '../../../styles';
import { Container } from '../../../styles/global';

export const SectionCharacterStyle = styled("section", {
    marginTop: "9.6rem",
    height: 631,
    borderBottom: "1px solid rgba(255, 255, 255, 0.2);",
    [`${Container}`]: {
        display: "flex",
        alignItems: "center",
        height: "100%",
        borderLeft: "1px solid rgba(255, 255, 255, 0.2);",
        right: "1px solid rgba(255, 255, 255, 0.2);"
    },
    ".image": {
        borderRadius: 6,
        overflow: "hidden",
        height: "63.1rem",
        img: {
            width: "100%",
            height: "100%",
            objectFit: "cover"
        }
    },
    ".info": {
        flex: 1,
        maxWidth: 650,
        marginLeft: 32,
        display: "flex",
        span: {
            display: "block",
            marginTop: "2rem",
            fontWeight: "400",
            fontSize: "1.8rem",
            lineHeight: "27px",
            color: "$grey400",
            opacity: "0.6",
        },
        "& > div": {
            flex: 1,
            maxWidth: 546,
            paddingLeft: 27,
            marginLeft: 19,
            position: "relative",
            "&:before": {
                content: "",
                position: "absolute",
                top: 12,
                left: 0,
                width: 4,
                height: 46,
                backgroundColor: "$red800"
            },
            h1: {
                fontWeight: 600,
                fontSize: "6.1rem",
                lineHeight: "71px",
                color:" #FFFFFF",
                marginBottom: 13,
            },
            p: {
                fontWeight: "400",
                fontSize: "1.6rem",
                lineHeight: "24px",
                color: "$grey400",
            }
        }
    }
})