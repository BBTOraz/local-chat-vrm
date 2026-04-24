Title: Overview

URL Source: https://ai-sdk.dev/elements/overview

Markdown Content:
Foundations: Overview

===============

[](https://vercel.com/)

[AI SDK](https://ai-sdk.dev/)

v5

*   [Docs](https://ai-sdk.dev/docs)
*   [Cookbook](https://ai-sdk.dev/cookbook)
*   [Providers](https://ai-sdk.dev/providers)
*   [Playground](https://ai-sdk.dev/playground)
*   [AI Elements AI Elements](https://ai-sdk.dev/elements)
*   [AI Gateway Gateway](https://vercel.com/ai-gateway)

Search…

⌘K

Feedback[](https://github.com/vercel/ai)

Sign in with Vercel

Sign in with Vercel

AI SDK 5 is available now.

[View Announcement](https://vercel.com/blog/ai-sdk-5)

Menu

[Introduction](https://ai-sdk.dev/elements/overview)

[Setup](https://ai-sdk.dev/elements/overview/setup)

[Usage](https://ai-sdk.dev/elements/overview/usage)

[Troubleshooting](https://ai-sdk.dev/elements/overview/troubleshooting)

[Examples](https://ai-sdk.dev/elements/examples)

[Chatbot](https://ai-sdk.dev/elements/examples/chatbot)

[v0 clone](https://ai-sdk.dev/elements/examples/v0)

[Workflow](https://ai-sdk.dev/elements/examples/workflow)

[Components](https://ai-sdk.dev/elements/components)

[Chatbot](https://ai-sdk.dev/elements/components/chatbot)

[Actions](https://ai-sdk.dev/elements/components/actions)

[Branch](https://ai-sdk.dev/elements/components/branch)

[Chain of Thought](https://ai-sdk.dev/elements/components/chain-of-thought)

[Code Block](https://ai-sdk.dev/elements/components/code-block)

[Context](https://ai-sdk.dev/elements/components/context)

[Conversation](https://ai-sdk.dev/elements/components/conversation)

[Image](https://ai-sdk.dev/elements/components/image)

[Inline Citation](https://ai-sdk.dev/elements/components/inline-citation)

[Loader](https://ai-sdk.dev/elements/components/loader)

[Message](https://ai-sdk.dev/elements/components/message)

[Open In Chat](https://ai-sdk.dev/elements/components/open-in-chat)

[Prompt Input](https://ai-sdk.dev/elements/components/prompt-input)

[Reasoning](https://ai-sdk.dev/elements/components/reasoning)

[Response](https://ai-sdk.dev/elements/components/response)

[Sources](https://ai-sdk.dev/elements/components/sources)

[Suggestion](https://ai-sdk.dev/elements/components/suggestion)

[Task](https://ai-sdk.dev/elements/components/task)

[Tool](https://ai-sdk.dev/elements/components/tool)

[Workflow](https://ai-sdk.dev/elements/components/workflow)

[Canvas](https://ai-sdk.dev/elements/components/canvas)

[Connection](https://ai-sdk.dev/elements/components/connection)

[Controls](https://ai-sdk.dev/elements/components/controls)

[Edge](https://ai-sdk.dev/elements/components/edge)

[Node](https://ai-sdk.dev/elements/components/node)

[Panel](https://ai-sdk.dev/elements/components/panel)

[Toolbar](https://ai-sdk.dev/elements/components/toolbar)

[Vibe Coding](https://ai-sdk.dev/elements/components/vibe-coding)

[Artifact](https://ai-sdk.dev/elements/components/artifact)

[Web Preview](https://ai-sdk.dev/elements/components/web-preview)

Introduction

Copy markdown

[AI Elements](https://ai-sdk.dev/elements/overview#ai-elements)
===============================================================

[AI Elements](https://www.npmjs.com/package/ai-elements) is a component library and custom registry built on top of [shadcn/ui](https://ui.shadcn.com/) to help you build AI-native applications faster. It provides pre-built components like conversations, messages and more.

You can install it with:

ai-elements shadcn

npx ai-elements@latest

Here are some basic examples of what you can achieve using components from AI Elements.

![Image 1: OpenAI](https://github.com/openai.png)ChatGPT![Image 2: Anthropic](https://github.com/anthropics.png)Claude![Image 3: X AI](https://github.com/xai-org.png)Grok

Can you explain how to use React hooks effectively?

Used 2 sources

React Hooks Best Practices
==========================

React hooks are a powerful feature that let you use state and other React features without writing classes. Here are some tips for using them

Attach Search

Analyze data Surprise me Summarize text Code Get advice More

[Components](https://ai-sdk.dev/elements/overview#components)
-------------------------------------------------------------

Actions

[Go to component](https://ai-sdk.dev/elements/components/actions)

Code Preview

Hello, how are you?

I am fine, thank you!

Retry Like Dislike Copy Share

Artifact

[Go to component](https://ai-sdk.dev/elements/components/artifact)

Code Preview

Dijkstra's Algorithm Implementation

Updated 1 minute ago

Run Copy Regenerate Download Share

```
1# Dijkstra's Algorithm implementation
2import heapq
3
4def dijkstra(graph, start):
5    distances = {node: float('inf') for node in graph}
6    distances[start] = 0
7    heap = [(0, start)]
8    visited = set()
9    
10    while heap:
11        current_distance, current_node = heapq.heappop(heap)
12        if current_node in visited:
13            continue
14        visited.add(current_node)
15        
16        for neighbor, weight in graph[current_node].items():
17            distance = current_distance + weight
18            if distance < distances[neighbor]:
19                distances[neighbor] = distance
20                heapq.heappush(heap, (distance, neighbor))
21    
22    return distances
23
24# Example graph
25 graph = {
26    'A': {'B': 1, 'C': 4},
27    'B': {'A': 1, 'C': 2, 'D': 5},
28    'C': {'A': 4, 'B': 2, 'D': 1},
29    'D': {'B': 5, 'C': 1}
30}
31
32print(dijkstra(graph, 'A'))
```

```
1# Dijkstra's Algorithm implementation
2import heapq
3
4def dijkstra(graph, start):
5    distances = {node: float('inf') for node in graph}
6    distances[start] = 0
7    heap = [(0, start)]
8    visited = set()
9    
10    while heap:
11        current_distance, current_node = heapq.heappop(heap)
12        if current_node in visited:
13            continue
14        visited.add(current_node)
15        
16        for neighbor, weight in graph[current_node].items():
17            distance = current_distance + weight
18            if distance < distances[neighbor]:
19                distances[neighbor] = distance
20                heapq.heappush(heap, (distance, neighbor))
21    
22    return distances
23
24# Example graph
25 graph = {
26    'A': {'B': 1, 'C': 4},
27    'B': {'A': 1, 'C': 2, 'D': 5},
28    'C': {'A': 4, 'B': 2, 'D': 1},
29    'D': {'B': 5, 'C': 1}
30}
31
32print(dijkstra(graph, 'A'))
```

Branch

[Go to component](https://ai-sdk.dev/elements/components/branch)

Code Preview

What are the key strategies for optimizing React performance?

![Image 4](https://github.com/haydenbleasel.png)

How can I improve the performance of my React application?

![Image 5](https://github.com/haydenbleasel.png)

What performance optimization techniques should I use in React?

![Image 6](https://github.com/haydenbleasel.png)

1 of 3

Here's the first response to your question. This approach focuses on performance optimization.

![Image 7](https://github.com/openai.png)

Here's an alternative response. This approach emphasizes code readability and maintainability over pure performance.

![Image 8](https://github.com/openai.png)

And here's a third option. This balanced approach considers both performance and maintainability, making it suitable for most use cases.

![Image 9](https://github.com/openai.png)

1 of 3

Chain of Thought

[Go to component](https://ai-sdk.dev/elements/components/chain-of-thought)

Code Preview

Chain of Thought

Searching for profiles for Hayden Bleasel

![Image 10](https://ai-sdk.dev/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fwww.x.com%3Ftoken%3Dpk_WvmDV4TyQzGbpcnwL6tImw&w=32&q=75&dpl=dpl_6kWU4h1X3bkeqhgTJyxAphEgJWhf)www.x.com

![Image 11](https://ai-sdk.dev/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fwww.instagram.com%3Ftoken%3Dpk_WvmDV4TyQzGbpcnwL6tImw&w=32&q=75&dpl=dpl_6kWU4h1X3bkeqhgTJyxAphEgJWhf)www.instagram.com

![Image 12](https://ai-sdk.dev/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fwww.github.com%3Ftoken%3Dpk_WvmDV4TyQzGbpcnwL6tImw&w=32&q=75&dpl=dpl_6kWU4h1X3bkeqhgTJyxAphEgJWhf)www.github.com

Found the profile photo for Hayden Bleasel

![Image 13: Example generated image](blob:http://localhost/a73554c8882e738b2871eb72a93ef246)

Hayden Bleasel's profile photo from x.com, showing a Ghibli-style man.

Hayden Bleasel is an Australian product designer, software engineer, and founder. He is currently based in the United States working for Vercel, an American cloud application company.

Code Block

[Go to component](https://ai-sdk.dev/elements/components/code-block)

Code Preview

```
function MyComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>This is an example React component.</p>
    </div>
  );
}
```

```
function MyComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>This is an example React component.</p>
    </div>
  );
}
```

Context

[Go to component](https://ai-sdk.dev/elements/components/context)

Code Preview

31.3%

Conversation

[Go to component](https://ai-sdk.dev/elements/components/conversation)

Code Preview

Hello, how are you?

![Image 14](https://github.com/haydenbleasel.png)

I'm good, thank you! How can I assist you today?

![Image 15](https://github.com/openai.png)

I'm looking for information about your services.

![Image 16](https://github.com/haydenbleasel.png)

Sure! We offer a variety of AI solutions. What are you interested in?

![Image 17](https://github.com/openai.png)

I'm interested in natural language processing tools.

![Image 18](https://github.com/haydenbleasel.png)

Great choice! We have several NLP APIs. Would you like a demo?

![Image 19](https://github.com/openai.png)

Yes, a demo would be helpful.

![Image 20](https://github.com/haydenbleasel.png)

Image

[Go to component](https://ai-sdk.dev/elements/components/image)

Code Preview

![Image 21: Example generated image](blob:http://localhost/a73554c8882e738b2871eb72a93ef246)

Loader

[Go to component](https://ai-sdk.dev/elements/components/loader)

Code Preview

Message

[Go to component](https://ai-sdk.dev/elements/components/message)

Code Preview

Hello, how are you?

![Image 22](https://github.com/haydenbleasel.png)

Open In Chat

[Go to component](https://ai-sdk.dev/elements/components/open-in-chat)

Code Preview

Open in chat

Prompt Input

[Go to component](https://ai-sdk.dev/elements/components/prompt-input)

Code Preview

Search GPT-4

Reasoning

[Go to component](https://ai-sdk.dev/elements/components/reasoning)

Code Preview

Thinking...

Let me think about this problem step by step.

First, I need to understand what the user is asking for.

They want a reasoning component that opens automatically when stre

Response

[Go to component](https://ai-sdk.dev/elements/components/response)

Code Preview

### Hello World

This is a markdown response from an AI model.

* * *

Tables
------

| Column 1 | Column 2 | Column 3 |
| --- | --- | --- |

Sources

[Go to component](https://ai-sdk.dev/elements/components/sources)

Code Preview

Used 3 sources

Suggestion

[Go to component](https://ai-sdk.dev/elements/components/suggestion)

Code Preview

What are the latest trends in AI?How does machine learning work?Explain quantum computing Best practices for React development Tell me about TypeScript benefits How to optimize database queries?What is the difference between SQL and NoSQL?Explain cloud computing basics

Task

[Go to component](https://ai-sdk.dev/elements/components/task)

Code Preview

Found project files

Searching "app/page.tsx, components structure"

Read

page.tsx

Scanning 52 files

Scanning 2 files

Reading files

layout.tsx

Tool

[Go to component](https://ai-sdk.dev/elements/components/tool)

Code Preview

database_query

Completed

Web Preview

[Go to component](https://ai-sdk.dev/elements/components/web-preview)

Code Preview

Console

Inline Citation

[Go to component](https://ai-sdk.dev/elements/components/inline-citation)

Code Preview

According to recent studies, artificial intelligence has shown remarkable progress in natural language processing. The technology continues to evolve rapidly, with new breakthroughs being announced regularly

example.com +5

.

View the [source code](https://github.com/vercel/ai-elements) for all components on GitHub.

[Next Setup](https://ai-sdk.dev/elements/overview/setup)

On this page

[AI Elements](https://ai-sdk.dev/elements/overview#ai-elements)

[Components](https://ai-sdk.dev/elements/overview#components)

Deploy and Scale AI Apps with Vercel.
Vercel delivers the infrastructure and developer experience you need to ship reliable AI-powered applications at scale.

Trusted by industry leaders:

*   ![Image 23: leonardo-ai Logo](https://ai-sdk.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-leonardo-ai-light.526e111b.svg&w=384&q=75&dpl=dpl_6kWU4h1X3bkeqhgTJyxAphEgJWhf)![Image 24: leonardo-ai Logo](https://ai-sdk.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-leonardo-ai-dark.8b6b14e3.svg&w=384&q=75&dpl=dpl_6kWU4h1X3bkeqhgTJyxAphEgJWhf)
*   ![Image 25: zapier Logo](https://ai-sdk.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-zapier-light.7b452767.svg&w=256&q=75&dpl=dpl_6kWU4h1X3bkeqhgTJyxAphEgJWhf)![Image 26: zapier Logo](https://ai-sdk.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-zapier-dark.bfd8e374.svg&w=256&q=75&dpl=dpl_6kWU4h1X3bkeqhgTJyxAphEgJWhf)

[Talk to an expert](https://vercel.com/contact/sales?utm_source=ai_sdk&utm_medium=web&utm_campaign=contact_sales_cta&utm_content=talk_to_an_expert_sdk_docs)

#### Resources

[Docs](https://ai-sdk.dev/docs)[Cookbook](https://ai-sdk.dev/cookbook)[Providers](https://ai-sdk.dev/providers)[Showcase](https://ai-sdk.dev/showcase)[GitHub](https://github.com/vercel/ai)[Discussions](https://github.com/vercel/ai/discussions)

#### More

[Playground](https://ai-sdk.dev/playground)[](https://v0.dev/)[Contact Sales](https://vercel.com/contact/sales)

#### About Vercel

[Next.js + Vercel](https://vercel.com/frameworks/nextjs)[Open Source Software](https://vercel.com/oss)[GitHub](https://github.com/vercel)[X](https://x.com/vercel)

#### Legal

[Privacy Policy](https://vercel.com/legal/privacy-policy)

© 2025 Vercel, Inc.

