// Inspired by Chatbot-UI and modified to fit the needs of this project
// @see https://github.com/mckaywrigley/chatbot-ui/blob/main/components/Chat/ChatMessage.tsx

import { Avatar, Link } from '@nextui-org/react';
import { Message } from 'ai';
import { CodeBlock } from 'components/atoms/Chat/codeblock';
import { IconOpenAI, IconUser } from 'components/atoms/Chat/icons';
import styles from 'components/molecules/Chat/chat-message.module.scss';
import { MemoizedReactMarkdown } from 'components/molecules/Chat/markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

export interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div className={styles.main}>
      <div
        className={
          'flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border shadow ' +
            message.role ===
          'user'
            ? 'bg-background'
            : 'bg-primary text-primary-foreground'
        }
      >
        {message.role === 'user' ? (
          <Avatar isBordered radius="sm" icon={<IconUser />} />
        ) : (
          <Avatar
            isBordered
            radius="sm"
            color="primary"
            icon={<IconOpenAI />}
          />
        )}
      </div>
      <div className="flex-1 px-1 ml-4 space-y-2 overflow-hidden">
        <MemoizedReactMarkdown
          className="prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0"
          remarkPlugins={[remarkGfm, remarkMath]}
          components={{
            p({ children }) {
              return <p className="mb-2 last:mb-0">{children}</p>;
            },
            ul({ children }) {
              return <ul className="list-disc ml-4">{children}</ul>;
            },
            ol({ children }) {
              return <ol className="list-decimal ml-4">{children}</ol>;
            },
            li({ children }) {
              return <li className="mb-2 last:mb-0">{children}</li>;
            },
            a({ children, ...props }) {
              return (
                <Link
                  isExternal
                  className="text-primary"
                  href={props.href}
                  showAnchorIcon
                >
                  {children}
                </Link>
              );
            },
            code({ node, inline, className, children, ...props }) {
              if (children.length) {
                if (children[0] == '▍') {
                  return (
                    <span className="mt-1 cursor-default animate-pulse">▍</span>
                  );
                }

                children[0] = (children[0] as string).replace('`▍`', '▍');
              }

              const match = /language-(\w+)/.exec(className || '');

              if (inline) {
                return (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              }

              return (
                <CodeBlock
                  key={Math.random()}
                  language={(match && match[1]) || ''}
                  value={String(children).replace(/\n$/, '')}
                  {...props}
                />
              );
            },
          }}
        >
          {message.content}
        </MemoizedReactMarkdown>
      </div>
    </div>
  );
}
