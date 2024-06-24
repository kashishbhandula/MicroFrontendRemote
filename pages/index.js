export default function LandingPage({ val }) {
  return <> Remote Component Loaded V50 {val}</>;
}

export async function getServerSideProps() {
  return {
    props: { val: "Remote Server Side Loaded" },
  };
}

export async function landingPageGetServerSideProps() {
  return getServerSideProps(); 
}
