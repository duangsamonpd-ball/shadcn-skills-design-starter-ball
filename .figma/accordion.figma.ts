// url=https://www.figma.com/design/HfydkFEyj2PY0tpZMz7i3K/-shadcn_ui-components-not-token--for-learning-?node-id=308-14
// source=src/components/ui/accordion.tsx
// component=AccordionItem
//
// Code Connect template for the Figma "Accordion" component (node 308-14,
// "Animation Components") → the shadcn AccordionItem composition in this repo.
//
// ⚠️ ASSUMPTIONS TO VERIFY
// The Figma component's exact property names could not be read live (Figma MCP
// rate limit on the current View seat / Professional plan; Code Connect publishing
// also requires an Org/Enterprise plan). The property names below ("Title",
// "Content", "State") are best-effort guesses from the design. Once MCP access is
// restored, run `get_context_for_code_connect` on the component's
// mainComponentNodeId and reconcile the getString/getEnum names with what Figma
// reports (property names are case-sensitive).
import figma from 'figma'
const instance = figma.selectedInstance

// Trigger label — the visible accordion heading ("Product Information", etc.)
const title = instance.getString('Title')

// Body copy shown when the item is expanded.
const content = instance.getString('Content')

// Open/closed is a VARIANT in Figma, but in shadcn the open state is controlled at
// runtime by the parent <Accordion> value, not a prop on the item. Captured here for
// completeness; it intentionally does not emit a prop (AccordionItem has none).
const state = instance.getEnum('State', {
  'Closed': 'closed',
  'Open': 'open',
})

export default {
  example: figma.code`
    <AccordionItem value="item-1">
      <AccordionTrigger>${title}</AccordionTrigger>
      <AccordionContent>${content}</AccordionContent>
    </AccordionItem>
  `,
  imports: [
    'import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"',
  ],
  id: 'accordion-item',
  metadata: {
    nestable: true,
  },
}
