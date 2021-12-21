import { useRouter } from "next/dist/client/router";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import InfoCard from "../../components/Search/InfoCard";
import { format } from "date-fns";
import Map from "../../components/Search/Map";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } =
    router.query;

  const formatStartDate = format(
    new Date(startDate),
    "dd MMMM yy"
  );
  const formatEndDate = format(
    new Date(endDate),
    "dd MMMM yy"
  );
  // pk
  //   .eyJ1IjoiZGFyc2hhbmRhcnNodSIsImEiOiJja3VpYWt4OTgwN3RwMnZwNjAyaWthZXZmIn0
  //   .NFxEFiX5G6NICcAzhSa1Bw;

  const range = `${formatStartDate} - ${formatEndDate}`;
  return (
    <>
      <Header />

      <main className='flex flex-row'>
        <section className='flex-grow pt-14 px-6'>
          <p className='text-sm'>
            300+ Stays - {range} - for {noOfGuests} guests
          </p>
          <h1 className='text-3xl font-semibold mt-2 mb-6'>
            {location}
          </h1>

          <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
            <p className='button'>
              Cancellation Flexibility
            </p>
            <p className='button'>Type of Place</p>
            <p className='button'>Price</p>
            <p className='button'>Rooms and Beds</p>
            <p className='button'>More Filter</p>
          </div>

          <div className='flex flex-col'>
            {searchResults.map((search) => (
              <InfoCard
                key={search.img}
                img={search.img}
                location={search.location}
                title={search.title}
                description={search.description}
                star={search.star}
                price={search.price}
                total={search.total}
              />
            ))}
          </div>
        </section>

        <section className='hidden xl:inline-flex xl:min-w-[600px]'>
          <Map />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const response = await fetch(
    "https://links.papareact.com/isz"
  );

  const searchResults = await response.json();

  return {
    props: {
      searchResults,
    },
  };
}
