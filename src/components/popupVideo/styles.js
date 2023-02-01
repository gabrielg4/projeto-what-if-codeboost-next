import { styled } from '../../styles';

import ThumbVideo from '../../assets/thumb-video.png';

export const StylePopupVideo = styled("div", {
    width: "100%",
    maxWidth: 312,
    span: {
        display: "block",
        fontWeight: 600,
        fontSize: "1.2rem",
        lineHeight: "18px",
        letterSpacing: "0.095em",
        color: "$grey100",
        marginBottom: "1.4rem"
    },
    button: {
        width: "100%",
        height: 179,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: 0,
        borderRadius: 10,
        background: `url(${ThumbVideo.src}) no-repeat center center`,
        "&:hover": {
            "& > div": {
                transform: "scale(1.1)",
            }
        },

        "& > div": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 47,
            height: 47,
            borderRadius: "50%",
            backgroundColor: "rgba(19, 19, 19, 0.8)",
            backdropFilter: "blur(2.5px)",
            transition: "all .3s ease"
        }

    }
})