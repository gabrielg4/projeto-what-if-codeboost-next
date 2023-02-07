import Link from "next/link";
import Image from "next/image";
import { StyleNotFound } from "./styles";
import { Container } from '../../styles/global'

import ImageNotFound from '../../assets/image-not-found.png'

export function ComponentNotFound() {
    return (
        <StyleNotFound>
            <Container>
                <h1>Whoops, essa página sumiu.</h1>
                <p>OHHH, parece que não conseguimos encontrar a página que você está procurando. Tente voltar à página anterior ou consulte nossa Central de Ajuda para obter mais informações.</p>
                <Link href="/">Voltar</Link>
                <Image src={ ImageNotFound } alt="Imagem not found" />
            </Container>
        </StyleNotFound>
    )
}