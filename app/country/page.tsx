import Navbar from "@/components/Navbar";
import Link from "next/link";
export default function Country() {
  return (
    <body>
      <Navbar />
      <div
        style={{
          backgroundColor: "#E4FDE1",
          width: "300px",
          borderRadius: "20px",
          margin: "auto",
          marginTop: "80px",
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "bold",
          alignContent: "center",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
        }}
      >
        <h1
          style={{
            backgroundColor: "#2CD36D",
            margin: "20px",
            marginLeft: "80px",
            marginRight: "80px",
            marginTop: "30px",
            padding: "10px",
            borderRadius: "10px",
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.5)",
            transition: "all 2s ease-in-out",
            cursor: "pointer",
          }}
        >
          <Link href={"/country/pakistan"}>Pakistan</Link>
        </h1>
        <h1
          style={{
            backgroundColor: "#2CD36D",
            margin: "20px",
            marginLeft: "80px",
            marginRight: "80px",
            padding: "10px",
            borderRadius: "10px",
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.5)",
            cursor: "pointer",
          }}
        >
          <Link href={"/country/australia"}>Australia</Link>
        </h1>
        <h1
          style={{
            backgroundColor: "#2CD36D",
            margin: "20px",
            marginLeft: "80px",
            marginRight: "80px",
            padding: "10px",
            borderRadius: "10px",
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.5)",
            cursor: "pointer",
          }}
        >
          <Link href={"/country/turkey"}>Turkey</Link>
        </h1>
        <h1
          style={{
            backgroundColor: "#2CD36D",
            margin: "20px",
            marginLeft: "80px",
            marginRight: "80px",
            padding: "10px",
            borderRadius: "10px",
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.5)",
            cursor: "pointer",
          }}
        >
          <Link href={"/country/russia"}>Russia</Link>
        </h1>
        <h1
          style={{
            backgroundColor: "#2CD36D",
            margin: "20px",
            marginLeft: "80px",
            marginRight: "80px",
            marginBottom: "30px",
            padding: "10px",
            borderRadius: "10px",
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.5)",
            cursor: "pointer",
          }}
        >
          <Link href={"/country/qatar"}>Qatar</Link>
        </h1>
      </div>
    </body>
  );
}
