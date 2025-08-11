import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="13” MacBook Air, M2, 8GB RAM (2022)">
            I was using an Intel-based 14” MacBook Pro prior to this and the
            difference is night and day. I’ve never heard the fans turn on a
            single time, even under the incredibly heavy loads I put it through
            with our various launch simulations.
          </Tool>
          <Tool title="Samsung M5 Smart Display (27”)">
            The display has baked in smart features and is a great option which is value for money, low-eye strain and perfect for productivity. When you’re working at break neck speeds and shipping software, every pixel you can get counts.
          </Tool>
          <Tool title="Logitech MK235 Wireless Keyboard">
            The keyboard is compact, has great typing feel, and the wireless
            connectivity is reliable and fast. It has long battery life and work well with macoOS and windows keyboard shortcuts.
          </Tool>
          <Tool title="Razer DeathAdder V2X Hyperspeed">
            Something about the shape and weight distribution of this mouse, combined with the high-precision sensor, makes it an absolute joy to use for long periods.
          </Tool>
          <Tool title="Green Soul Jupiter Pro">
            If I’m going to slouch in the worst ergonomic position imaginable
            all day, I might as well do it in a chair that supports my back.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Microsoft Vs Code">
            The <strong>best text editor ever made</strong>, Microsoft Vs Code offers all the bells and whistles of a full-fledged IDE with the customizable and snappy behavior of a lightweight text editor. I use it for everything from writing code to writing documentation. Also, GitHub Copilot is a game changer.
          </Tool>
          <Tool title="Warp Terminal">
            I’m honestly not even sure if I’ll ever go back to the OG iTerm2, but Warp has been a game changer for my terminal experience. Agent mode and the command palette make it super easy to navigate and manage my terminal sessions.
          </Tool>
          <Tool title="DBeaver">
            Great software for working with databases. Has saved me from
            building about a thousand admin interfaces for my various projects
            over the years.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            We started using Figma as just a design tool but now it’s become our
            virtual whiteboard for the entire company. Never would have expected
            the collaboration features to be the real hook.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Raycast">
            It’s not the newest kid on the block but it’s still the fastest. The
            Sublime Text of the application launcher world. I used Alfred for a
            long time but Raycast has taken its place.
          </Tool>
          <Tool title="MacWhisper">
            Great tool for transcribing audio to text quickly and accurately, into any textbox system wide or in app. Its a gamechanger wether I’m writing a blog post, or taking notes from a meeting or chatting with any interface that has a input field.
          </Tool>
          <Tool title="Claude Desktop">
            Powerful AI assistant thats my copilot on all tasks. It helps me brainstorm ideas, write content, and even debug code. Helps me stay focused and productive.
          </Tool>
          <Tool title="Comet Browser">
            The agentic browser, Comet is a game changer from preplexity labs. It’s like having a personal assistant that can help you navigate the web, find information, and even automate tasks. It’s a must-have for anyone who spends a lot of time online.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
