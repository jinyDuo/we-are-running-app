import MainBanner from '@/widgets/banner/MainBanner';
import Footer from "@/widgets/footer/Footer";
import Header from "@/widgets/header/Header";
import Main from "@/widgets/main/Main";
import MainFilter from "@/features/filter/MainFilter";
import SubFilter from "@/features/filter/SubFilter";
import MainFilterContainer from "@/features/filter/MainFilterContainer";
import MainCardContainer from "@/features/home/MainCardContainer";
import Icon from "@/shared/constants/Icon";
import Card from "@/shared/ui/Card";

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
