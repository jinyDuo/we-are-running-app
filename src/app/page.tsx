import MainBanner from '@/components/layout/banner/MainBanner';
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import MainFilter from "@/components/features/filter/MainFilter";
import SubFilter from "@/components/features/filter/SubFilter";
import MainFilterContainer from "@/components/features/filter/MainFilterContainer";
import MainCardContainer from "@/components/features/home/MainCardContainer";
import Icon from "@/constants/Icon";
import Card from "@/components/ui/Card";

const Home = () => {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <Main>
        <MainBanner />
          <MainFilterContainer>
              <MainFilter />
              <SubFilter/>
          </MainFilterContainer>
          <figure className='flex items-center justify-center gap-[8px] py-[28px]'>
              <div>
                  <Icon.Arrow className='text-blue10'/>
              </div>
              <h1>2025</h1>
              <div>
                  <Icon.Arrow className='text-blue10 rotate-180'/>
              </div>
          </figure>
          <MainCardContainer>
            <Card/>
          </MainCardContainer>
      </Main>
      <Footer />
    </div>
  );
};

export default Home;
