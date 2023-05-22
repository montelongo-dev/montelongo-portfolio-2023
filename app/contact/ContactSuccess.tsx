import Link from "next/link"

export default function ContactSuccess() {
  return (
    <div className="contact__submission">
      <h1>Thank you for reaching out! I will get back to you soon.</h1>
      <br />
      <h1 className="link_underline">
        <Link href="/">BACK</Link>
      </h1>
    </div>
  );
}
