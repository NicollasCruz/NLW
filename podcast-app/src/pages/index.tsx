export default function Home(props) {
  return (
    <div>
      console.log(props);
      <h1>Index</h1>
    </div>
    );
}

export async function getStaticProps(props){
  const res = await fetch('http://localhost:3333/episodes');
  const data = await res.json();

  return { props: { episodes: data, }, revalidate: 60*60*8, };
}