import Link from "next/link";
export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#FFBF46",
        fontSize: "22.5px",
        fontWeight: "bold",
        height: "80px",
      }}
    >
      <h1>
        <Link href={"/"}>Home</Link>
      </h1>
      <h1>
        <Link href={"/about"}>About Us</Link>
      </h1>
      <h1>
        <Link href={"/contact"}>Contact Us</Link>
      </h1>
      <h1>
        <Link href={"/country"}>Country List</Link>
      </h1>
    </div>
  );
}
