import ContentEditor from '@/components/ContentEditor';

export default function Home() {
  const content = `
    <html>
      <head>
        <title>Conteudo estático nextjs</title>
      </head>
      <body>
        <h1>Bem-vindo à minha página estática!</h1>
        <p>Esta é uma página com conteúdo editável que faz parte de um projeto de criação de um Site editor.</p>
      </body>
    </html>
  `;

  return <ContentEditor content={content} />;
}