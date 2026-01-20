import {
  type ButtonProps,
  type ButtonAsButton,
  type ButtonAsLink,
  type ButtonVariant,
  type ButtonSize,
} from "./types";

/* -----------------------------------------------------------------------------
 * Style Mappings
 * -------------------------------------------------------------------------- */

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  outline: "btn-outline",
  ghost: "bg-transparent hover:bg-surface-hover",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  default: "",
  lg: "btn-lg",
  sm: "py-1 px-3 text-xs",
};

/* -----------------------------------------------------------------------------
 * Helpers
 * -------------------------------------------------------------------------- */

/** Type guard to check if props are for an anchor element */
function isLinkProps(props: ButtonProps): props is ButtonAsLink {
  return props.as === "a";
}

/** Constructs className string from base classes and optional custom class */
function buildClassName(
  variant: ButtonVariant,
  size: ButtonSize,
  customClass?: string
): string {
  return ["btn", VARIANT_CLASSES[variant], SIZE_CLASSES[size], customClass]
    .filter(Boolean)
    .join(" ");
}

/* -----------------------------------------------------------------------------
 * Component
 * -------------------------------------------------------------------------- */

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "default",
    className: customClassName,
    children,
    ...restProps
  } = props;

  const className = buildClassName(variant, size, customClassName);

  if (isLinkProps(props)) {
    const { as: _, href, ref, ...anchorProps } = restProps as ButtonAsLink;
    return (
      <a ref={ref} href={href} className={className} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { as: _, ref, ...buttonProps } = restProps as ButtonAsButton;
  return (
    <button ref={ref} className={className} {...buttonProps}>
      {children}
    </button>
  );
}
