import { Divider } from '@nextui-org/react';
import Dialog from 'app/usecase/[id]/Dialog';
import { Chat } from 'components/chatbot/chat';
import { Separator } from 'components/chatbot/ui/separator';
import usecaseDetailFeatcher from 'lib/axios/usecaseDetailFetcher';

const Detail = async ({ params }: { params: { id: string } }) => {
  console.info(`Detail: ${params.id}`);

  const res = await usecaseDetailFeatcher(params.id);

  return (
    <div className="h-full" style={{ width: '80%' }}>
      <Chat id={params.id} usecase={res} />
    </div>
  );
};

export default Detail;
