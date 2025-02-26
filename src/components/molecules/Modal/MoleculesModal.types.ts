export interface IMoleculesModalProps {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  onSave: () => void;
  onCancel: () => void;
}
