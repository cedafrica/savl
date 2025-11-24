import Hero from '../components/home/hero';
import BuiltOnExcellence from '@/components/home/built-on-excellence';
import PremiumSolution from '@/components/home/premium-solution';
import WhySpecialAVL from '@/components/home/why-special-avl';
import TrustedByLeaders from '@/components/home/trusted-by-leaders';
import ReadTheLatestNews from '@/components/home/read-the-latest-news';
import Brands from '@/components/common/brands';
const Home = () => {
    return (
        <>
            <Hero />
            <BuiltOnExcellence />
            <PremiumSolution />
            <WhySpecialAVL />
            <TrustedByLeaders />
            <Brands />
            <ReadTheLatestNews />
        </>
    );
}
 
export default Home;