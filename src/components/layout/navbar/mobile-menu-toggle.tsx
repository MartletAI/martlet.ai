import { Icon } from "@/components/icon";

interface MobileMenuToggleProps {
  isOpen: boolean;
  onToggle: () => void;
  menuId: string;
}

/**
 * MobileMenuToggle - Hamburger/close button for mobile navigation.
 */
export function MobileMenuToggle({ isOpen, onToggle, menuId }: MobileMenuToggleProps) {
  return (
    <button
      type="button"
      className="md:hidden p-2 cursor-pointer"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls={menuId}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <Icon name={isOpen ? "x" : "menu"} />
    </button>
  );
}
