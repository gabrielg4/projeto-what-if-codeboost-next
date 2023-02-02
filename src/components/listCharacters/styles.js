import { styled } from '../../styles';

export const StyleListCharacter = styled("div", {
    paddingTop: 56,
    paddingBottom: 52,
    ".title": {
        display: "flex",
        alignItems: "center",
        marginBottom: 56,
        span: {
            fontWeight: 400,
            fontSize: "1.8rem",
            lineHeight: "27px",
            color: "#FFFFFF",
            opacity: "0.4",
            marginRight: "11.3rem"
        },
        h2: {
            fontWeight: "600",
            fontSize: "2.5rem",
            lineHeight: "35px",
            color: "#FFFFFF",
            maxWidth: 216,
            position: "relative",
            paddingLeft: 16,
            "&:before": {
                content: "",
                backgroundColor: "$red800",
                width: 2,
                height: "5.9rem",
                position: "absolute",
                top: 5.5,
                left: 0,
            }
        }
    }
})

export const StyleListCharacters = styled("div", {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: "4rem 3.3rem",
    ".marvel": {
        width: "28rem",
        height: "36.8rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
})