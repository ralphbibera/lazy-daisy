import { Input as RACInput, Label } from "react-aria-components";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "./utils";

const inputVariants = cva("input", {
  variants: {
    color: {
      neutral: "input-neutral",
      primary: "input-primary",
      secondary: "input-secondary",
      accent: "input-accent",
      info: "input-info",
      success: "input-success",
      warning: "input-warning",
      error: "input-error",
    },
    style: {
      ghost: "input-ghost",
    },
    size: {
      xs: "input-xs",
      sm: "input-sm",
      md: "input-md",
      lg: "input-lg",
      xl: "input-xl",
    },
  },
  defaultVariants: {
    color: "neutral",
    size: "md",
  },
});

const Input = ({
  className,
  color,
  style,
  size,
  children,
  label = "start",
  ...props
}: React.ComponentProps<typeof RACInput> &
  VariantProps<typeof inputVariants> & {
    label?: "start" | "end";
  }) => {
  return (
    <Label
      className={cn(inputVariants({ color, style, size, className }), {
        "input-disabled": props.disabled,
      })}
    >
      {label === "start" && children && (
        <span className="floating-label">{children}</span>
      )}
      <RACInput {...props} />
      {label === "end" && children && (
        <span className="floating-label">{children}</span>
      )}
    </Label>
  );
};

export { Input, inputVariants };
