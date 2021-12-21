import Head from "next/head";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import LargeCard from "../components/LargeCard/LargeCard";
import MediumCard from "../components/Mediumcard/MediumCard";
import SmartCard from "../components/SmartCard/SmartCard";

export default function Home({ exploreData, mediumCard }) {
  return (
    <div>
      <Head>
        <title>Airbnb - Darshan Darshu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">
            Explore Nearby
          </h2>

          {/* Pull some data from server */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(
              ({ location, img, distance }) => (
                <SmartCard
                  key={img}
                  distance={distance}
                  img={img}
                  location={location}
                />
              )
            )}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">
            Live Anywhere
          </h2>

          <div className="flex items-center space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {mediumCard?.map(({ img, title }) => (
              <MediumCard
                key={img}
                img={img}
                title={title}
              />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const smallCardResponse = await fetch(
    "https://links.papareact.com/pyp"
  );

  const exploreData = await smallCardResponse.json();

  const mediumCardResponse = await fetch(
    "https://links.papareact.com/zp1"
  );

  const mediumCard = await mediumCardResponse.json();

  return {
    props: {
      exploreData,
      mediumCard,
    },
  };
}
