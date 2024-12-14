function Section({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center space-y-8 w-full">
      <span className="text-2xl">Contenido de {title} </span>
    </div>
  );
}

export { Section };
