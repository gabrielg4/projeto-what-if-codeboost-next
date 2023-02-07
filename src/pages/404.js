import { ComponentNotFound } from "../components/NotFound"
import { PageTitle } from "../components/PageTitle"

export default function PageNotFound() {
    return (
        <>
            <PageTitle title="What if? - Codeboost | Página não encontrada"  description="um projeto desenvolvido no curso codeboost" />
            <ComponentNotFound />
        </>
    )
}