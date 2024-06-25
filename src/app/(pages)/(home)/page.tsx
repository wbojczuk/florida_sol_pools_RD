import Header from "@/app/(mainsite)/components/homepage/Header/Header";
import InlineReviews from "@/app/(mainsite)/components/homepage/InlineReviews/InlineReviews";
import PastWork from "@/app/(mainsite)/components/homepage/PastWork/PastWork";
import ServiceArea from "@/app/(mainsite)/components/homepage/ServiceArea/ServiceArea";
import StatsRibbon from "@/app/(mainsite)/components/homepage/StatsRibbon/StatsRibbon";
import WhyUs from "@/app/(mainsite)/components/homepage/WhyUs/WhyUs";


export default function Home() {
  return (
    <>
      <Header />
      <InlineReviews />
      <WhyUs />
      <StatsRibbon />
      <PastWork />
      <ServiceArea />
    </>
  )
}
