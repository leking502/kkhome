/**These are necessary imports / components for the page */
import { PageLayout, Text, LinkTo } from "../components";
import ArticleCard from '../components/ArticleCards/ArticleCard';
import { SORTED_ARTICLES_BY_DATE } from '../../BLOG_CONSTANTS/_ARTICLES_LIST';
import { DEFAULT_SEO } from "../data/data";
import FeaturedArticleSection from "../components/Misc/FeaturedArticleSection";
import HomeNonFeatureArticles from "../components/Misc/HomeNonFeatureAricles";
import Hero from "../sections/Hero";
import Typewriter from 'typewriter-effect';
import About from "../sections/About";

const Home = () => {
  return (
    <PageLayout navbarFixed home PAGE_SEO={DEFAULT_SEO}>
      {/*<section className='flex h-screen w-screen items-center justify-center'>*/}
      {/*  <div className="container text-center px-3">*/}
      {/*    <Text title className='text-3xl'>*/}
      {/*      间空个人网站*/}
      {/*    </Text>*/}

      {/*    <Text p className="mt-3 text-xl">*/}
      {/*      /!*<Typewriter onInit={*!/*/}
      {/*      /!*  (typewriter)=>{*!/*/}
      {/*      /!*    typewriter*!/*/}
      {/*      /!*        .typeString("记录我的想法")*!/*/}
      {/*      /!*        .start()*!/*/}
      {/*      /!*  }*!/*/}
      {/*      /!*}/>*!/*/}
      {/*      记录我的想法*/}
      {/*    </Text>*/}

      {/*    <div className='flex justify-center mt-5 flex-wrap '>*/}
      {/*      <a href="https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center rounded-md bg-blue-600 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2'>*/}
      {/*        <span className='text-xl pt-2 block'>Github</span>*/}
      {/*      </a>*/}
      {/*      <LinkTo href="/pages/about-us.tsx" passHref className='flex items-center justify-center rounded-md bg-blue-600 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2'>*/}
      {/*        <span className='text-xl pt-2 block'>About</span>*/}
      {/*      </LinkTo>*/}
      {/*      <LinkTo href="/pages/tutorial/all-components.tsx" passHref className='flex items-center justify-center rounded-md bg-blue-600 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2'>*/}
      {/*        <span className='text-xl pt-2 block'>Components</span>*/}
      {/*      </LinkTo>*/}

      {/*      <a href="https://www.buymeacoffee.com/webexpe13z" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center rounded-md bg-blue-600 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2'>*/}
      {/*        <span className='text-xl pt-2 block'>Support Us</span>*/}
      {/*      </a>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}
      <Hero/>
        <About/>
      <div className="container mx-auto lg:px-[15px] px-0">
        <div className={'flex flex-wrap'}>
          <FeaturedArticleSection />
          {/*<h1 className='px-3 w-full mb-5 text-xl md:text-3xl font-medium'>Checkout the below articles on how to use different layouts and components</h1>*/}
          <hr className='border-1 mb-5 w-[98%] mx-auto' />
          <HomeNonFeatureArticles />
        </div>
      </div>
    </PageLayout>
  )
}

export default Home