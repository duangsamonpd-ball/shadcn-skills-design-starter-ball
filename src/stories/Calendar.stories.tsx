import * as React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import type { DateRange } from "react-day-picker";
import { expect, userEvent, waitFor, within } from "storybook/test";
import { Calendar } from "@/components/ui/calendar";

const meta = {
  title: "Components/Calendar",
  component: Calendar,
  tags: ["autodocs"],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

// A fixed month keeps the rendered grid deterministic across runs.
const june2026 = new Date(2026, 5, 15);

function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(june2026);
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      defaultMonth={june2026}
      className="rounded-md border"
    />
  );
}

export const Default: Story = {
  render: () => <CalendarDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Selecting a day re-renders the button (its label gains ", selected").
    await userEvent.click(
      canvas.getByRole("button", { name: "Wednesday, June 10th, 2026" })
    );
    await waitFor(() =>
      expect(
        canvas.getByRole("button", {
          name: "Wednesday, June 10th, 2026, selected",
        })
      ).toHaveAttribute("data-selected-single", "true")
    );
  },
};

/** Month/year dropdown caption — renders the down chevron and dropdowns. */
export const DropdownCaption: Story = {
  render: function DropdownRender() {
    const [date, setDate] = React.useState<Date | undefined>(june2026);
    return (
      <Calendar
        mode="single"
        captionLayout="dropdown"
        selected={date}
        onSelect={setDate}
        defaultMonth={june2026}
        className="rounded-md border"
      />
    );
  },
};

/** Range selection drives the range-start/middle/end day states. */
export const RangeMode: Story = {
  render: function RangeRender() {
    const [range, setRange] = React.useState<DateRange | undefined>({
      from: new Date(2026, 5, 10),
      to: new Date(2026, 5, 16),
    });
    return (
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        defaultMonth={june2026}
        className="rounded-md border"
      />
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Range days carry the "selected" modifier, so their labels end in ", selected".
    await expect(
      canvas.getByRole("button", { name: /June 10th, 2026, selected/ })
    ).toHaveAttribute("data-range-start", "true");
    await expect(
      canvas.getByRole("button", { name: /June 16th, 2026, selected/ })
    ).toHaveAttribute("data-range-end", "true");
    await expect(
      canvas.getByRole("button", { name: /June 12th, 2026, selected/ })
    ).toHaveAttribute("data-range-middle", "true");
  },
};

/** Weekends disabled. */
export const DisabledDays: Story = {
  render: () => (
    <Calendar
      mode="single"
      defaultMonth={june2026}
      disabled={{ dayOfWeek: [0, 6] }}
      className="rounded-md border"
    />
  ),
};

/** Navigating to the next month re-renders the grid. */
export const Navigation: Story = {
  render: () => (
    <Calendar mode="single" defaultMonth={june2026} className="rounded-md border" />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("June 2026")).toBeInTheDocument();
    await userEvent.click(
      canvas.getByRole("button", { name: /next month/i })
    );
    await waitFor(() =>
      expect(canvas.getByText("July 2026")).toBeInTheDocument()
    );
    await userEvent.click(
      canvas.getByRole("button", { name: /previous month/i })
    );
    await waitFor(() =>
      expect(canvas.getByText("June 2026")).toBeInTheDocument()
    );
  },
};
