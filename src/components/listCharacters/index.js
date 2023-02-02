import Image from 'next/image';
import { CardCharacter } from '../cardCharacter';

import { Container } from "../../styles/global";
import { StyleListCharacter, StyleListCharacters } from "./styles";
import ImageCharacter from '../../assets/character.jpg'

import LogoMarvel from '../../assets/logo.svg';

const characters = [
    {
        name: "Killmonger",
        image: ImageCharacter,
        slug: "/killmonger"
    },
    {
        name: "Captain Carter",
        image: ImageCharacter,
        slug: "/captain-carter"
    },
    {
        name: "Captain Carter",
        image: ImageCharacter,
        slug: "/captain-carter"
    },
    {
        name: "Captain Carter",
        image: ImageCharacter,
        slug: "/captain-carter"
    },
    {
        name: "Captain Carter",
        image: ImageCharacter,
        slug: "/captain-carter"
    },
    {
        name: "Captain Carter",
        image: ImageCharacter,
        slug: "/captain-carter"
    },
    {
        name: "Captain Carter",
        image: ImageCharacter,
        slug: "/captain-carter"
    },
]


export function ListCharacters() {
    return (
        <StyleListCharacter>
            <Container>
                <div className="title">
                    <span>What if</span>
                    <h2>Personagens Marvel</h2>
                </div>
                <StyleListCharacters>
                        {
                            characters.map(({name, image, slug}) => {
                                return (
                                    <CardCharacter 
                                        key={name} 
                                        image={image} 
                                        slug={slug}
                                        name={name} 
                                    />
                                )
                            })
                        }
                    <div className="marvel">
                        <Image src={ LogoMarvel } alt="Logo marvel studios" />
                    </div>
                </StyleListCharacters>
            </Container>
        </StyleListCharacter>
    )
}