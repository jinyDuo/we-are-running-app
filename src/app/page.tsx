import MainBanner from '@/components/layout/banner/MainBanner';
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import MainFilter from "@/components/features/filter/MainFilter";
import SubFilter from "@/components/features/filter/SubFilter";
import MainFilterContainer from "@/components/features/filter/MainFilterContainer";
import MainCardContainer from "@/components/features/home/MainCardContainer";

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
          <figure>
              <h1>2025</h1>
          </figure>
          <MainCardContainer>
              <div className='flex w-full max-w-[390px] px-[16px]'>
                  <h2>대회</h2>
              </div>
          </MainCardContainer>
      </Main>
      <Footer />
    </div>
  );
};

export default Home;
