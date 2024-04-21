import Container from "@/components/Container";
import { LANDINGPAGE } from "./LandingPage.content";
import Hero from "@/components/Hero";

const MainHero = () => {
	return (
		<Container className="">
			<Hero className="bg-landing_hero">
				<div className="w-1/2 text-center flex flex-col gap-6">
					<h1>{LANDINGPAGE.PAGE_TITLE}</h1>
					<p className="tracking-widest uppercase text-[18px]">
						{LANDINGPAGE.PAGE_SUBTITLE}
					</p>
				</div>
			</Hero>
		</Container>
	);
};

export default MainHero;
