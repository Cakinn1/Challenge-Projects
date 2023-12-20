export default function Heading({ value }: { value: string }) {
    return (
      <div className="mb-4 text-white">
        <h1 className="text-2xl">{value}</h1>
      </div>
    );
  }
