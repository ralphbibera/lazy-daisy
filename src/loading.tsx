import { cn } from "./utils";
import { cva, VariantProps } from "class-variance-authority";

const loadingVariants = cva("loading", {
  variants: {
    color: {
      neutral: "text-neutral",
      primary: "text-primary",
      secondary: "text-secondary",
      accent: "text-accent",
      info: "text-info",
      success: "text-success",
      warning: "text-warning",
      error: "text-error",
    },
    style: {
      spinner: "loading-spinner",
      dots: "loading-dots",
      ring: "loading-ring",
      ball: "loading-ball",
      bars: "loading-bars",
      infinity: "loading-infinity",
    },
    size: {
      xs: "loading-xs",
      sm: "loading-sm",
      md: "loading-md",
      lg: "loading-lg",
      xl: "loading-xl",
    },
  },
  defaultVariants: {
    color: "neutral",
    size: "md",
  },
});

const Loading = ({
  className,
  color,
  style,
  size,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof loadingVariants>) => {
  return (
    <span
      {...props}
      className={cn(loadingVariants({ color, style, size }), className)}
    />
  );
};

export { Loading };
