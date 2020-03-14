import { createGlobalStyle } from "styled-components";
import useStats from "../utils/useStats";
import Stats from "../components/Stats";
import CountrySelector from "../components/CountrySelector";
import Head from "next/head";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align:center;
  }
  h1 {
    font-size: 18px;
  }
  h2 {
    font-size: 15px;
  }
  h3 {
    font-size: 13px;
  }
`;

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Covid-19 Stats</title>
        <meta
          name="description"
          itemProp="description"
          content="Live Stats of Global Corona Pandemic with the help of mathdro.id's API and data from John Hopkins University CSSE "
        />
      </Head>
      <h1>Covid 19 Stats</h1>
      <GlobalStyle />
      <CountrySelector></CountrySelector>
      <h2>Global</h2>
      <Stats url="https://covid19.mathdro.id/api"></Stats>
    </div>
  );
}
