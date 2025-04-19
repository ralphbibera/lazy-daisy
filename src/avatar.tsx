import { cva, VariantProps } from "class-variance-authority";
import { cn } from "./utils";

const avatarVariants = cva("avatar", {
  variants: {
    modifier: {
      online: "avatar-online",
      offline: "avatar-offline",
      placeholder: "avatar-placeholder",
    },
    size: {
      xs: "w-12",
      sm: "w-16",
      md: "w-20",
      lg: "w-24",
      xl: "w-32",
    },
  },
});

const Avatar = ({
  className,
  children,
  modifier,
  size = "md",
  ...props
}: React.ComponentPropsWithRef<"div"> &
  VariantProps<typeof avatarVariants>) => {
  return (
    <div className={cn(avatarVariants({ modifier }))} {...props}>
      <div className={cn(avatarVariants({ size }), className)}>{children}</div>
    </div>
  );
};

const AvatarGroup = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithRef<"div">) => {
  return (
    <div {...props} className={cn("avatar-group -space-x-6", className)}>
      {children}
    </div>
  );
};

export { Avatar, AvatarGroup };
