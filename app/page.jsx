import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">ContactUs</h1>
      <p>Fill in the form below</p>

      <ContactForm />
    </div>
  );
}
