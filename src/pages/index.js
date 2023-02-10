import { getPrismicClient } from '../service/prismic';
import { SectionHero } from '../components/home/sectionHero';
import { ListCharacters } from '../components/listCharacters';
import { PageTitle } from '../components/PageTitle';

export default function Home({ dataPage }) {
  return (
    <>
      <PageTitle title="What if? - Codeboost"  description="um projeto desenvolvido no curso codeboost"/>
      <SectionHero data={ dataPage }/>
      <ListCharacters />
      
    </>
  )
}

export const getStaticProps = async () => {
  const prismic = getPrismicClient();

  const contentsPages = await prismic.getSingle("home")

  return {
      props: {
        dataPage: contentsPages.data,
      },
      revalidate: 60,
  }
}


