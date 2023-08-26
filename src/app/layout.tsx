import ProjectLayout from 'components/projects/Layout/ProjectLayout';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ProjectLayout>{children}</ProjectLayout>
      </body>
    </html>
  );
}
