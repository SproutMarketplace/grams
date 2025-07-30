import { PageHeader } from '@/components/page-header';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Send, Search } from 'lucide-react';

const contacts = [
  {
    name: "Jane Doe - Green Leaf",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "woman portrait",
    lastMessage: "Sounds good, let's finalize the order.",
    time: "10:42 AM",
    online: true,
  },
  {
    name: "John Smith - AeroVapes",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "man portrait",
    lastMessage: "I'll get back to you with the lab results.",
    time: "9:15 AM",
    online: false,
  },
  {
    name: "Support Team",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "logo abstract",
    lastMessage: "Your ticket has been updated.",
    time: "Yesterday",
    online: true,
  },
];

const chatHistory = [
    { sender: 'me', text: 'Hi Jane, checking in on the order for the OG Kush.' },
    { sender: 'other', text: 'Hey! Yes, we are ready to place the order for 10 units.' },
    { sender: 'me', text: 'Great, I will prepare the invoice. Anything else you need?' },
    { sender: 'other', text: "No, that's all for now. Thanks!" },
    { sender: 'me', text: 'Sounds good, let\'s finalize the order.' },
  ];

export default function MessagesPage() {
  return (
    <div className="flex h-[calc(100vh-theme(spacing.14))] flex-col">
      <div className="p-4 md:p-8 pt-6 pb-0">
        <PageHeader title="Messages" />
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:p-8">
        <div className="md:col-span-1 lg:col-span-1 flex flex-col border rounded-lg">
          <div className="p-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search contacts..." className="pl-8" />
            </div>
          </div>
          <Separator />
          <ScrollArea className="flex-1">
            <div className="p-2">
              {contacts.map((contact, index) => (
                <button key={index} className={`flex items-center gap-3 p-2 rounded-lg text-left w-full transition-colors ${index === 0 ? 'bg-primary/10' : 'hover:bg-muted'}`}>
                  <Avatar className="relative">
                    <AvatarImage src={contact.avatar} alt={contact.name} data-ai-hint={contact.aiHint} />
                    <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                    {contact.online && <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-background" />}
                  </Avatar>
                  <div className="flex-1 truncate">
                    <p className="font-semibold">{contact.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{contact.lastMessage}</p>
                  </div>
                  <time className="text-xs text-muted-foreground">{contact.time}</time>
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>

        <div className="md:col-span-2 lg:col-span-3 flex flex-col border rounded-lg">
          <div className="p-4 border-b flex items-center gap-3">
             <Avatar>
                <AvatarImage src="https://placehold.co/100x100.png" alt="Jane Doe" data-ai-hint="woman portrait" />
                <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <h2 className="text-lg font-semibold">Jane Doe - Green Leaf</h2>
          </div>
          <ScrollArea className="flex-1 p-4 bg-muted/30">
            <div className="space-y-4">
              {chatHistory.map((msg, index) => (
                <div key={index} className={`flex items-end gap-2 ${msg.sender === 'me' ? 'justify-end' : ''}`}>
                  {msg.sender === 'other' && <Avatar className="h-8 w-8"><AvatarImage src="https://placehold.co/100x100.png" alt="Jane Doe" data-ai-hint="woman portrait" /><AvatarFallback>JD</AvatarFallback></Avatar>}
                  <div className={`rounded-lg px-4 py-2 max-w-sm ${msg.sender === 'me' ? 'bg-primary text-primary-foreground' : 'bg-background shadow-sm'}`}>
                    <p>{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <div className="p-4 border-t">
            <form className="flex items-center gap-2">
              <Input placeholder="Type a message..." className="flex-1" />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
