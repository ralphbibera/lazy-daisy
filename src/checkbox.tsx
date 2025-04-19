import { Checkbox as RACheckbox } from "react-aria-components";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "./utils";

const checkboxVariants = cva("checkbox", {
  variants: {
    color: {
      primary: "checkbox-primary",
      secondary: "checkbox-secondary",
      accent: "checkbox-accent",
      neutral: "checkbox-neutral",
      success: "checkbox-success",
      warning: "checkbox-warning",
      info: "checkbox-info",
      error: "checkbox-error",
    },
    size: {
      xs: "checkbox-xs",
      sm: "checkbox-sm",
      md: "checkbox-md",
      lg: "checkbox-lg",
      xl: "checkbox-xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const Checkbox = ({
  children,
  className,
  color,
  size,
  ...props
}: React.ComponentProps<typeof RACheckbox> &
  VariantProps<typeof checkboxVariants>) => {
  return (
    <RACheckbox {...props} className="label">
      {({ isSelected, isDisabled }) => (
        <>
          <input
            type="checkbox"
            className={cn(checkboxVariants({ color, size }), className)}
            checked={isSelected}
            disabled={isDisabled}
          />
          {children}
        </>
      )}
    </RACheckbox>
  );
};

export { Checkbox };
