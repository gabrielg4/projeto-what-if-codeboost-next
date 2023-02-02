import { styled } from '../../styles';

export const StyleCard = styled("div", {
    width: "100%",
    maxWidth: "28rem",
    "&:hover": {
        ".image": {
            img: {
                transform: "scale(1.05)",
            }
        },
        ".info": {
            h3: {
                color: "$red800",
            }
        }
    },
    a: {
        display: "block",
    },
    ".image": {
        width: "100%",
        height: "37.2rem",
        marginBottom: "1.6rem",
        borderRadius: "5px",
        overflow: "hidden",
        img: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "all .3s ease"
        }
    },
    ".info": {
        display: "flex",
        justifyContent: "space-between",
        h3: {
            fontWeight: "600",
            fontSize: "1.8rem",
            lineHeight: "27px",
            color: "#FFFFFF",
            marginBottom: 4,
            transition: "all .3s ease"
        },
        span: {
            display: "block",
            fontWeight: "400",
            fontSize: "1.4rem",
            lineHeight: "21px",
            color: "#8C8A97",
            opacity: "0.4"
        }
    }
})