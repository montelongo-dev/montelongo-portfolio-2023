import Link from "next/link"
import Image from "next/image";

export default function ContactSuccess() {
  return (
    <div className="contact_success_container">

      <h1 className="contact_success_header font-header">{`<Sam-Montelongo/>`}</h1>
      <div className="contact_success_image_container">
        <Image
          src="/images/mac_keyboard.png"
          className="contact_success_image"
          width={200}
          height={35}
          alt="Mac keyboard"
          priority
          quality={100}
          unoptimized={true}
        />
      </div>
      <h2 className="contact_success_subhead font-header">
        {`<Full-Stack-Developer/>`}
      </h2>

      <div className="contact_submission_copy">
        <h1 className="font-body">Thank you for reaching out! I will get back to you soon.</h1>
        <h1 className="font-body pt-2">
          <Link href="/">BACK</Link>
        </h1>
      </div>
    </div>
  );
}
