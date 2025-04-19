import { cn } from "./utils";
import { cva, VariantProps } from "class-variance-authority";

const badgeVariants = cva("badge", {
  variants: {
    color: {
      neutral: "badge-neutral",
      primary: "badge-primary",
      secondary: "badge-secondary",
      accent: "badge-accent",
      info: "badge-info",
      success: "badge-success",
      warning: "badge-warning",
      error: "badge-error",
    },
    style: {
      outline: "badge-outline",
      dash: "badge-dash",
      soft: "badge-soft",
      ghost: "badge-ghost",
    },
    size: {
      xs: "badge-xs",
      sm: "badge-sm",
      md: "badge-md",
      lg: "badge-lg",
      xl: "badge-xl",
    },
  },
  defaultVariants: {
    color: "neutral",
    size: "md",
  },
});

const Badge = ({
  className,
  color,
  style,
  size,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof badgeVariants>) => {
  return (
    <div
      {...props}
      className={cn(badgeVariants({ color, style, size }), className)}
    />
  );
};

export { Badge };
