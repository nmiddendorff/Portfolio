import RootStyleRegistry from './RootStyleRegistry';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  );
}
