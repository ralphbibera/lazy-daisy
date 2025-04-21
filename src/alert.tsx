import { cva, VariantProps } from "class-variance-authority";
import { cn } from "./utils";

const alertVariants = cva("alert", {
  variants: {
    style: {
      outline: "alert-outline",
      dash: "alert-dash",
      soft: "alert-soft",
    },
    color: {
      info: "alert-info",
      success: "alert-success",
      warning: "alert-warning",
      error: "alert-error",
    },
    direction: {
      horizontal: "alert-horizontal",
      vertical: "alert-vertical",
    },
  },
  defaultVariants: {
    direction: "horizontal",
  },
});

const Alert = ({
  className,
  style,
  color,
  direction,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) => {
  return (
    <div
      {...props}
      className={cn(alertVariants({ style, color, direction, className }))}
    />
  );
};

export { Alert, alertVariants };
