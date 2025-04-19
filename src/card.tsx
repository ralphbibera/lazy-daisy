import { cn } from "./utils";
import { cva, VariantProps } from "class-variance-authority";

const cardVariants = cva("card", {
  variants: {
    modifier: {
      "image-side": "card-side",
      "image-full": "image-full",
    },
    style: {
      border: "card-border",
      dash: "card-dash",
    },
    size: {
      xs: "card-xs",
      sm: "card-sm",
      md: "card-md",
      lg: "card-lg",
      xl: "card-xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const Container = ({
  className,
  style,
  size,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof cardVariants>) => {
  return (
    <div {...props} className={cn(cardVariants({ style, size }), className)} />
  );
};

const Body = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div {...props} className={cn("card-body", className)} />;
};

const Title = ({ className, ...props }: React.ComponentProps<"h2">) => {
  return (
    <h2 {...props} className={cn("card-title", className)}>
      Card Title
    </h2>
  );
};

const Actions = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div {...props} className={cn("card-actions", className)} />;
};

export { Container, Body, Title, Actions };
