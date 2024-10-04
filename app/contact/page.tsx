import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <body style={{ backgroundColor: "#E4FDE1" }}>
      <Navbar />
      <div
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
          boxShadow: "0px 7.5px 20px rgba(0, 0, 0, 0.5)",
        }}
      >
        Contact Us Page
      </div>
    </body>
  );
}
