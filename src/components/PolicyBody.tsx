/** Renders the simple block format used by the legal text files. */
export function PolicyBody({ body }: { body: string }) {
  const blocks = body.split(/\n{2,}/);

  return (
    <div className="space-y-4">
      {blocks.map((block, i) => {
        const lines = block.split('\n');
        const nodes: React.ReactNode[] = [];
        let bullets: string[] = [];

        const flush = () => {
          if (bullets.length) {
            nodes.push(
              <ul key={`u${nodes.length}`} className="space-y-1.5">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span aria-hidden className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>,
            );
            bullets = [];
          }
        };

        lines.forEach((line) => {
          if (line.startsWith('- ')) {
            bullets.push(line.slice(2));
            return;
          }
          flush();
          if (line.endsWith(':')) {
            nodes.push(
              <p key={`h${nodes.length}`} className="pt-1 font-bold text-text">
                {line.slice(0, -1)}
              </p>,
            );
          } else {
            nodes.push(<p key={`p${nodes.length}`}>{line}</p>);
          }
        });
        flush();

        return (
          <div key={i} className="space-y-2">
            {nodes}
          </div>
        );
      })}
    </div>
  );
}
