import Link from "next/link";
const Home: React.FC=()=>{
  


  return(
    <div>
      <header>
        <nav>
        <ul>
          <li>
            <Link href="/weather">Weather</Link>
          </li>
        </ul>
      </nav>
      </header>
      
      <h1>My weather Alerts</h1>

      
    </div>
  )
}
export default Home;