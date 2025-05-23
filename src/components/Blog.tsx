import { BlogPost } from "./BlogPost";
import { useTheme } from "./theme-provider";

interface Content {
  en: string;
  vi: string;
}

interface BlogTopic {
  title: Content;
  content: Content;
}

interface HomepageContent {
  en: string;
  vi: string;
}

interface BlogData {
  homepage: HomepageContent;
  blog_topics: BlogTopic[];
}

const data: BlogData = {
  homepage: {
    en: "Welcome to **Universal App Hub**—your guide to building cross-platform apps with a single codebase. Explore the power of **React Native Expo, Next.js, and Solito** for seamless web and mobile development. Dive into tutorials, comparisons, and expert insights on frameworks like **ShadCN, Tamagui, and Flutter** to optimize your workflow.",
    vi: "Chào mừng đến với **Universal App Hub**—nơi hướng dẫn bạn xây dựng ứng dụng đa nền tảng từ một codebase duy nhất. Khám phá sức mạnh của **React Native Expo, Next.js và Solito** để phát triển đồng bộ trên web và di động. Tìm hiểu các hướng dẫn, so sánh và chia sẻ chuyên sâu về các framework như **ShadCN, Tamagui và Flutter** để tối ưu hóa quy trình làm việc."
  },
  blog_topics: [
    {
      title: {
        en: "Why Universal Apps? Pros and Cons of Expo + Next.js + Solito",
        vi: "Tại sao chọn Universal App? Ưu và nhược điểm của Expo + Next.js + Solito"
      },
      content: {
        en: "Explore how **Expo 52** and **Next.js** with **Solito** enable true universal apps. Pros: **70% code reuse**, faster development, and unified teams. Cons: Limited native module support, WebView performance trade-offs. Learn from case studies like Boca Juniors' app.",
        vi: "Khám phá cách **Expo 52** và **Next.js** kết hợp **Solito** tạo ứng dụng đa nền tảng thực sự. Ưu điểm: **tái sử dụng 70% code**, phát triển nhanh, team làm việc thống nhất. Nhược điểm: Hạn chế hỗ trợ module native, đánh đổi hiệu năng WebView. Học hỏi từ case study ứng dụng Boca Juniors."
      }
    },
    {
      title: {
        en: "ShadCN for Universal Apps: Styling with Tailwind and Accessibility",
        vi: "ShadCN cho Universal App: Thiết kế với Tailwind và tiếp cận người dùng"
      },
      content: {
        en: "ShadCN's **headless UI components** integrate seamlessly with React Native (via NativeWind) and Next.js. Benefits: **Customizable themes**, WCAG compliance, and reduced CSS bloat. Tutorial: Building a CRUD app with Refine and ShadCN.",
        vi: "Các **component headless UI** của ShadCN tích hợp dễ dàng với React Native (qua NativeWind) và Next.js. Lợi ích: **Tùy chỉnh giao diện**, đạt chuẩn WCAG, giảm CSS thừa. Hướng dẫn: Xây app CRUD với Refine và ShadCN."
      }
    },
    {
      title: {
        en: "Beyond React Native: Flutter vs. Tamagui vs. Gluestack",
        vi: "Ngoài React Native: So sánh Flutter, Tamagui và Gluestack"
      },
      content: {
        en: "Alternatives for universal apps: **Flutter** (Dart, high-performance animations), **Tamagui** (optimized styles for Expo), and **Gluestack** (Tailwind-based components). Use cases: Flutter for gaming apps, Tamagui for design-system consistency.",
        vi: "Các lựa chọn thay thế: **Flutter** (Dart, hiệu năng animation cao), **Tamagui** (tối ưu style cho Expo), và **Gluestack** (component dựa trên Tailwind). Ứng dụng: Flutter cho game, Tamagui cho hệ thống thiết kế đồng bộ."
      }
    },
    {
      title: {
        en: "Solito Deep Dive: Monorepo Architecture for Universal Apps",
        vi: "Đào sâu Solito: Kiến trúc Monorepo cho Universal App"
      },
      content: {
        en: "Solito's monorepo structure separates **shared logic** (packages) from platform-specific code (apps). Advantages: Scalability, lazy loading, and hybrid rendering (Next.js + Expo). Pitfalls: Complex setup for beginners.",
        vi: "Cấu trúc monorepo của Solito tách **logic dùng chung** (packages) khỏi code riêng cho từng nền tảng (apps). Ưu điểm: Khả năng mở rộng, lazy loading và hybrid rendering (Next.js + Expo). Lưu ý: Thiết lập phức tạp cho người mới."
      }
    },
    {
      title: {
        en: "SEO for Universal Apps: Balancing Web and Mobile",
        vi: "SEO cho Universal App: Cân bằng giữa web và di động"
      },
      content: {
        en: "Universal apps face SEO challenges (e.g., Flutter's Canvas rendering). Solutions: Use **Next.js for SSR**, Expo Router for deeplinking, and hybrid PWA strategies. Case study: Twitter Lite's PWA approach.",
        vi: "Universal App gặp thách thức SEO (ví dụ: render Canvas của Flutter). Giải pháp: Dùng **Next.js cho SSR**, Expo Router để deeplink và chiến lược PWA lai. Case study: Cách tiếp cận PWA của Twitter Lite."
      }
    }
  ]
};

export function Blog() {
  const { theme } = useTheme();
  const language = "en"; // You can make this dynamic later

  const formatMarkdown = (text: string) => {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  };

  return (
    <div className="container py-8">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Universal App Hub
        </h1>
        <div 
          className="text-xl text-muted-foreground"
          dangerouslySetInnerHTML={{ 
            __html: formatMarkdown(data.homepage[language]) 
          }}
        />
      </section>

      <div className="grid gap-8">
        {data.blog_topics.map((topic, index) => (
          <BlogPost
            key={index}
            title={topic.title[language]}
            content={topic.content[language]}
          />
        ))}
      </div>
    </div>
  );
}