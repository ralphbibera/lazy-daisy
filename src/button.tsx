import { Button as RACButton } from "react-aria-components";
import { cn } from "./utils";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva("btn", {
  variants: {
    color: {
      neutral: "btn-neutral",
      primary: "btn-primary",
      secondary: "btn-secondary",
      accent: "btn-accent",
      info: "btn-info",
      success: "btn-success",
      warning: "btn-warning",
      error: "btn-error",
    },
    style: {
      outline: "btn-outline",
      dash: "btn-dash",
      soft: "btn-soft",
      ghost: "btn-ghost",
      link: "btn-link",
    },
    size: {
      xs: "btn-xs",
      sm: "btn-sm",
      md: "btn-md",
      lg: "btn-lg",
      xl: "btn-xl",
    },
  },
  defaultVariants: {
    color: "neutral",
    size: "md",
  },
});

const Button = ({
  className,
  color,
  style,
  size,
  ...props
}: React.ComponentProps<typeof RACButton> &
  VariantProps<typeof buttonVariants>) => {
  return (
    <RACButton
      {...props}
      className={({ isDisabled }) =>
        cn(buttonVariants({ color, style, size, className }), {
          "btn-disabled": isDisabled,
        })
      }
    />
  );
};

export { Button, buttonVariants };
