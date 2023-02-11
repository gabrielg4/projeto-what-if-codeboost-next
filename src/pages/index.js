import { getPrismicClient } from '../service/prismic';
import { SectionHero } from '../components/home/sectionHero';
import { ListCharacters } from '../components/listCharacters';
import { PageTitle } from '../components/PageTitle';

export default function Home({ dataPage, characters }) {
  return (
    <>
      <PageTitle title="What if? - Codeboost"  description="um projeto desenvolvido no curso codeboost"/>
      <SectionHero data={ dataPage }/>
      <ListCharacters data={characters}/>
      
    </>
  )
}

export const getStaticProps = async () => {
  const prismic = getPrismicClient();

  const contentsPages = await prismic.getSingle("home")

  const characters = await prismic.getAllByType('character');

  console.log(characters)

  return {
      props: {
        dataPage: contentsPages.data,
        characters,
      },
      revalidate: 60,
  }
}


