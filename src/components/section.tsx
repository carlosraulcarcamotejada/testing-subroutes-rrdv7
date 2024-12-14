import { useParams } from "react-router";

function Section({ title }: { title: string }) {
  const { section } = useParams();
  return (
    <div className="flex flex-col items-center space-y-8 border w-full">
      <p>Contenido de {title} </p>
      <div>{section}</div>
      {/* Contenido específico de la sección */}
    </div>
  );
}

export { Section };
