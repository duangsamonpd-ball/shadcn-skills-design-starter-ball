import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { expect, userEvent, waitFor, within } from "storybook/test";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const slides = Array.from({ length: 5 });

const meta = {
  title: "Components/Carousel",
  component: Carousel,
  tags: ["autodocs"],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {slides.map((_, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

/** Clicking Next scrolls forward and enables the Previous control. */
export const NavigateWithButtons: Story = {
  render: () => (
    <Carousel className="mx-auto w-full max-w-xs">
      <CarouselContent>
        {slides.map((_, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const prev = canvas.getByRole("button", { name: "Previous slide" });
    const next = canvas.getByRole("button", { name: "Next slide" });
    // At the start you can't scroll back.
    await waitFor(() => expect(prev).toBeDisabled());
    await userEvent.click(next);
    // After advancing, Previous becomes available.
    await waitFor(() => expect(prev).toBeEnabled());
    await userEvent.click(prev);
    await waitFor(() => expect(prev).toBeDisabled());
  },
};

/** Arrow keys move the carousel while the region has focus. */
export const KeyboardNavigation: Story = {
  render: () => (
    <Carousel className="mx-auto w-full max-w-xs">
      <CarouselContent>
        {slides.map((_, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const prev = canvas.getByRole("button", { name: "Previous slide" });
    const next = canvas.getByRole("button", { name: "Next slide" });
    // The region's capture handler catches arrow keys from any descendant;
    // focus a control inside it so the keystrokes are routed there.
    next.focus();
    await userEvent.keyboard("{ArrowRight}");
    await waitFor(() => expect(prev).toBeEnabled());
    await userEvent.keyboard("{ArrowLeft}");
    await waitFor(() => expect(prev).toBeDisabled());
  },
};

/** Vertical orientation. */
export const Vertical: Story = {
  render: () => (
    <Carousel
      orientation="vertical"
      className="mx-auto w-full max-w-xs"
      opts={{ align: "start" }}
    >
      <CarouselContent className="h-[240px]">
        {slides.map((_, index) => (
          <CarouselItem key={index} className="basis-1/2">
            <Card>
              <CardContent className="flex items-center justify-center p-6">
                <span className="text-3xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

/** setApi exposes the embla instance so the slide count can be read. */
export const WithApi: Story = {
  render: function WithApiRender() {
    const [api, setApi] = React.useState<CarouselApi | null>(null);
    const [count, setCount] = React.useState(0);
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
      if (!api) return;
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);
      const onSelect = () => setCurrent(api.selectedScrollSnap() + 1);
      api.on("select", onSelect);
      return () => {
        api.off("select", onSelect);
      };
    }, [api]);

    return (
      <div className="mx-auto w-full max-w-xs">
        <Carousel setApi={setApi}>
          <CarouselContent>
            {slides.map((_, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <p className="py-2 text-center text-sm text-muted-foreground">
          Slide {current} of {count}
        </p>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() =>
      expect(canvas.getByText("Slide 1 of 5")).toBeInTheDocument()
    );
    await userEvent.click(canvas.getByRole("button", { name: "Next slide" }));
    await waitFor(() =>
      expect(canvas.getByText("Slide 2 of 5")).toBeInTheDocument()
    );
  },
};
