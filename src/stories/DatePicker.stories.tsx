import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

/** A Date Picker is composed from a Popover + Calendar. */
function DatePickerExample() {
  const [date, setDate] = React.useState<Date | undefined>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="size-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </PopoverContent>
    </Popover>
  );
}

const meta = {
  title: "Components/Date Picker",
  component: DatePickerExample,
  tags: ["autodocs"],
} satisfies Meta<typeof DatePickerExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <DatePickerExample />,
};
