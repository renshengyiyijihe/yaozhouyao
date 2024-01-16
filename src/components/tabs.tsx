/**
 * v0 by Vercel.
 * @see https://v0.dev/t/HvwZYtE7wFH
 */
import { TabsTrigger, TabsList, TabsContent, TabsRoot } from "./ui/tabs";

export function Tabs() {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white shadow-md">
        <h1 className="text-3xl font-bold">耀州窑</h1>
        <p className="text-sm italic">中国古代陶瓷烧制技术的瑰宝</p>
      </header>
      <TabsRoot className="w-full" defaultValue="interviews">
        <TabsList className="w-full flex justify-around border-b border-gray-200 bg-gray-200 text-gray-700">
          <TabsTrigger
            className="py-2 px-4 text-lg font-semibold"
            value="interviews">
            访谈与纪实
          </TabsTrigger>
          <TabsTrigger
            className="py-2 px-4 text-lg font-semibold"
            value="culture">
            文化传承与保护
          </TabsTrigger>
          <TabsTrigger
            className="py-2 px-4 text-lg font-semibold"
            value="exhibits">
            历史背景与技艺美学
          </TabsTrigger>
        </TabsList>
        <TabsContent
          className="flex-1 overflow-auto p-6 bg-white shadow-inner"
          value="interviews">
          <TabsRoot className="w-full" defaultValue="public">
            <TabsList className="w-full flex justify-around border-b border-gray-200 bg-gray-200 text-gray-700">
              <TabsTrigger
                className="py-2 px-4 text-sm font-semibold"
                value="public">
                群众访谈
              </TabsTrigger>
              <TabsTrigger
                className="py-2 px-4 text-sm font-semibold"
                value="museum">
                博物馆访谈
              </TabsTrigger>
              <TabsTrigger
                className="py-2 px-4 text-sm font-semibold"
                value="craftsmen">
                传承人及历代工匠访谈
              </TabsTrigger>
              <TabsTrigger
                className="py-2 px-4 text-sm font-semibold"
                value="industry">
                相关产业负责人访谈
              </TabsTrigger>
            </TabsList>
            <TabsContent
              className="flex-1 overflow-auto p-6 bg-white shadow-inner"
              value="public">
              <h2 className="text-2xl font-bold mb-4 text-gray-700">
                群众访谈
              </h2>
              <p className="mb-4 text-gray-600">
                这里是一些关于耀州窑的群众访谈...
              </p>
              <img
                alt="群众访谈图片"
                className="w-full h-[200px] object-cover rounded-md shadow-lg"
                src="/placeholder.svg"
              />
            </TabsContent>
            <TabsContent
              className="flex-1 overflow-auto p-6 bg-white shadow-inner"
              value="museum">
              <h2 className="text-2xl font-bold mb-4 text-gray-700">
                博物馆访谈
              </h2>
              <p className="mb-4 text-gray-600">
                这里是一些关于耀州窑的博物馆访谈...
              </p>
              <img
                alt="博物馆访谈图片"
                className="w-full h-[200px] object-cover rounded-md shadow-lg"
                src="/placeholder.svg"
              />
            </TabsContent>
            <TabsContent
              className="flex-1 overflow-auto p-6 bg-white shadow-inner"
              value="craftsmen">
              <h2 className="text-2xl font-bold mb-4 text-gray-700">
                传承人及历代工匠访谈
              </h2>
              <p className="mb-4 text-gray-600">
                这里是一些关于耀州窑的传承人及历代工匠访谈...
              </p>
              <img
                alt="传承人及历代工匠访谈图片"
                className="w-full h-[200px] object-cover rounded-md shadow-lg"
                src="/placeholder.svg"
              />
            </TabsContent>
            <TabsContent
              className="flex-1 overflow-auto p-6 bg-white shadow-inner"
              value="industry">
              <h2 className="text-2xl font-bold mb-4 text-gray-700">
                相关产业负责人访谈
              </h2>
              <p className="mb-4 text-gray-600">
                这里是一些关于耀州窑的相关产业负责人访谈...
              </p>
              <img
                alt="相关产业负责人访谈图片"
                className="w-full h-[200px] object-cover rounded-md shadow-lg"
                src="/placeholder.svg"
              />
            </TabsContent>
          </TabsRoot>
        </TabsContent>
        <TabsContent
          className="flex-1 overflow-auto p-6 bg-white shadow-inner"
          value="culture">
          <TabsRoot className="w-full" defaultValue="value">
            <TabsList className="w-full flex justify-around border-b border-gray-200 bg-gray-200 text-gray-700">
              <TabsTrigger
                className="py-2 px-4 text-sm font-semibold"
                value="value">
                文化价值与艺术特色分析
              </TabsTrigger>
              <TabsTrigger
                className="py-2 px-4 text-sm font-semibold"
                value="protection">
                保护与传承措施研究
              </TabsTrigger>
              <TabsTrigger
                className="py-2 px-4 text-sm font-semibold"
                value="future">
                当代价值与未来发展展望
              </TabsTrigger>
              <TabsTrigger
                className="py-2 px-4 text-sm font-semibold"
                value="digital">
                数字化展览
              </TabsTrigger>
            </TabsList>
            <TabsContent
              className="flex-1 overflow-auto p-6 bg-white shadow-inner"
              value="value">
              <TabsRoot className="w-full" defaultValue="history">
                <TabsList className="w-full flex justify-around border-b border-gray-200 bg-gray-200 text-gray-700">
                  <TabsTrigger
                    className="py-2 px-4 text-sm font-semibold"
                    value="history">
                    耀州窑的历史和文化价值
                  </TabsTrigger>
                  <TabsTrigger
                    className="py-2 px-4 text-sm font-semibold"
                    value="position">
                    耀州窑在中国瓷器历史中的地位
                  </TabsTrigger>
                  <TabsTrigger
                    className="py-2 px-4 text-sm font-semibold"
                    value="culture">
                    关中古陶瓷文化
                  </TabsTrigger>
                </TabsList>
                <TabsContent
                  className="flex-1 overflow-auto p-6 bg-white shadow-inner"
                  value="history">
                  <h2 className="text-2xl font-bold mb-4 text-gray-700">
                    耀州窑的历史和文化价值
                  </h2>
                  <p className="mb-4 text-gray-600">
                    这里是一些关于耀州窑的历史和文化价值的分析...
                  </p>
                  <img
                    alt="耀州窑的历史和文化价值图片"
                    className="w-full h-[200px] object-cover rounded-md shadow-lg"
                    src="/placeholder.svg"
                  />
                </TabsContent>
                <TabsContent
                  className="flex-1 overflow-auto p-6 bg-white shadow-inner"
                  value="position">
                  <h2 className="text-2xl font-bold mb-4 text-gray-700">
                    耀州窑在中国瓷器历史中的地位
                  </h2>
                  <p className="mb-4 text-gray-600">
                    这里是一些关于耀州窑在中国瓷器历史中的地位的分析...
                  </p>
                  <img
                    alt="耀州窑在中国瓷器历史中的地位图片"
                    className="w-full h-[200px] object-cover rounded-md shadow-lg"
                    src="/placeholder.svg"
                  />
                </TabsContent>
                <TabsContent
                  className="flex-1 overflow-auto p-6 bg-white shadow-inner"
                  value="culture">
                  <h2 className="text-2xl font-bold mb-4 text-gray-700">
                    关中古陶瓷文化
                  </h2>
                  <p className="mb-4 text-gray-600">
                    这里是一些关于关中古陶瓷文化的分析...
                  </p>
                  <img
                    alt="关中古陶瓷文化图片"
                    className="w-full h-[200px] object-cover rounded-md shadow-lg"
                    src="/placeholder.svg"
                  />
                </TabsContent>
              </TabsRoot>
            </TabsContent>
            <TabsContent
              className="flex-1 overflow-auto p-6 bg-white shadow-inner"
              value="protection">
              <TabsRoot className="w-full" defaultValue="history">
                <TabsList className="w-full flex justify-around border-b border-gray-200 bg-gray-200 text-gray-700">
                  <TabsTrigger
                    className="py-2 px-4 text-sm font-semibold"
                    value="history">
                    保护与传承措施研究
                  </TabsTrigger>
                  <TabsTrigger
                    className="py-2 px-4 text-sm font-semibold"
                    value="position">
                    耀州窑的工艺传承
                  </TabsTrigger>
                  <TabsTrigger
                    className="py-2 px-4 text-sm font-semibold"
                    value="culture">
                    耀州窑的保护策略
                  </TabsTrigger>
                </TabsList>
                <TabsContent
                  className="flex-1 overflow-auto p-6 bg-white shadow-inner"
                  value="history">
                  <h2 className="text-2xl font-bold mb-4 text-gray-700">
                    耀州窑的历史和文化价值
                  </h2>
                  <p className="mb-4 text-gray-600">
                    这里是一些关于耀州窑的历史和文化价值的分析...
                  </p>
                  <img
                    alt="耀州窑的历史和文化价值图片"
                    className="w-full h-[200px] object-cover rounded-md shadow-lg"
                    src="/placeholder.svg"
                  />
                </TabsContent>
                <TabsContent
                  className="flex-1 overflow-auto p-6 bg-white shadow-inner"
                  value="position">
                  <h2 className="text-2xl font-bold mb-4 text-gray-700">
                    耀州窑在中国瓷器历史中的地位
                  </h2>
                  <p className="mb-4 text-gray-600">
                    这里是一些关于耀州窑在中国瓷器历史中的地位的分析...
                  </p>
                  <img
                    alt="耀州窑在中国瓷器历史中的地位图片"
                    className="w-full h-[200px] object-cover rounded-md shadow-lg"
                    src="/placeholder.svg"
                  />
                </TabsContent>
                <TabsContent
                  className="flex-1 overflow-auto p-6 bg-white shadow-inner"
                  value="culture">
                  <h2 className="text-2xl font-bold mb-4 text-gray-700">
                    关中古陶瓷文化
                  </h2>
                  <p className="mb-4 text-gray-600">
                    这里是一些关于关中古陶瓷文化的分析...
                  </p>
                  <img
                    alt="关中古陶瓷文化图片"
                    className="w-full h-[200px] object-cover rounded-md shadow-lg"
                    src="/placeholder.svg"
                  />
                </TabsContent>
              </TabsRoot>
            </TabsContent>
            <TabsContent
              className="flex-1 overflow-auto p-6 bg-white shadow-inner"
              value="future">
              <TabsRoot className="w-full" defaultValue="history">
                <TabsList className="w-full flex justify-around border-b border-gray-200 bg-gray-200 text-gray-700">
                  <TabsTrigger
                    className="py-2 px-4 text-sm font-semibold"
                    value="history">
                    耀州窑在当代社会的意义和价值
                  </TabsTrigger>
                  <TabsTrigger
                    className="py-2 px-4 text-sm font-semibold"
                    value="position">
                    新媒体视域下如何实现耀州窑的推广
                  </TabsTrigger>
                  <TabsTrigger
                    className="py-2 px-4 text-sm font-semibold"
                    value="culture">
                    "一带一路"视域下的耀州窑活动
                  </TabsTrigger>
                </TabsList>
                <TabsContent
                  className="flex-1 overflow-auto p-6 bg-white shadow-inner"
                  value="history">
                  <h2 className="text-2xl font-bold mb-4 text-gray-700">
                    耀州窑的历史和文化价值
                  </h2>
                  <p className="mb-4 text-gray-600">
                    这里是一些关于耀州窑的历史和文化价值的分析...
                  </p>
                  <img
                    alt="耀州窑的历史和文化价值图片"
                    className="w-full h-[200px] object-cover rounded-md shadow-lg"
                    src="/placeholder.svg"
                  />
                </TabsContent>
                <TabsContent
                  className="flex-1 overflow-auto p-6 bg-white shadow-inner"
                  value="position">
                  <h2 className="text-2xl font-bold mb-4 text-gray-700">
                    耀州窑在中国瓷器历史中的地位
                  </h2>
                  <p className="mb-4 text-gray-600">
                    这里是一些关于耀州窑在中国瓷器历史中的地位的分析...
                  </p>
                  <img
                    alt="耀州窑在中国瓷器历史中的地位图片"
                    className="w-full h-[200px] object-cover rounded-md shadow-lg"
                    src="/placeholder.svg"
                  />
                </TabsContent>
                <TabsContent
                  className="flex-1 overflow-auto p-6 bg-white shadow-inner"
                  value="culture">
                  <h2 className="text-2xl font-bold mb-4 text-gray-700">
                    关中古陶瓷文化
                  </h2>
                  <p className="mb-4 text-gray-600">
                    这里是一些关于关中古陶瓷文化的分析...
                  </p>
                  <img
                    alt="关中古陶瓷文化图片"
                    className="w-full h-[200px] object-cover rounded-md shadow-lg"
                    src="/placeholder.svg"
                  />
                </TabsContent>
              </TabsRoot>
            </TabsContent>
            <TabsContent
              className="flex-1 overflow-auto p-6 bg-white shadow-inner"
              value="digital">
              <TabsRoot className="w-full" defaultValue="history">
                <TabsList className="w-full flex justify-around border-b border-gray-200 bg-gray-200 text-gray-700">
                  <TabsTrigger
                    className="py-2 px-4 text-sm font-semibold"
                    value="history">
                    IP文创
                  </TabsTrigger>
                  <TabsTrigger
                    className="py-2 px-4 text-sm font-semibold"
                    value="position">
                    AI修复
                  </TabsTrigger>
                </TabsList>
                <TabsContent
                  className="flex-1 overflow-auto p-6 bg-white shadow-inner"
                  value="history">
                  <h2 className="text-2xl font-bold mb-4 text-gray-700">
                    耀州窑的历史和文化价值
                  </h2>
                  <p className="mb-4 text-gray-600">
                    这里是一些关于耀州窑的历史和文化价值的分析...
                  </p>
                  <img
                    alt="耀州窑的历史和文化价值图片"
                    className="w-full h-[200px] object-cover rounded-md shadow-lg"
                    src="/placeholder.svg"
                  />
                </TabsContent>
                <TabsContent
                  className="flex-1 overflow-auto p-6 bg-white shadow-inner"
                  value="position">
                  <h2 className="text-2xl font-bold mb-4 text-gray-700">
                    耀州窑在中国瓷器历史中的地位
                  </h2>
                  <p className="mb-4 text-gray-600">
                    这里是一些关于耀州窑在中国瓷器历史中的地位的分析...
                  </p>
                  <img
                    alt="耀州窑在中国瓷器历史中的地位图片"
                    className="w-full h-[200px] object-cover rounded-md shadow-lg"
                    src="/placeholder.svg"
                  />
                </TabsContent>
              </TabsRoot>
            </TabsContent>
          </TabsRoot>
        </TabsContent>
        <TabsContent
          className="flex-1 overflow-auto p-6 bg-white shadow-inner"
          value="exhibits">
         <TabsRoot className="w-full" defaultValue="value">
            <TabsList className="w-full flex justify-around border-b border-gray-200 bg-gray-200 text-gray-700">
              <TabsTrigger
                className="py-2 px-4 text-sm font-semibold"
                value="value">
                历史背景
              </TabsTrigger>
              <TabsTrigger
                className="py-2 px-4 text-sm font-semibold"
                value="protection">
                记忆美学
              </TabsTrigger>
            </TabsList>
            <TabsContent
              className="flex-1 overflow-auto p-6 bg-white shadow-inner"
              value="value">
              <TabsRoot className="w-full" defaultValue="history">
                <TabsList className="w-full flex justify-around border-b border-gray-200 bg-gray-200 text-gray-700">
                  <TabsTrigger
                    className="py-2 px-4 text-sm font-semibold"
                    value="history">
                    耀州窑简介
                  </TabsTrigger>
                  <TabsTrigger
                    className="py-2 px-4 text-sm font-semibold"
                    value="position">
                    发展历程
                  </TabsTrigger>
                  <TabsTrigger
                    className="py-2 px-4 text-sm font-semibold"
                    value="culture">
                    重要时期
                  </TabsTrigger>
                </TabsList>
                <TabsContent
                  className="flex-1 overflow-auto p-6 bg-white shadow-inner"
                  value="history">
                  <h2 className="text-2xl font-bold mb-4 text-gray-700">
                    耀州窑的历史和文化价值
                  </h2>
                  <p className="mb-4 text-gray-600">
                    这里是一些关于耀州窑的历史和文化价值的分析...
                  </p>
                  <img
                    alt="耀州窑的历史和文化价值图片"
                    className="w-full h-[200px] object-cover rounded-md shadow-lg"
                    src="/placeholder.svg"
                  />
                </TabsContent>
                <TabsContent
                  className="flex-1 overflow-auto p-6 bg-white shadow-inner"
                  value="position">
                  <h2 className="text-2xl font-bold mb-4 text-gray-700">
                    耀州窑在中国瓷器历史中的地位
                  </h2>
                  <p className="mb-4 text-gray-600">
                    这里是一些关于耀州窑在中国瓷器历史中的地位的分析...
                  </p>
                  <img
                    alt="耀州窑在中国瓷器历史中的地位图片"
                    className="w-full h-[200px] object-cover rounded-md shadow-lg"
                    src="/placeholder.svg"
                  />
                </TabsContent>
                <TabsContent
                  className="flex-1 overflow-auto p-6 bg-white shadow-inner"
                  value="culture">
                  <h2 className="text-2xl font-bold mb-4 text-gray-700">
                    关中古陶瓷文化
                  </h2>
                  <p className="mb-4 text-gray-600">
                    这里是一些关于关中古陶瓷文化的分析...
                  </p>
                  <img
                    alt="关中古陶瓷文化图片"
                    className="w-full h-[200px] object-cover rounded-md shadow-lg"
                    src="/placeholder.svg"
                  />
                </TabsContent>
              </TabsRoot>
            </TabsContent>
            <TabsContent
              className="flex-1 overflow-auto p-6 bg-white shadow-inner"
              value="protection">
              <TabsRoot className="w-full" defaultValue="history">
                <TabsList className="w-full flex justify-around border-b border-gray-200 bg-gray-200 text-gray-700">
                  <TabsTrigger
                    className="py-2 px-4 text-sm font-semibold"
                    value="history">
                    技术特点
                  </TabsTrigger>
                  <TabsTrigger
                    className="py-2 px-4 text-sm font-semibold"
                    value="position">
                    艺术风格
                  </TabsTrigger>
                  <TabsTrigger
                    className="py-2 px-4 text-sm font-semibold"
                    value="culture">
                    代表性器物
                  </TabsTrigger>
                  <TabsTrigger
                    className="py-2 px-4 text-sm font-semibold"
                    value="recover">
                    制作工艺复原
                  </TabsTrigger>
                </TabsList>
                <TabsContent
                  className="flex-1 overflow-auto p-6 bg-white shadow-inner"
                  value="history">
                  <h2 className="text-2xl font-bold mb-4 text-gray-700">
                    耀州窑的历史和文化价值
                  </h2>
                  <p className="mb-4 text-gray-600">
                    这里是一些关于耀州窑的历史和文化价值的分析...
                  </p>
                  <img
                    alt="耀州窑的历史和文化价值图片"
                    className="w-full h-[200px] object-cover rounded-md shadow-lg"
                    src="/placeholder.svg"
                  />
                </TabsContent>
                <TabsContent
                  className="flex-1 overflow-auto p-6 bg-white shadow-inner"
                  value="position">
                  <h2 className="text-2xl font-bold mb-4 text-gray-700">
                    耀州窑在中国瓷器历史中的地位
                  </h2>
                  <p className="mb-4 text-gray-600">
                    这里是一些关于耀州窑在中国瓷器历史中的地位的分析...
                  </p>
                  <img
                    alt="耀州窑在中国瓷器历史中的地位图片"
                    className="w-full h-[200px] object-cover rounded-md shadow-lg"
                    src="/placeholder.svg"
                  />
                </TabsContent>
                <TabsContent
                  className="flex-1 overflow-auto p-6 bg-white shadow-inner"
                  value="culture">
                  <h2 className="text-2xl font-bold mb-4 text-gray-700">
                    关中古陶瓷文化
                  </h2>
                  <p className="mb-4 text-gray-600">
                    这里是一些关于关中古陶瓷文化的分析...
                  </p>
                  <img
                    alt="关中古陶瓷文化图片"
                    className="w-full h-[200px] object-cover rounded-md shadow-lg"
                    src="/placeholder.svg"
                  />
                </TabsContent>
                <TabsContent
                  className="flex-1 overflow-auto p-6 bg-white shadow-inner"
                  value="recover">
                  <h2 className="text-2xl font-bold mb-4 text-gray-700">
                    关中古陶瓷文化
                  </h2>
                  <p className="mb-4 text-gray-600">
                    这里是一些关于关中古陶瓷文化的分析...
                  </p>
                  <img
                    alt="关中古陶瓷文化图片"
                    className="w-full h-[200px] object-cover rounded-md shadow-lg"
                    src="/placeholder.svg"
                  />
                </TabsContent>
              </TabsRoot>
            </TabsContent>
          </TabsRoot>
        </TabsContent>
      </TabsRoot>
    </div>
  );
}
