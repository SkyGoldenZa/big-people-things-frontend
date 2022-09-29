import HTMLHead from 'next/head';

const Head = ({ title }: { title: string; }) => {
  return (
    <HTMLHead>
      <title>{title}</title>
      {/*MS, fb & Whatsapp*/}

      {/*MS Tile - for Microsoft apps*/}
      <meta name="msapplication-TileImage" content="https://i.ibb.co/Gd1TNWR/bps-250x250.png" />

      {/*fb & Whatsapp*/}

      {/*Site Name, Title, and Description to be displayed*/}
      <meta property="og:site_name" content="Big People Things" />
      <meta property="og:title" content="Doing the stuff" />
      <meta property="og:description" content="A site to help manage life" />

      {/*Image to display*/}
      {/*Replace «example.com/image01.jpg» with your own*/}
      <meta property="og:image" itemProp="image" content="https://i.ibb.co/Gd1TNWR/bps-250x250.png" />

      {/*No need to change anything here*/}
      <meta property="og:type" content="website" />
      <meta property="og:image:type" content="image/jpeg" />

      {/*Size of image. Any size up to 300. Anything above 300px will not work in WhatsApp*/}
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="300" />

      {/*Website to visit when clicked in fb or WhatsApp*/}
      <meta property="og:url" content="https://big-people-things.vercel.app" />
    </HTMLHead>
  );
};

export default Head;
