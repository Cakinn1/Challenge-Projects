import Antonyms from "./ui/Antonyms";
import Definitions from "./ui/Definitions";
import PartOfSpeech from "./ui/PartOfSpeech";
import Synonyms from "./ui/Synonyms";

interface MeetingProps {
  partOfSpeech: string;
  definitions: {
    definition: string;
    example: string;
  }[];
  synonyms: string[];
  antonyms: string[];
}

export default function Meanings({
  antonyms,
  definitions,
  partOfSpeech,
  synonyms,
}: MeetingProps) {
  return (
    <section className="tracking-normal">
      <PartOfSpeech partOfSpeech={partOfSpeech} />
      <h2 className="text-2xl mb-2">Meaning</h2>
      <div className="space-y-2">
        <Definitions definitions={definitions} />
        <Synonyms synonyms={synonyms} />
        <Antonyms antonyms={antonyms} />
      </div>
    </section>
  );
}
