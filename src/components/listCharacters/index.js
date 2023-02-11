import Image from 'next/image';
import { CardCharacter } from '../cardCharacter';

import { Container } from "../../styles/global";
import { StyleListCharacter, StyleListCharacters } from "./styles";
import ImageCharacter from '../../assets/character.jpg'

import LogoMarvel from '../../assets/logo.svg';


export function ListCharacters({ data }) {
    return (
        <StyleListCharacter>
            <Container>
                <div className="title">
                    <span>What if</span>
                    <h2>Personagens Marvel</h2>
                </div>
                <StyleListCharacters>
                        {
                            data.map(character  => {
                                return (
                                    <CardCharacter 
                                        key={character.id} 
                                        image={character.data.image_character.url} 
                                        slug={character.data.slug}
                                        name={character.data.name_character} 
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