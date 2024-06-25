export default function LandingPage({ val }) {
  return <> Remote Component Loaded V1011111111{val}</>;
}

export async function getServerSideProps() {
  return {
    props: { val: "Remote Server Side Loaded V101111111" },
  };
}

export async function landingPageGetServerSideProps() {
  return getServerSideProps(); 
}


