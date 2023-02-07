import { SectionHero } from '../components/home/sectionHero';
import { ListCharacters } from '../components/listCharacters';
import { PageTitle } from '../components/PageTitle';

export default function Home() {
  return (
    <>
      <PageTitle title="What if? - Codeboost"  description="um projeto desenvolvido no curso codeboost"/>
      <SectionHero />
      <ListCharacters />
      
    </>
  )
}
