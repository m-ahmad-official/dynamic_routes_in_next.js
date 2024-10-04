import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <body style={{ backgroundColor: "#E4FDE1" }}>
      <div>
        <Navbar />
      </div>
      <div>
        <h1
          style={{
            backgroundColor: "#2CD36D",
            width: "400px",
            borderRadius: "15px",
            padding: "10px",
            margin: "auto",
            marginTop: "75px",
            fontSize: "30px",
            fontWeight: "bold",
            textAlign: "center",
            boxShadow: "0px 7.5px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          Hi Guys!
        </h1>
        <h1
          style={{
            backgroundColor: "#2CD36D",
            width: "400px",
            borderRadius: "15px",
            padding: "10px",
            margin: "auto",
            marginTop: "20px",
            fontSize: "30px",
            fontWeight: "bold",
            textAlign: "center",
            boxShadow: "0px 7.5px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          Welcome to Nextjs
        </h1>
      </div>
    </body>
  );
}
