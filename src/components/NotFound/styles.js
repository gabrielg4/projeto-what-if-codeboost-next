import {styled} from '../../styles';
import { Container } from '../../styles/global';

export const StyleNotFound = styled("div", {
    marginTop: 96,
    paddingTop: 95,
    paddingBottom: 150,
    [`${Container}`]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    h1: {
        fontWeight: 600,
        fontSize: "4.9rem",
        lineHeight: "5.9rem",
        marginBottom: 24,
    },
    p: {
        fontWeight: 400,
        fontSize: "1.6rem",
        lineHeight: "24px",
        textAlign: "center",
        maxWidth: "64.1rem",
        marginBottom: "4rem",
    },
    a: {
        display: "inline-block",
        padding: "1.5rem 7.3rem",
        backgroundColor: "$red900",
        borderRadius: "5px",
        fontWeight: "600",
        fontSize: "1.6rem",
        lineHeight: "24px",
        color: "#FFFFFF",
        marginBottom: "7.2rem",
        transition: "all .4s ease",
        "&:hover": {
            filter: "brightness(0.8)"
        }
    }
})