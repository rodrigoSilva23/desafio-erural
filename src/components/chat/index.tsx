import Talk from "talkjs";
import uuid from "react-uuid";
import { geradorNome} from 'gerador-nome'
import { useEffect, useState, useRef } from "react";
interface PropsChat{
  idRoom?: string;
}
export default function Chat(props:PropsChat){
  const randomIdUser = uuid();

  const chatboxEl:any = useRef();

  // wait for TalkJS to load
  const [talkLoaded, markTalkLoaded] = useState(false);

  useEffect(() => {
    Talk.ready.then(() => markTalkLoaded(true));

    if (talkLoaded) {
      const currentUser = new Talk.User({
        id: randomIdUser,
        name: geradorNome(),
        email: "henrymill@example.com",
        photoUrl: "henry.jpeg",
        welcomeMessage: "Hello!",
        role: "default",
      });

      const otherUser = new Talk.User({
        id: randomIdUser,
        name: geradorNome(),
        email: "Gisele@example.com",
        photoUrl: "jessica.jpeg",
        welcomeMessage: "Hello!",
        role: "default",
      });

      const session = new Talk.Session({
        appId: "tBjKcdpw",
        me: currentUser,
      });

      //const conversationId = Talk.oneOnOneId(currentUser, otherUser);
      const conversation = session.getOrCreateConversation('122');
      conversation.setParticipant(currentUser);
      conversation.setParticipant(otherUser);

      const chatbox:any = session.createChatbox();
      chatbox.select(conversation);
      chatbox.mount(chatboxEl.current);

      return () => session.destroy();
    }
  }, [talkLoaded]);

  return <div ref={chatboxEl} />;
}
