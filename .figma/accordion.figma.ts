// url=https://www.figma.com/design/HfydkFEyj2PY0tpZMz7i3K/-shadcn_ui-components-not-token--for-learning-?node-id=308-14
// source=src/components/ui/accordion.tsx
// component=AccordionItem
//
// Code Connect template for the Figma "Accordion" component (node 308-14,
// "Animation Components") → the shadcn AccordionItem composition in this repo.
//
// ⚠️ PARTIALLY VERIFIED (2026-06-15, Figma MCP, Full seat)
// `get_metadata` on the Accordion component (node 3016:508) confirms the variant
// property is **State** with values **Default / Open** (the earlier "Closed/Open"
// guess was wrong — corrected below).
//
// The text-layer property names ("Title", "Content") still CANNOT be confirmed:
// `get_context_for_code_connect` returns "You need a Developer seat in an
// Organization or Enterprise plan to access Code Connect." So the getString names
// below remain best-effort and Code Connect cannot be *published* from this plan.
// To finish: obtain a Developer seat on an Org/Enterprise plan, then run
// `get_context_for_code_connect` on the component and reconcile the getString
// names (property names are case-sensitive).
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
  'Default': 'closed',
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
