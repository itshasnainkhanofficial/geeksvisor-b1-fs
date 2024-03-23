import Image from "next/image";
import styles from "./page.module.css";
import Cards from "./Cards/Cards";

export default function Home() {
  return (
   <div>
    {/* <Cards name="Hasnain" />
    <Cards name="Arifa"/>
    <Cards name="Nasir"/> */}

    {/* <Cards>
        Salman
    </Cards> */}

    <Cards>
        <MyComp/>
    </Cards>
    
   </div>
  );
}


const MyComp = () => {
  return (
    <span>
      my span
    </span>
  )
}