import Filters from "../../components/Filters/Filters";
export default function SectionMail() {
  return (
    <section className="h-full flex flex-col md:gap-8">
      <input
        type="text"
        name="text"
        id=""
        placeholder="Chercher un mail"
        className="invisible md:visible bg-neutral-100 w-96 md:py-2 md:px-2 rounded focus:outline-none"
      />

      <div className="flex justify-between invisible md:visible">
        <Filters />
      </div>
      <section>
        
      </section>
    </section>
  );
}