import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface BlogPostProps {
  title: string;
  content: string;
}

export function BlogPost({ title, content }: BlogPostProps) {
  const formatMarkdown = (text: string) => {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  };

  return (
    <Card className="transition-all hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div 
          className="text-muted-foreground"
          dangerouslySetInnerHTML={{ 
            __html: formatMarkdown(content) 
          }}
        />
      </CardContent>
    </Card>
  );
}