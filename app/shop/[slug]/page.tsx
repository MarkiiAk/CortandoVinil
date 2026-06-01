interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-crema flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="font-cormorant text-5xl text-cafe font-light">
          {slug}
        </h1>
        <p className="font-dm text-humo text-sm tracking-widest uppercase">
          Página de producto — pendiente de construir
        </p>
      </div>
    </main>
  );
}
