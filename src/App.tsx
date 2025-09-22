import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { MarketTractionSection } from './components/MarketTractionSection';
import { BusinessModelSection } from './components/BusinessModelSection';
import { InvestmentHighlightsSection } from './components/InvestmentHighlightsSection';
import { TeamSection } from './components/TeamSection';
import { FinancialsSection } from './components/FinancialsSection';
import { InvestorResourcesSection } from './components/InvestorResourcesSection';
import { SocialProofSection } from './components/SocialProofSection';
import { DiscordSection } from './components/DiscordSection';
import { FeaturesSection } from './components/FeaturesSection';
import { TrackingSection } from './components/TrackingSection';
import { ChallengesSection } from './components/ChallengesSection';
import { LeaderboardSection } from './components/LeaderboardSection';
import { GallerySection } from './components/GallerySection';
import { RoadmapSection } from './components/RoadmapSection';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { WaitlistSection } from './components/WaitlistSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="text-black text-xs not-italic normal-nums font-normal accent-auto bg-black box-border caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc text-start indent-[0px] normal-case visible border-separate font-sans_serif">
      <div className="box-border caret-transparent">
        <div className="relative content-center items-center bg-black box-border caret-transparent gap-x-0 flex flex-col h-min justify-start min-h-[1000px] gap-y-0">
          <Navigation />
          <HeroSection />
          <MarketTractionSection />
          <BusinessModelSection />
          <InvestmentHighlightsSection />
          <TeamSection />
          <FinancialsSection />
          <InvestorResourcesSection />
          <SocialProofSection />
          <DiscordSection />
          <FeaturesSection />
          <TrackingSection />
          <ChallengesSection />
          <LeaderboardSection />
          <GallerySection />
          <RoadmapSection />
          <FAQSection />
          <CTASection />
          <WaitlistSection />
          <Footer />
          <div className="fixed box-border caret-transparent shrink-0 translate-x-[-50.0%] w-full z-10 left-2/4 top-0">
            <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block h-auto justify-normal gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:h-min md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div className="static box-content caret-black shrink h-auto min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent"></div>
      </div>
      <div className="absolute box-border caret-transparent h-0 w-0 z-0 overflow-hidden left-0 bottom-0">
        <img src="https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/icon-8.svg" alt="Icon" className="box-border caret-transparent h-[91px] w-[482px]" />
        <img src="https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/icon-9.svg" alt="Icon" className="box-border caret-transparent h-[50px] w-[50px]" />
        <img src="https://c.animaapp.com/mfqo4zaxsuDsQ0/assets/icon-10.svg" alt="Icon" className="box-border caret-transparent h-[91px] w-[457px]" />
      </div>
      <iframe src="https://framer.com/edit?framerSiteId=f4987dad0f0f795138a4683a8820a90f9f2c86b95797a6a98956d75e53d4c959&source=www.wefitlabs.com&features=%257B%2522editorBarDisableFrameAncestorsSecurity%2522%253Afalse%257D&loadStart=1758276010438" className="fixed box-border caret-transparent hidden h-[1000px] w-screen z-[2147483647] left-0 top-0"></iframe>
    </div>
  );
}

export default App;
